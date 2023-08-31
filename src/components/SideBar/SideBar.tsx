import Navbar from '../Navbar/Navbar';
import SearchInput from '../SearchInput/SearchInput';

const SideBar = () => {
  return (
    <div className="w-2/5  bg-gray-75 text-white">
      <Navbar />
      <SearchInput />
    </div>
  );
};

export default SideBar;
