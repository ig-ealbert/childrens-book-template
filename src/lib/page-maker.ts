import { page } from "@/types/page";

export function makePages(texts: string[], images: string[]) {
  const pages: page[] = [];

  for (const [index, text] of texts.entries()) {
    const page = {
      text,
      image: images[index],
    };
    pages.push(page);
  }

  return pages;
}
