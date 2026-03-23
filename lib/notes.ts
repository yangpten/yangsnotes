import type { ComponentType } from "react";
import Aso101, { metadata as aso101Metadata } from "@/content/notes/aso-101.mdx";

export type NoteMetadata = {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  coverImage?: string;
  author: string;
};

type NoteEntry = NoteMetadata & {
  Content: ComponentType<Record<string, never>>;
  href: string;
};

const noteEntries: NoteEntry[] = [
  {
    ...aso101Metadata,
    Content: Aso101,
    href: `/notes/${aso101Metadata.slug}`,
  },
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const notes = noteEntries.map((note) => ({
  title: note.title,
  description: note.description,
  slug: note.slug,
  publishedAt: note.publishedAt,
  updatedAt: note.updatedAt,
  coverImage: note.coverImage,
  author: note.author,
  href: note.href,
}));

export function getNoteBySlug(slug: string) {
  return noteEntries.find((note) => note.slug === slug);
}

export function formatNoteDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}
