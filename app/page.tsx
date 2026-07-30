import GitHubContributionGrid from "@/components/github-contribution-grid";

const socialLinks = [
  { href: "https://github.com/yangpten", label: "GitHub @yangpten" },
  { href: "https://x.com/yangpten", label: "X (Twitter) @yangpten" },
  { href: "https://www.youtube.com/@yangpten", label: "YouTube @yangpten" },
  { href: "https://www.tiktok.com/@yangpten", label: "TikTok @yangpten" },
  {
    href: "https://yangsnewsletter.substack.com/",
    label: "Substack newsletter",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-8 pb-16 pt-24 sm:pt-28">
      <div className="mx-auto max-w-2xl space-y-14">
        <section className="space-y-8">
          <div className="space-y-2 text-gray-700">
            <p className="mb-2">Hey 👋 I&apos;m Yang,</p>
            <p className="mb-2">
              I&apos;m currently focused on building consumer software.
            </p>
            <p className="mb-2">
              Previously, I built{" "}
              <a
                href="https://www.dumplingai.com"
                className="font-medium text-blue-600 underline hover:text-blue-800"
              >
                <strong>DumplingAI</strong>
              </a>{" "}
              and worked in roles across finance, strategy, and product at
              Macquarie, L.E.K.,
              Rokt, and Checkbox.
            </p>
            <p className="mb-2">
              I&apos;m a self-taught developer and have been building things on
              the internet for as long as I can remember.
            </p>
            <p className="mb-2">
              I studied law at the University of Sydney and even got admitted
              as a lawyer, but never practiced.
            </p>
            <p className="mb-2">
              If you follow me, expect posts about AI, growth, dev workflows,
              or startups.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {link.label}
              </a>
            ))}
          </div>

          <GitHubContributionGrid />
        </section>

      </div>
    </main>
  );
}
