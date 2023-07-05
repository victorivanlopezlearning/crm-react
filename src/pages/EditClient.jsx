import { useNavigate } from "react-router-dom";
import { getClient } from '../data/clients';

export async function loader({ params }) {
  const client = await getClient(params.clientId);
  
  if (Object.values(client).length === 0) {
    throw new Response("El cliente no fue encontrado", { status: 404 });
  }
  return client;
}

const EditClient = () => {

  const navigate = useNavigate();

  return (
    <>
      <h2 className="font-black text-4xl text-blue-900">Editar Cliente</h2>
      <p className="mt-3">Edita los campos</p>

      <div className="flex justify-end my-4">
        <button
          className="bg-blue-800 hover:bg-blue-900 transition-colors text-white p-2 font-bold uppercase rounded"
          onClick={() => navigate('/')}
        >
          Volver
        </button>
      </div>
    </>
  )
}

export default EditClient;