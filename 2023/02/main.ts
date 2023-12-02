export function manufacture(gifts: string[], materials: string) {
  // Code here
  const giftMaterials = materials.split("");

  const checkGiftMaterials = (gift: string) => {
    const currentGiftMaterials = gift.split("");

    const checkMaterial = (currentMaterial: string) =>
      giftMaterials.includes(currentMaterial);

    return currentGiftMaterials.every(checkMaterial);
  };

  return gifts.filter(checkGiftMaterials);
}
