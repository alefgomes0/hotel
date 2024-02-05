type SendForm = {
  text: string;
};

export const SendForm = ({ text }: SendForm) => {
  return (
    <button
      type="submit"
      className="w-[300px] py-2.5 rounded-sm bg-gray-900 hover:bg-gray-700 text-lg text-gray-50 transition-colors shadow-[0_2px_2px_0_rgba(0,0,0,0.2)]"
    >
      {text ? text : "PROCEED TO PAYMENT"}
    </button>
  );
};