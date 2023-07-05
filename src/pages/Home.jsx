import { useLoaderData, useNavigate } from "react-router-dom";
import Client from "../components/Client";
import { getClients } from "../data/clients";

export const loader = () => { // Se ejecuta cuando el componente este listo
  const clients = getClients();
  return clients;
}


const Home = () => {
  const clients = useLoaderData();
  const navigate = useNavigate();
  
  return (
    <>
      <h2 className="font-black text-4xl text-blue-900">Clientes</h2>
      <p className="mt-3">Administra tus Clientes</p>

      <div className="flex justify-end my-4">
        <button
          className="bg-blue-800 hover:bg-blue-900 transition-colors text-white p-2 font-bold uppercase rounded"
          onClick={() => navigate('/client/new')}
        >
          Agregar Nuevo Cliente
        </button>
      </div>

      {(clients.length) ? (
        <div className="overflow-x-auto my-6">
          <table className="w-full bg-white shadow table-auto overflow-hidden rounded-xl">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-2 uppercase">Cliente</th>
                <th className="py-2 uppercase">Contacto</th>
                <th className="py-2 uppercase">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {clients.map((client) => (
                <Client 
                  client={ client }
                  key={ client.id }
                />
              ))}
            </tbody>
          </table>
        </div>
        ) : (
          <p className="text-center mt-10">No hay clientes aún</p>
        )
      }
    </>
  )
}

export default Home;