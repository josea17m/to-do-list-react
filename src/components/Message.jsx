const Message = ({message, text, border}) => {

  return (
    <div className={`bg-white w-96 ${text} text-center p-4 border-4 ${border} rounded-lg absolute top-8 left-1/3 z-10`}>
     {message}
    </div>
  )
}

export default Message
