export function findNaughtyStep(original: string, modified: string) {
  // Code here
  const stepsToSheck = original.length;

  for (let step = 0; step <= stepsToSheck; step++) {
    if (modified[step] !== original[step]) {
      return (modified[step] === original[(+step) + 1] || !modified[step])
        ? original[step]
        : modified[step];
    }
  }

  return "";
}
