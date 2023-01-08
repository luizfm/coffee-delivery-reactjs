export const getAddressInfo = async (postalCode: string) => {
  const apiUrl = `${import.meta.env.VITE_ADDRESS_API_URL}/${postalCode}/json`;
  const results = await fetch(apiUrl).then(async (result) => {
    return result.json().then((value) => value);
  });
  return results;
};
