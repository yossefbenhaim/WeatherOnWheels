export const findAddressByCoordinates = (
  coordinates: number[]
): Promise<string> => {
  if (coordinates === null) return Promise.resolve('');
  const URL = `https://nominatim.openstreetmap.org/reverse?format=json&lon=${coordinates[0]}&lat=${coordinates[1]}`;
  return fetch(URL)
    .then((r) => r.json())
    .then((data) => data.display_name)
    .catch((e) => e.message);
};
