export default function SearchBar() {
  return (
    <div className="my-6 flex justify-center">
      <input
        type="text"
        placeholder="Search batch..."
        className="w-2/3 sm:w-1/2 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
}
