# Children's Book Template

## Goal

If you want to create a children's book without worrying about printing / publishing costs, this is your solution! Simply add the text and images, then run the project!

## Instructions

Follow the pattern I provided with the example books.

The story text and image paths go in the `src/stories/*/pages.ts` file, where `*` is the name of your book.

The `pageText` array holds the text of each page, starting with the title page. Use backticks (`\``) so that you can format it with line breaks how you would like it to display.

The `images` paths are defined as absolute paths from the `public` folder (`next.js` enforces this). Create a folder in the `public` directory with the name of your book, and put the images there. Then the image path would be `/name-of-your-book/name-of-your-image.extension`.

The pages are created by the function in the `src/lib/page-maker.ts` file, which is called at the end of the `pages.ts` file under `stories`. When in doubt, follow the existing pattern!

The final thing to change is the import statement in `src/app/page.tsx`. I have an example commented out in there. Import `{ pages }` from your story. Then it should display your book. It's that easy!

## Illustrations

Use whatever technology or lack thereof to create pictures for the book.

Thanks to `samelliottdlt` for [pixel-art](https://github.com/samelliottdlt/pixel-art), which I used for my illustrations.

## Prerequisites

You will need to install [`git`](https://git-scm.com/install/) and [`node.js`](https://nodejs.org/en), if you don't have them already. Then open Git Bash or your favorite command line tool to clone the repo.

```
git clone https://github.com/ig-ealbert/childrens-book-template
```

Move to that folder.

```
cd childrens-book-template
```

## Getting Started

First time only:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to read the book.

## Creation

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
