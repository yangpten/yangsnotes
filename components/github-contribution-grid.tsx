type Contribution = {
  date: string;
  count: number;
  level: number;
};

const contributionApi = "https://github-contributions-api.jogruber.de/v4/yangpten?y=last";

function getCurrentStreak(contributions: Contribution[]) {
  let streak = 0;

  for (const contribution of [...contributions].reverse()) {
    if (contribution.count === 0 && streak === 0) continue;
    if (contribution.count === 0) break;
    streak += 1;
  }

  return streak;
}

function getWeeks(contributions: Contribution[]) {
  const firstDate = new Date(`${contributions[0].date}T00:00:00`);
  const leadingDays = firstDate.getDay();
  const padded = [
    ...Array.from({ length: leadingDays }, () => null),
    ...contributions,
  ];

  return Array.from({ length: Math.ceil(padded.length / 7) }, (_, weekIndex) =>
    padded.slice(weekIndex * 7, weekIndex * 7 + 7),
  );
}

export default async function GitHubContributionGrid() {
  let response: Response;

  try {
    response = await fetch(contributionApi, { next: { revalidate: 3600 } });
  } catch {
    return null;
  }

  if (!response.ok) return null;

  const data = (await response.json()) as { contributions?: Contribution[] };
  const today = new Date().toISOString().slice(0, 10);
  const contributions = (data.contributions ?? []).filter(
    (contribution) => contribution.date <= today,
  );

  if (!contributions.length) return null;

  const weeks = getWeeks(contributions);
  const total = contributions.reduce((sum, day) => sum + day.count, 0);
  const streak = getCurrentStreak(contributions);

  return (
    <section className="border-t border-gray-200 pt-10">
      <div className="space-y-5">
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.24em] text-gray-500">
            GitHub activity
          </p>
          <a
            href="https://github.com/yangpten"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-600 underline hover:text-blue-800"
          >
            View profile
          </a>
        </div>

        <div className="overflow-x-auto pb-1">
          <div className="flex min-w-[640px] gap-1" aria-label="GitHub contribution grid">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <div key={day?.date ?? `empty-${weekIndex}-${dayIndex}`} className="group relative">
                    <div
                      aria-label={
                        day ? `${day.count} contributions on ${day.date}` : undefined
                      }
                      className="h-2.5 w-2.5 rounded-[2px]"
                      style={{
                        backgroundColor: day
                          ? ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"][day.level]
                          : "transparent",
                      }}
                    />
                    {day && (
                      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white shadow-sm group-hover:block">
                        {day.count} contributions on {day.date}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-500">
          {total.toLocaleString()} contributions in the last year
          {streak > 0 ? ` · ${streak}-day current streak` : ""}
        </p>
      </div>
    </section>
  );
}
