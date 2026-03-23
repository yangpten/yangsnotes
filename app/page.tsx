import Link from "next/link";
import { formatNoteDate, notes } from "@/lib/notes";

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

export default function Home() {
  return (
    <main className="min-h-screen px-8 pb-16 pt-24 sm:pt-28">
      <div className="mx-auto max-w-2xl space-y-14">
        <section className="space-y-8">
          <div className="space-y-2 text-gray-700">
            <p className="mb-2">{introParagraphs[0]}</p>
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
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-200 pt-10">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.24em] text-gray-500">
              Notes
            </p>

            <div className="space-y-5">
              {notes.map((note) => (
                <article key={note.slug} className="space-y-2">
                  <p className="text-sm text-gray-500">
                    <time dateTime={note.publishedAt}>
                      {formatNoteDate(note.publishedAt)}
                    </time>
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                    <Link
                      href={note.href}
                      className="underline decoration-gray-300 underline-offset-4 transition hover:decoration-gray-900"
                    >
                      {note.title}
                    </Link>
                  </h2>
                  <p className="max-w-xl leading-7 text-gray-700">
                    {note.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
