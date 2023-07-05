
const url = `${import.meta.env.VITE_BASE_URL}/clients`;


/**
 * 
 * @returns {Promise}
 */
export const getClients = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

/**
 * 
 * @param {String} id ID client 
 * @returns {Promise}
 */
export const getClient = async ( id ) => {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  return data;
}

/**
 * Create new client
 * @param {Object} data 
 */
export const createClient  = async ( data ) => {

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  try {
    const response = await fetch(url, options);
    await response.json();
  } catch (error) {
    console.log(error);
  }
}