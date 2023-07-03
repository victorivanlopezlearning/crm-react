
const Client = ({ client }) => {

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

      <td className="p-7 flex gap-4">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-sm"
        >
          Editar
        </button>

        <button
          type="button"
          className="text-red-600 hover:text-red-700 uppercase font-bold text-sm"
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default Client;