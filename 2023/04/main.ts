export function decode(message: string) {
  // Code here
  const stack: string[][] = [[]];

  const messageCharts = message.split("");

  messageCharts.forEach((chart) => {
    if (chart === "(") {
      return stack.push([]);
    }

    if (chart === ")") {
      const reverted = stack.at(-1)?.toReversed() as string[];
      stack.pop();

      return stack.at(-1)?.push(...reverted);
    }

    stack.at(-1)?.push(chart);
  });

  return stack[0].join("");
}
