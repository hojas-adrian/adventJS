export function drawGift(size: number, symbol: string) {
  // Code here
  const output = { firstPart: "", secondPart: "" };

  for (let i = 1; i <= size; i++) {
    output.firstPart += " ".repeat(size - i);

    if (i === 1) {
      output.firstPart += `${"#".repeat(size)}\n`;
      continue;
    }

    if (i === size) {
      output.firstPart += `${"#".repeat(size)}${symbol.repeat(size - 2)}#\n`;
      output.secondPart += `${"#".repeat(size)}\n`;
      continue;
    }

    output.firstPart += `#${symbol.repeat(size - 2)}#${
      symbol.repeat(i - 2)
    }#\n`;
    output.secondPart += `#${symbol.repeat(size - 2)}#${
      symbol.repeat(size - i - 1)
    }#\n`;
  }

  return `${output.firstPart}${output.secondPart}`;
}
