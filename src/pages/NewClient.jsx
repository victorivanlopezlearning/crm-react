import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import FormInputs from "../components/FormInputs";
import ErrorMessage from "../components/ErrorMessage";
import { validateEmail } from '../helpers';
import { createClient } from '../data/clients'

export const action = async ({ request }) => {
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

  await createClient(data);

  return redirect('/');
}

const NewClient = () => {

  const navigate = useNavigate();
  const errors = useActionData();


  return (
    <>
      <h2 className="font-black text-4xl text-blue-900">Nuevo Cliente</h2>
      <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

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
          <FormInputs />
          <input 
            type="submit"
            className="mt-5 w-full bg-blue-800 hover:bg-blue-900 transition-colors p-3 uppercase font-bold text-white text-lg cursor-pointer rounded"
            value="Registrar cliente" 
          />
        </Form>
      </div>
    </>
  )
}

export default NewClient;