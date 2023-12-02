export function findFirstRepeated(gifts: number[]) {
  // Code here
  const seen: { [key: number]: boolean } = {};
  for (const gift of gifts) {
    if (seen[gift]) {
      return gift;
    }
    seen[gift] = true;
  }
  return -1;
}
