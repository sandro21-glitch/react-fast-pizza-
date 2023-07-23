const SearchOrder = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search order #"
        className="bg-yellow-100 w-28 focus:w-[8rem] md:w-60 md:focus:w-[17rem] transition-all ease-in duration-200 outline-none px-3 py-2 rounded-3xl text-sm"
      />
    </form>
  );
};

export default SearchOrder;
