import { ContactsType, contacts } from '../../data/contacts';
import Chat from './Chat/Chat';

const Chats = () => {
  return (
    <section className="flex  flex-col pt-3 overflow-y-scroll w-full">
      {contacts.map(
        ({
          name,
          message,
          lastConexion,
          numberOfMessage,
          isActive,
        }: ContactsType) => (
          <Chat
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
