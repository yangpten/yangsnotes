declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const metadata: {
    title: string;
    description: string;
    slug: string;
    publishedAt: string;
    updatedAt: string;
    coverImage?: string;
    author: string;
  };

  const MDXComponent: ComponentType<Record<string, never>>;
  export default MDXComponent;
}
