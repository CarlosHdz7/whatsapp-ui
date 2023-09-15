import { ContactsType, contacts } from '../../data/contacts';
import Chat from './Chat/Chat';

const Chats = () => {
  return (
    <section className="flex  flex-col pt-3 overflow-y-scroll w-full">
      {contacts.map(
        ({
          _id,
          name,
          message,
          lastConexion,
          numberOfMessage,
          isActive,
        }: ContactsType) => (
          <Chat
            key={_id}
            name={name}
            message={message}
            lastConexion={lastConexion}
            numberOfMessage={numberOfMessage}
            isActive={isActive}
          />
        )
      )}
    </section>
  );
};

export default Chats;
