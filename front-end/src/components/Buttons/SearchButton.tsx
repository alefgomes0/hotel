type SearchButtonProps = {
  isDisabled: boolean
}

export const SearchButton = ({ isDisabled }: SearchButtonProps) => {
  return (
    <button type="submit" className="w-min h-min px-12 py-2 text-gray-100 bg-teal-800 hover:bg-teal-700 rounded-sm disabled:bg-gray-400 transition-colors" disabled={isDisabled}>
      SEARCH
    </button>
  )
}