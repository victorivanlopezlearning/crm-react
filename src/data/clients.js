
const url = `${import.meta.env.VITE_BASE_URL}/clients`;

export const getClients = async () => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}