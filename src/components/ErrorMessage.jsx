const ErrorMessage = ({ message }) => {
  return (
    <div className="text-center my-4 p-2 bg-red-600">
      <p className=" text-white font-bold uppercase"> { message }</p>
    </div>
  )
}

export default ErrorMessage;