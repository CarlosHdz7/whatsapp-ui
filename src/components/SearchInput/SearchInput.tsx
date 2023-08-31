import { BsSearch, BsFilter } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <section className="h-10 p-1 w-full flex mt-1 pl-3">
      <div className="flex items-center gap-5 p-1 pl-5 rounded w-[90%] bg-gray-50">
        <BsSearch />
        <input
          type="text"
          className="w-full font-sans font-semibold outline-none text-xs box-border bg-transparent"
          placeholder="Buscar un chat o inicia uno nuevo."
        />
      </div>
      <div className="flex items-center justify-center w-[10%] h-full text-gray-1">
        <BsFilter />
      </div>
    </section>
  );
};

export default SearchInput;
