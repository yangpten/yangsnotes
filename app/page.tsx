import type { ReactNode } from "react";

const introParagraphs = [
  "Hey 👋 I'm Yang,",
  "Previously, I worked in roles across finance, strategy, and product at Macquarie, L.E.K., Rokt, and Checkbox.",
  "I'm a self-taught developer and have been building things on the internet for as long as I can remember.",
  "My content is usually about AI, growth, dev workflows, or startups.",
  "I studied law at the University of Sydney and even got admitted as a lawyer, but never practiced.",
];

const socialLinks = [
  { href: "https://x.com/yangpten", label: "X (Twitter) @yangpten" },
  { href: "https://www.youtube.com/@yangpten", label: "YouTube @yangpten" },
  { href: "https://www.tiktok.com/@yangpten", label: "TikTok @yangpten" },
  {
    href: "https://yangsnewsletter.substack.com/",
    label: "Substack newsletter",
  },
];

const rankingFactors = [
  {
    title: "Keyword Relevance in Metadata",
    paragraphs: [
      "This is your on-page SEO equivalent. App name/title, subtitle (iOS) / short description (Google Play), keyword field (iOS only, 100 chars), and long description (Google Play indexes this, Apple does not). Pick the right keywords here and you're doing 40% of the work you can control.",
    ],
  },
  {
    title: "Install Velocity & Conversion Rate",
    paragraphs: [
      "Install velocity = the rate of installs over a given time window, not just the absolute count. An app getting 500 installs/day for the last 3 days is a stronger signal than one that got 10,000 installs six months ago and now gets 20/day.",
      "Think of it like freshness signals in web SEO. The stores want to surface apps that are currently gaining traction, not just historically popular. This is why launch weeks matter so much - a coordinated push (PR, social, cross-promo, paid) that spikes install velocity in a short window can bootstrap you into higher rankings, which then drives organic installs, which sustains the velocity. It's a flywheel when it works.",
      "The stores also care about your conversion rate from impression to install. A high-converting listing gets shown more. This is the equivalent of CTR in SEO, except it directly feeds ranking.",
    ],
  },
  {
    title: "Ratings & Reviews",
    paragraphs: [
      "Volume, recency, and average score. A 4.5+ with volume is table stakes for competitive categories. Consensus is that below 4.0 and you're actively being suppressed.",
    ],
  },
  {
    title: "Retention & Engagement (Post-Install Signals)",
    paragraphs: [
      "This is where ASO diverges from SEO. Apple and Google both use post-install signals. If people install and immediately churn, the store learns your app doesn't deserve the ranking. This is the equivalent of pogo-sticking in web search, except it's measured over days/weeks.",
      "How heavily is this weighted? Post-install signals definitely matter, but they're more of a slow decay/boost than a hard gate. An app with great install numbers but 80% day-1 churn will gradually lose ranking position over weeks, not instantly.",
      "What about hard paywalls? The stores almost certainly account for the fact that different business models produce different engagement patterns. A utility app you open once a month has fundamentally different retention curves than a social app. The stores have category-level baselines - they're comparing you to your peers, not to TikTok.",
      "That said, hard paywalls do create a real ASO tension: they tank your conversion rate (most people bounce at the paywall) and reduce your install volume. The stores see both signals. This is one of the strongest arguments for a freemium or soft paywall model from a pure ASO perspective - not because the stores punish paywalls directly, but because the downstream metrics (installs, engagement, retention) all suffer compared to a free-with-upgrade model.",
    ],
  },
  {
    title: "Update Frequency",
    paragraphs: [
      "Regular updates signal a maintained app. Not a massive factor but it's a hygiene baseline.",
    ],
  },
];

