// ClaseFunciones
function wrapping(gifts) {
  const wrappedGifts = [];

  for (const gift of gifts) {
    const length = gift.length;
    const totalChars = length + 4;
    const wrappedGift = new Array(totalChars).fill("*");

    wrappedGift[0] = wrappedGift[totalChars - 1] = "*";
    wrappedGift[1] = wrappedGift[totalChars - 2] = " ";

    const mid = Math.floor(totalChars / 2);
    for (let i = 0; i < length; i++) {
      wrappedGift[mid - Math.floor(length / 2) + i] = gift[i];
    }

    wrappedGifts.push(wrappedGift.join("") + "\n");
  }

  return wrappedGifts;
}

const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);

console.log(wrapped);
