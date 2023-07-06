
const url = `${import.meta.env.VITE_BASE_URL}/clients`;


/**
 * Get all clients
 * @returns {Promise}
 */
export const getClients = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

/**
 * Get client by id
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

/**
 * Update client
 * @param {String} id 
 * @param {Object} data 
 */
export const updateClient  = async ( id, data ) => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  try {
    const response = await fetch(`${url}/${id}`, options);
    await response.json();
  } catch (error) {
    console.log(error);
  }
}

export const deleteClient  = async ( id ) => {
  const options = {
    method: 'DELETE'
  }
  
  try {
    const response = await fetch(`${url}/${id}`, options);
    await response.json();
  } catch (error) {
    console.log(error);
  }
}