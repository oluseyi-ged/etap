export const predictFuelRefill = (fuelLevel, consumptionRate) => {
  const threshold = 20; // Threshold percentage for refill alert
  if (fuelLevel <= threshold) {
    const predictedKilometers = fuelLevel / consumptionRate;
    return `Low fuel! Refill in ${predictedKilometers.toFixed(2)} km.`;
  }
  return null;
};
