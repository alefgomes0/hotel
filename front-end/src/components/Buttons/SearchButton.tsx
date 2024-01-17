type SearchButtonProps = {
  isDisabled: boolean;
};

export const SearchButton = ({ isDisabled }: SearchButtonProps) => {
  return (
    <button
      type="submit"
      className="w-36 h-min py-2 text-gray-50 bg-gray-700 hover:bg-gray-600 rounded-sm disabled:text-white disabled:bg-gray-400 transition-colors"
      disabled={isDisabled}
    >
      CHECK RATES
    </button>
  );
};
