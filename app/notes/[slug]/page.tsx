import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { formatNoteDate, getNoteBySlug, notes } from "@/lib/notes";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

type NotePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return {};
  }

  const socialImages =
    siteUrl && note.coverImage
      ? [
          {
            url: note.coverImage,
            alt: note.title,
          },
        ]
      : undefined;

  return {
    title: `${note.title} | Yang's Notes`,
    description: note.description,
    authors: [{ name: note.author }],
    openGraph: {
      title: note.title,
      description: note.description,
      type: "article",
      siteName: "Yang's Notes",
      publishedTime: note.publishedAt,
      modifiedTime: note.updatedAt,
      authors: [note.author],
      images: socialImages,
    },
    twitter: {
      card: socialImages ? "summary_large_image" : "summary",
      title: note.title,
      description: note.description,
      creator: "@yangpten",
      images: socialImages?.map((image) => image.url),
    },
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  const Note = note.Content;
  const wasUpdated = note.updatedAt !== note.publishedAt;

  return (
    <main className="min-h-screen px-8 pb-16 pt-24 sm:pt-28">
      <article className="mx-auto max-w-2xl space-y-10">
        <header className="space-y-4">
          <Link
            href="/"
            className="text-sm text-blue-600 underline hover:text-blue-800"
          >
            Back
          </Link>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.24em] text-gray-500">
              Note
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
              {note.title}
            </h1>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-500">
              <time dateTime={note.publishedAt}>
                Published {formatNoteDate(note.publishedAt)}
              </time>
              {wasUpdated ? (
                <time dateTime={note.updatedAt}>
                  Updated {formatNoteDate(note.updatedAt)}
                </time>
              ) : null}
            </div>
          </div>
        </header>

        <div className="space-y-10 text-[15px] [&_h2]:mt-12 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-gray-900 [&_h3]:mt-8 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-gray-900 [&_ol]:list-decimal [&_ol]:space-y-4 [&_ol]:pl-5 [&_ol]:marker:font-semibold [&_p]:leading-7 [&_p]:text-gray-700 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-gray-700 [&_ul]:marker:text-gray-500 [&_li]:leading-7">
          <Note />
        </div>
      </article>
    </main>
  );
}
