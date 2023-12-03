export function manufacture(gifts: string[], materials: string) {
  // Code here
  const giftMaterials = new Set(materials);

  const checkGiftMaterials = (gift: string) => {
    const currentGiftMaterials = gift.split("");

    const checkMaterial = (currentMaterial: string) =>
      giftMaterials.has(currentMaterial);

    return currentGiftMaterials.every(checkMaterial);
  };

  return gifts.filter(checkGiftMaterials);
}
