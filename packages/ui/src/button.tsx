type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
