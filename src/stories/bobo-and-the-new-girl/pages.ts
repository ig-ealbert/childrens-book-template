import { makePages } from "@/lib/page-maker";

const pageText = [
  `
  Story and art by
  Elizabeth Albert
  `,
  `
  BoBo lives with her brother YoYo.
  They both get lots of attention.
  They both get lots of food.
  `,
  `
  One day, a new cat appeared in the house.
  She had orange and white fur, and she was beautiful.
  "I'm Rosie! You may treat me like royalty."
  `,
  `
  BoBo didn't like this one bit.
  She swatted at the new girl and growled.
  Rosie, displeased with the treatment, hid under the bed.
  `,
  `
  "I can't believe I'm being replaced!
  How could the human do this to me?
  We don't need another cat in the house.
  I liked it better when it was just us," BoBo complained.
  `,
  `
  YoYo knew it was time to intervene.
  "I don't think you're being replaced.
  I'll go talk to the new girl and sort things out."
  `,
  `
  BoBo stayed outside the room to listen to the conversation.
  YoYo checked under the bed and offered to be Rosie's friend.
  Rosie came out and started crying.
  "Why are you crying, little one?" YoYo asked.
  `,
  `
  "Because I don't know why I'm here," Rosie replied.
  "I was so happy with my human, and then I was taken here.
  I don't understand. How could she give me up?
  Was I not perfect enough?"
  `,
  `
  "That must be really difficult for you.
  BoBo and I were also given up by our previous humans.
  But we're here together now, and this human is a good servant.
  I think you'll like it here, whatever the reason for your arrival."
  `,
  `
  Rosie stopped crying, because this might be a better home than before.
  YoYo was there to help her learn the rules of the house.
  The first rule: don't make BoBo mad.
  `,
  `
  As Rosie settled in, BoBo realized she wasn't being replaced.
  The human still paid lots of attention to her.
  And she got the same amount of food as before.
  And Rosie wasn't so different from her after all.
  `,
  `
  While she still didn't like Rosie, at least she wasn't being mean anymore.
  BoBo decided that all was well.
  So she curled up and went to sleep.
  `,
];

const images = [
  "/bobo-and-the-new-girl/cover-page.png",
  "/bobo-and-the-new-girl/bobo-yoyo-eating.png",
  "/bobo-and-the-new-girl/rosie-appears.png",
  "/bobo-and-the-new-girl/bobo-angry.png",
  "/bobo-and-the-new-girl/bobo-complaining.png",
  "/bobo-and-the-new-girl/yoyo-help.png",
  "/bobo-and-the-new-girl/rosie-crying-with-yoyo.png",
  "/bobo-and-the-new-girl/rosie-heart-broken.png",
  "/bobo-and-the-new-girl/yoyo-heart-fixed.png",
  "/bobo-and-the-new-girl/rosie-no-bobo-angry.png",
  "/bobo-and-the-new-girl/bobo-food-heart.png",
  "/bobo-and-the-new-girl/bobo-sleeping.jpg",
];

export const pages = makePages(pageText, images);
