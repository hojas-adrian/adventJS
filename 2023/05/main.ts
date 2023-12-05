export function cyberReindeer(road: string, time: number) {
  // Code here
  const output: string[] = [];
  const steps = road.split("");
  let lastStep = ".";

  for (let i = 0; i < time; i++) {
    output.push(steps.join(""));
    if (i >= 4) {
      steps.forEach((step, index) => {
        steps[index] = step === "|" ? "*" : step;
      });
    }

    const santa = steps.indexOf("S");

    if (steps[santa + 1] !== "|") {
      steps[santa] = lastStep;
      lastStep = steps[santa + 1];
      steps[santa + 1] = "S";
    }
  }

  return output;
}
