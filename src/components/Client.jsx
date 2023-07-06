import { Form, useNavigate, redirect } from "react-router-dom";
import { deleteClient } from '../data/clients';

export const action = async ({ params }) => {
  await deleteClient(params.clientId);

  return redirect('/');
}

const Client = ({ client }) => {

  const navigate = useNavigate();

  const { name, phone, email, company, id } = client;

  return (
    <tr className="border-b">
      <td className="p-7 space-y-2">
        <p className="text-xl md:text-2xl text-gray-800 font-bold">{name}</p>
        <p>{company}</p>
      </td>

      <td className="p-7 space-y-2">
        <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
        <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Teléfono: </span>{phone}</p>
      </td>

      <td className="p-7 space-y-2">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-sm"
          onClick={ () => navigate(`/clients/${id}/edit`) }
        >
          Editar
        </button>

        <Form
          method="post"
          action={`/clients/${id}/delete`}
          onSubmit={(e) => {
            if (!confirm("¿Desea eliminar el cliente?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="text-red-600 hover:text-red-700 uppercase font-bold text-sm"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  )
}

export default Client;