import { useNavigate, Form, useLoaderData, redirect, useActionData } from "react-router-dom";
import { getClient, updateClient } from '../data/clients';
import ErrorMessage from "../components/ErrorMessage";
import FormInputs from "../components/FormInputs";
import { validateEmail } from "../helpers";

export const loader = async ({ params }) => {
  const client = await getClient(params.clientId);
  
  if (Object.values(client).length === 0) {
    throw new Response("El cliente no fue encontrado", { status: 404 });
  }
  return client;
}

export const action = async ({ request, params}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  
  // Validation
  const errors = {};
  
  const email = formData.get("email");
  const isValidEmail = validateEmail(email);
  
  if(Object.values(data).includes('')) {
    errors.empty = 'Todos los campos son obligatorios';
  }
  if(!isValidEmail) {
    errors.email = 'El email no es valido';
  }

  if(Object.keys(errors).length) return errors;

  await updateClient(params.clientId, data);

  return redirect('/');
}

const EditClient = () => {

  const client = useLoaderData();
  const navigate = useNavigate();
  const errors = useActionData();

  return (
    <>
      <h2 className="font-black text-4xl text-blue-900">Editar Cliente</h2>
      <p className="mt-3">Edita los campos necesarios, al termina pulsa en guardar cambios</p>

      <div className="flex justify-end my-4">
        <button
          className="bg-blue-800 hover:bg-blue-900 transition-colors text-white p-2 font-bold uppercase rounded"
          onClick={() => navigate('/')}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-5">

        {errors?.empty && <ErrorMessage message={ errors.empty } />}
        {errors?.email && <ErrorMessage message={ errors.email } />}

        <Form
          method="post"
          noValidate
        >
          <FormInputs
            client={ client }
          />
          <input 
            type="submit"
            className="mt-5 w-full bg-blue-800 hover:bg-blue-900 transition-colors p-3 uppercase font-bold text-white text-lg cursor-pointer rounded"
            value="Guardar cambios" 
          />
        </Form>
      </div>
    </>
  )
}

export default EditClient;