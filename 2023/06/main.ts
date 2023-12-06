export function maxDistance(movements: string) {
  // Code here
  const directions = movements.split("");

  const maxDistanceReduce = (
    { distance, plus }: { distance: number; plus: number },
    direction: string,
  ) => {
    if (direction === "<") distance--;
    if (direction === ">") distance++;
    if (direction === "*") plus++;

    return { distance, plus };
  };

  const { distance, plus } = directions.reduce(maxDistanceReduce, {
    distance: 0,
    plus: 0,
  });
  return Math.abs(distance) + plus;
}