const conversionAssets = [
  {
    title: "Icon",
    body: "Massive impact on CTR. Test it. Bold, simple, distinctive at small sizes.",
  },
  {
    title: "Screenshots",
    body: "First 2-3 are critical since most people never scroll. Treat them like above-the-fold hero sections. Benefit-driven captions beat feature lists.",
  },
  {
    title: "Preview Video",
    body: "Autoplays on iOS (muted). Can boost or kill conversion. A bad video is worse than no video.",
  },
  {
    title: "Ratings Prompt Strategy",
    body: "When and how you ask for reviews is a product decision that directly affects ASO. Prompt after positive moments (completed a level, achieved a goal).",
  },
];

const truePoints = [
  "Keywords in title/name are the single most impactful on-page lever.",
  "Conversion rate optimization (icon, screenshots) is genuinely high-ROI.",
  "Google Play long description indexing makes it more SEO-like.",
  "Localization is a massive unlock - translating metadata into 20+ languages is one of the few genuine free lunch moves in ASO.",
];

const hypePoints = [
  '"ASO tools give you accurate search volume" - They do not. Apple and Google do not share this data. Tools like Sensor Tower and AppTweak use modeled estimates. Directionally useful, not precise. Treat them like Ahrefs keyword difficulty - a proxy, not truth.',
  '"Backlinks help ASO" - On Google Play there is a weak signal from web authority, but nothing like web SEO. On Apple, basically irrelevant to search ranking, though referral traffic helps install velocity.',
  '"Keyword density in descriptions matters on Apple" - It does not. Apple does not index the description.',
  '"You need to change keywords every week" - Over-rotation kills you. Test in 4-week cycles minimum. Keyword rankings take time to stabilize.',
  '"Paid installs boost organic rankings" - This used to be more true. Both stores have gotten better at discounting incentivized and low-quality installs. It can still work as a signal but the ROI has degraded.',
  '"Category ranking is super important" - It drives less discovery than people think. Search and browse/featured are where the volume is.',
];

const launchChecklist = [
  {
    title: "Nail your keyword research",
    body: "Find the intersection of relevance, search volume (directional), and low competition. Long-tail first, exactly like SEO.",
  },
  {
    title: "Optimize title + subtitle/short description",
    body: "Put your best keywords here. Do not keyword-stuff the title though; it also needs to convert.",
  },
  {
    title: "Make your first 3 screenshots sell the benefit",
    body: "This is your conversion rate lever. A/B test if you have volume.",
  },
  {
    title: "Get to 4.5+ stars",
    body: "Implement smart in-app review prompts after positive moments (completed a level, achieved a goal).",
  },
  {
    title: "Localize metadata",
    body: "Even if the app is English-only, localized metadata in top markets captures long-tail searches at near-zero cost. Use the cross-locale keyword hack on Apple for bonus keyword slots.",
  },
];

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight text-gray-900">
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-base font-semibold text-gray-900">{children}</h3>;
}

function BodyText({ children }: { children: ReactNode }) {
  return <p className="leading-7 text-gray-700">{children}</p>;
}

