import { useNavigate } from "react-router-dom";

const NewClient = () => {

  const navigate = useNavigate();

  return (
    <>
      <h2 className="font-black text-4xl text-blue-900">Nuevo Cliente</h2>
      <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

      <div className="flex justify-end my-4">
        <button
          className="bg-blue-800 hover:bg-blue-900 transition-colors text-white px-2 py-2 font-bold uppercase"
          onClick={() => navigate('/')}
        >
          Volver
        </button>
      </div>
    </>
  )
}

export default NewClient;