import { useLoaderData } from "react-router-dom";
import Client from "../components/Client";

export const loader = () => { // Se ejecuta cuando el componente este listo
  const clients = [
    {
        id: 1,
        name: 'Víctor Iván',
        phone: 3143154786,
        email: "vlopez@vilgweb.com",
        company: 'VILGWeb'
    },
    {
        id: 2,
        name: 'Juan Escutia',
        phone: 3142154728,
        email: "jescutia@vilgweb.com",
        company: 'VILGWeb'
    },
    {
        id: 3,
        name: 'Roberto Martinez',
        phone: 3142154762,
        email: "rmartinez@vilgweb.com",
        company: 'VILGWeb'
    },
    {
        id: 4,
        name: 'Miguel Sandoval',
        phone: 3142145764,
        email: "msandoval@vilgweb.com",
        company: 'VILGWeb'
    },
    {
        id: 5,
        name: 'Pedro González',
        phone: 3142154291,
        email: "pgonzalez@vilgweb.com",
        company: 'VILGWeb'
    },
  ];
  
  return clients;
}


const Index = () => {
  const clients = useLoaderData();
  
  return (
    <>
      <h2 className="font-black text-4xl text-blue-900">Clientes</h2>
      <p className="mt-3">Administra tus Clientes</p>

      {(clients.length) ? (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow mt-5 table-auto overflow-hidden rounded-xl">
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

export default Index;