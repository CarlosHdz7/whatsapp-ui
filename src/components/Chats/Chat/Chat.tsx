import { ContactsType } from '../../../data/contacts';
import { BsFillPersonFill } from 'react-icons/bs'

const Chat = (props: Partial<ContactsType>) => {

  const {
    name,
    message,
    lastConexion,
    numberOfMessage,
    isActive = false,
  } = props;

  const isPending = numberOfMessage && numberOfMessage > 0;

  const containerClass = isActive
    ? 'flex w-full cursor-pointer bg-gray-0'
    : 'flex w-full cursor-pointer';

  const lastConexionClass = isPending
    ? 'text-[10px] text-primary'
    : 'text-[10px] text-gray-1';

  const messageClass = isPending
    ? 'text-ellipsis whitespace-nowrap overflow-hidden text-gray-1 font-bold text-[10px] ...'
    : 'text-ellipsis whitespace-nowrap overflow-hidden text-gray-1 text-[10px] ...';

  const nameClass = isPending ? 'font-bold text-[10px]' : 'text-[10px]';

  return (
    <div className={containerClass}>
      <div className="flex items-center justify-center p-2 w-16 ">
        <div className="rounded-3xl bg-gray-1 h-10 w-10 flex justify-center items-center">
          <BsFillPersonFill size={25} />
        </div>
      </div>
      <div className="flex flex-col justify-center w-[200px] border-b-[1px] border-gray-25">
        <span className={nameClass}>{name}</span>
        <span className={messageClass}>{message}</span>
      </div>
      <div className="flex flex-col justify-start items-end w-16 gap-y-1 border-b-[1px] border-gray-25 p-2">
        <span className={lastConexionClass}>{lastConexion}</span>
        {isPending ? (
          <div className="text-[10px] text-gray-100 rounded-3xl w-4 h-4 flex items-center justify-center bg-primary">
            {numberOfMessage}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Chat;
