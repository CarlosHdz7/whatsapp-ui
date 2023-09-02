import {
  BsFillCameraVideoFill,
  BsSearch,
  BsThreeDotsVertical,
} from 'react-icons/bs';

const SecondaryNavbar = () => {
  return (
    <div className="fixed w-full h-14 bg-gray-50 p-2 flex justify-between items-center shadow-md z-50">
      <div className="flex h-auto">
        <div className="flex items-center justify-center w-16 ">
          <div className="rounded-3xl bg-gray-1 h-9 w-9" />
        </div>
        <div className="text-[10px] flex flex-col justify-center">
          <span>Ada</span>
          <p className="text-gray-1">
            haz clic aquí para información de contacto
          </p>
        </div>
      </div>
      <div className="flex gap-x-4 pr-4 items-center text-gray-1">
        <span>
          <BsFillCameraVideoFill />
        </span>
        <span>
          <BsSearch size={14} />
        </span>
        <span>
          <BsThreeDotsVertical />
        </span>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
