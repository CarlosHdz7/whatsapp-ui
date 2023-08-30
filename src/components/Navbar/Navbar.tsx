import {
  BsFillPeopleFill,
  BsFillChatLeftTextFill,
  BsThreeDotsVertical,
} from 'react-icons/bs';
import { FaHistory } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="h-14 w-full bg-gray-50 p-3 flex justify-between">
      <div className="flex justify-center items-center">
        <div className="rounded-3xl bg-gray-1 h-8 w-8" />
      </div>
      <div className="flex items-center gap-8">
        <BsFillPeopleFill size={20} />
        <FaHistory size={20} />
        <BsFillChatLeftTextFill size={20} />
        <BsThreeDotsVertical size={20} />
      </div>
    </nav>
  );
};

export default Navbar;
