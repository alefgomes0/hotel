export const LandingPageCTA = () => {
  return (
    <button
      type="button"
      className="w-full h-max py-3 mt-5 bg-gray-900 hover:bg-gray-800 transition-colors duration-200 text-gray-50 shadow-subtle"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      CHECK RATES
    </button>
  );
};
