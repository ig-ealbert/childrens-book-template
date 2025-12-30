import { makePages } from "@/lib/page-maker";

const pageText = [
  `
  Story and art by
  Elizabeth Albert
  `,
  `
  BoBo lives with her brother YoYo.  They both love to eat.
  One day, when it was time for dinner,
  YoYo pushed BoBo out of the way and ate all the food.
  `,
  `
  BoBo was hungry and became angry at YoYo.
  She decided that she would become
  large enough to push HIM out of the way!
  `,
  `
  And so she started eating.
  And eating.
  And eating.
  `,
  `
  Soon she was larger than YoYo.
  She easily pushed him out of the way at dinner time.
  But she didn't stop there.
  She continued to eat and grow.
  `,
  `
  BoBo became too large to fit in the house.
  She had to live outside.
  `,
  `
  Even outside, she continued to eat.
  She started eating trees, buildings, and cars.
  People looked tasty, but they would run away.
  `,
  `
  After a day of intense eating, BoBo found herself stuck!
  She thought, "I can eat these buildings to free myself!"
  But she was too large to reach them.
  `,
  `
  She started to think about her situation.
  Why did she get so large?  To get revenge on YoYo, right?
  But she had accomplished that long ago.  Why didn't she stop then?
  Had she become a monster?
  `,
  `
  She decided to set things right.
  She stopped eating trees, buildings, and cars.
  She became unstuck from between the buildings.
  As time passed, she started getting smaller.
  `,
  `
  When she was back to the size of a house cat, she went home.
  She apologized to YoYo, who welcomed her back.
  Then she curled up on the bed and went to sleep.
  `,
];

const images = [
  "/bobos-big-adventure/cover-page.png",
  "/bobos-big-adventure/yoyo-eating.png",
  "/bobos-big-adventure/bobo-angry.png",
  "/bobos-big-adventure/bobo-growing.png",
  "/bobos-big-adventure/bobo-eating.png",
  "/bobos-big-adventure/bobo-outside.png",
  "/bobos-big-adventure/bobo-outside-feast.png",
  "/bobos-big-adventure/bobo-stuck.png",
  "/bobos-big-adventure/bobo-thinking.png",
  "/bobos-big-adventure/bobo-shrinking.png",
  "/bobos-big-adventure/bobo-sleeping.jpg",
];

export const pages = makePages(pageText, images);