export default function Home() {
  return (
    <main className="min-h-screen px-8 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-14">
          <section className="space-y-8">
            <div className="space-y-2 text-gray-700">
              <p className="mb-2">
                {introParagraphs[0]}
              </p>
              <p className="mb-2">
                I&apos;m currently focused on building{" "}
                <a
                  href="https://www.dumplingai.com"
                  className="font-medium text-blue-600 underline hover:text-blue-800"
                >
                  DumplingAI
                </a>
                .
              </p>
              {introParagraphs.slice(1).map((paragraph) => (
                <p key={paragraph} className="mb-2">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-col space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>

          <section className="border-t border-gray-200 pt-10">
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.24em] text-gray-500">
                  Posts
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                  ASO 101
                </h1>
              </div>

              <article className="space-y-10 text-[15px]">
                <div className="space-y-4">
                  <BodyText>
                    Coming from B2B SaaS the world of consumer apps seems to
                    operate on an entirely different set of rules (some better
                    and others worse).
                  </BodyText>
                  <BodyText>
                    If you are considering launching a mobile app, ASO is table
                    stakes. Here are some notes I&apos;ve taken as I&apos;ve tried
                    to learn what&apos;s true, what&apos;s hype, and where the
                    80/20 is. This is from the perspective of someone who is
                    already familiar with SEO.
                  </BodyText>
                </div>

                <section className="space-y-4">
                  <SectionTitle>The Core Mental Model</SectionTitle>
                  <BodyText>
                    ASO is SEO for app stores (Apple App Store and Google
                    Play). The ecosystem is more constrained. You&apos;re
                    optimizing within a walled garden with fewer levers, less
                    transparency, and fundamentally different ranking signals.
                  </BodyText>
                  <BodyText>
                    Key structural difference from SEO: in web search, you have
                    near-infinite surface area (pages, blog posts, schema
                    markup). In ASO, you have a tiny fixed set of metadata
                    fields and the stores heavily weight behavioral signals
                    (installs, retention, engagement) alongside keyword
                    relevance.
                  </BodyText>
                </section>

                <section className="space-y-5">
                  <SectionTitle>
                    The Actual Ranking Factors (80/20)
                  </SectionTitle>
                  <ol className="list-decimal space-y-8 pl-5">
                    {rankingFactors.map((factor) => (
                      <li key={factor.title} className="space-y-3 marker:font-semibold">
                        <SubTitle>{factor.title}</SubTitle>
                        {factor.paragraphs.map((paragraph) => (
                          <BodyText key={paragraph}>{paragraph}</BodyText>
                        ))}
                      </li>
                    ))}
                  </ol>
                </section>

                <section className="space-y-5">
                  <SectionTitle>
                    The Conversion Assets - Your Landing Page
                  </SectionTitle>
                  <ul className="space-y-4">
                    {conversionAssets.map((asset) => (
                      <li key={asset.title} className="space-y-1">
                        <SubTitle>{asset.title}</SubTitle>
                        <BodyText>{asset.body}</BodyText>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-5">
                  <SectionTitle>Can the Stores Be Gamed?</SectionTitle>

                  <div className="space-y-3">
                    <SubTitle>
                      Negative SEO: Sending Junk Traffic to Competitors
                    </SubTitle>
                    <BodyText>
                      If conversion rate matters, then driving low-intent
                      impressions to a competitor&apos;s listing would tank their
                      CVR. This is the ASO equivalent of negative SEO.
                    </BodyText>
                    <BodyText>
                      In practice, it&apos;s harder than it sounds. The stores do
                      not expose a direct way to send traffic to a competitor&apos;s
                      listing at scale. You cannot buy impressions on someone
                      else&apos;s listing as a product.
                    </BodyText>
                  </div>

                  <div className="space-y-3">
                    <SubTitle>How the Stores Mitigate This</SubTitle>
                    <BodyText>
                      Both Apple and Google almost certainly segment conversion
                      rates contextually. They do not use a single blended CVR.
                      They weight by traffic source, search term, and browse
                      context. Your conversion rate from a branded search is
                      evaluated differently from your CVR on a generic keyword.
                      They also look at relative conversion performance (how you
                      convert vs. other apps shown for the same query) rather
                      than absolute numbers.
                    </BodyText>
                    <BodyText>
                      Not a perfectly solved problem, but not the easy attack
                      surface it appears at first glance.
                    </BodyText>
                  </div>

                  <div className="space-y-3">
                    <SubTitle>Burst Campaigns</SubTitle>
                    <BodyText>
                      Buying a large volume of installs in 48 hours to simulate
                      organic traction. This used to be more effective. Both
                      stores have gotten much better at discounting
                      incentivized/low-quality installs. The underlying mechanic
                      (velocity matters) is still true, but the ROI on
                      artificial bursts has degraded significantly.
                    </BodyText>
                  </div>
                </section>

                <section className="space-y-5">
                  <SectionTitle>What&apos;s True vs. What&apos;s Hype</SectionTitle>

                  <div className="space-y-4">
                    <SubTitle>True</SubTitle>
                    <ul className="space-y-2">
                      {truePoints.map((point) => (
                        <li key={point} className="leading-7 text-gray-700">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <SubTitle>Hype / Overblown</SubTitle>
                    <ul className="space-y-2">
                      {hypePoints.map((point) => (
                        <li key={point} className="leading-7 text-gray-700">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section className="space-y-5">
                  <SectionTitle>
                    Localization - The Underrated Power Move
                  </SectionTitle>
                  <BodyText>
                    Both stores have completely separate metadata fields per
                    locale. It&apos;s not a single field with translations -
                    it&apos;s a full parallel set of metadata for each
                    language/region.
                  </BodyText>

                  <div className="space-y-4">
                    <SubTitle>How It Works</SubTitle>
                    <ul className="space-y-3">
                      <li className="leading-7 text-gray-700">
                        Apple App Store Connect: per-locale fields for app name,
                        subtitle, keywords, description, promotional text,
                        screenshots, and preview video. Supports about 40
                        localizations.
                      </li>
                      <li className="leading-7 text-gray-700">
                        Google Play Console: separate title, short description,
                        long description, and screenshots per language. Supports
                        75+ languages.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <SubTitle>The Cross-Locale Keyword Hack (Apple)</SubTitle>
                    <BodyText>
                      Apple does something interesting with keyword indexing
                      across locales. For most storefronts, Apple indexes
                      keywords from multiple localizations. For example, the US
                      storefront indexes both your English (US) and Spanish
                      (Mexico) keyword fields. This effectively gives you 200
                      characters of keywords for the US store instead of 100.
                    </BodyText>
                    <BodyText>
                      Experienced ASO practitioners exploit this by putting
                      their primary English keywords in the English locale and
                      secondary/long-tail keywords in the Spanish locale, even
                      if the app is not actually localized into Spanish.
                    </BodyText>
                    <BodyText>
                      This is one of the most under-used legitimate ASO tactics
                      and it&apos;s basically free.
                    </BodyText>
                  </div>

                  <div className="space-y-3">
                    <SubTitle>Google Play: Long Description Surface Area</SubTitle>
                    <BodyText>
                      Since the long description is indexed on Google Play,
                      localized descriptions in major languages give you a
                      massive long-tail keyword surface area. Even
                      machine-translated metadata (cleaned up by a native
                      speaker) can capture searches in languages where
                      competition is near-zero.
                    </BodyText>
                  </div>

                  <div className="space-y-3">
                    <SubTitle>Why It Works So Well</SubTitle>
                    <BodyText>
                      The ROI on localization is genuinely one of the best in
                      ASO because most developers do not bother. Competition on
                      non-English keywords is dramatically lower. Top locales to
                      prioritize: Spanish, Portuguese, German, French,
                      Japanese, Korean, Chinese (Simplified), Italian, and
                      Russian.
                    </BodyText>
                  </div>
                </section>

                <section className="space-y-5">
                  <SectionTitle>
                    The 80/20 - Maximum Impact for Minimum Effort
                  </SectionTitle>
                  <BodyText>
                    If you&apos;re launching an app and want maximum impact:
                  </BodyText>
                  <ul className="space-y-4">
                    {launchChecklist.map((item) => (
                      <li key={item.title} className="space-y-1">
                        <SubTitle>{item.title}</SubTitle>
                        <BodyText>{item.body}</BodyText>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-4">
                  <SectionTitle>
                    One Big Difference From SEO to Internalize
                  </SectionTitle>
                  <BodyText>
                    In web SEO, you can rank a mediocre page with great
                    technical SEO and high quality backlinks. In ASO, the
                    product is the ranking factor. If your app has bad
                    retention, no amount of metadata optimization will save you
                    long-term because the stores incorporate post-install
                    behavior into rankings.
                  </BodyText>
                  <BodyText>
                    ASO without product quality is like SEO without content
                    quality - it might work briefly but it does not compound.
                  </BodyText>
                </section>
              </article>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
