import { makePages } from "@/lib/page-maker";

const pageText = [
  `
  Story and art by
  Elizabeth Albert
  `,
  `
  BoBo and YoYo both love to sleep.
  BoBo especially loves to sleep in the cat bed
  because it has a soft, warm blanket.
  `,
  `
  One day, when BoBo got up to eat,
  YoYo curled up in the cat bed and went to sleep.
  When BoBo got back, she was angry that her bed was taken!
  `,
  `
  BoBo decided that she would stay in the cat bed.
  That way, it would always be hers, and no one could take it from her.
  `,
  `
  Hours passed and BoBo ruled the cat bed.
  Victorious, she slowly drifted off to sleep.
  `,
  `
  Feeling strange, BoBo looked at her body.
  She appeared to be a pillow!
  Why was she a pillow?
  `,
  `
  She thought she heard the bed answer her question.
  "Because pillows stay in bed all day."
  Startled by the suggestion, she woke up.
  `,
  `
  Thankful to still be a cat, she started thinking.
  What if life wasn't all about owning the bed?
  And what if YoYo slept in the bed for a bit?  That would be ok.
  `,
  `
  She decided to get up to eat and play.
  She started to feel better.  She became happier and healthier.
  YoYo was pleased to have his friend back.
  `,
  `
  Sharing the bed was good for both of them.
  BoBo was in there most, but not all, of the time.
  For now, the bed was hers, and she went to sleep.
  `,
];

const images = [
  "/bobo-learns-to-share/cover-page.png",
  "/bobo-learns-to-share/bobo-yoyo-bed.png",
  "/bobo-learns-to-share/yoyo-bed-bobo-angry.png",
  "/bobo-learns-to-share/bobo-only-bed.png",
  "/bobo-learns-to-share/bobo-happy-bed-sleeping.png",
  "/bobo-learns-to-share/bobo-pillow.png",
  "/bobo-learns-to-share/bed-answer.png",
  "/bobo-learns-to-share/bobo-thinking.png",
  "/bobo-learns-to-share/bobo-eating-playing-watching.png",
  "/bobo-learns-to-share/bobo-sleeping.jpg",
];

export const pages = makePages(pageText, images);
