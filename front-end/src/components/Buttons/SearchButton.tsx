type SearchButtonProps = {
  isDisabled: boolean;
};

export const SearchButton = ({ isDisabled }: SearchButtonProps) => {
  return (
    <button
      type="submit"
      className="w-[200px] text-lg h-full py-2 text-gray-50 bg-gray-950 hover:bg-gray-800 disabled:text-white disabled:bg-gray-400 transition-colors duration-200 rounded-sm "
      disabled={isDisabled}
      aria-label="check rates"
      title="Check Rates"
    >
      CHECK RATES
</button>
  );
};
