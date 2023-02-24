const Button = ({ word, buttonsFunction }) => {
  return (
    <button
      onClick={buttonsFunction}
      className="cursor-pointer w-full h-full hover:scale-110 ease-in duration-200"
    >{word}</button>
  );
};

export default Button;
