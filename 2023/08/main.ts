export function organizeGifts(gifts: string) {
  let number = "";

  const giftsStore: { gift: string; amount: number }[] = [];
  const giftsCharts = gifts.split("");

  giftsCharts.forEach((chart) => {
    if (isNaN(parseInt(chart)) !== true) {
      number += chart;
      return;
    }

    giftsStore.push({
      amount: +number,
      gift: chart,
    });

    number = "";
  });

  const output = giftsStore.map(
    ({ gift, amount }: { gift: string; amount: number }) => {
      const pallets = Math.floor(amount / 50);
      const boxes = Math.floor((amount % 50) / 10);
      const bags = amount % 10;

      return `${`[${gift}]`.repeat(pallets)}${`{${gift}}`.repeat(boxes)}${
        bags ? `(${gift.repeat(bags)})` : ""
      }`;
    },
  );

  return output.join("");
}
