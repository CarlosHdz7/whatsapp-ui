import { ContactsType, contacts } from '../../data/contacts';
import Chat from './Chat/Chat';

const Chats = () => {
  return (
    <section className="flex gap-y-2 flex-col pl-3 pt-3 pr-3 overflow-y-scroll w-full">
      {contacts.map(
        ({ name, message, lastConexion, numberOfMessage }: ContactsType) => (
          <Chat
            name={name}
            message={message}
            lastConexion={lastConexion}
            numberOfMessage={numberOfMessage}
          />
        )
      )}
    </section>
  );
};

export default Chats;
