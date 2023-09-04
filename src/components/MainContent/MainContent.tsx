import { MessageType, messages } from '../../data/messages';
import InputMessageBar from './InputMessageBar/InputMessageBar';
import Message from './MessagesContainer/Message/Message';
import MessagesContainer from './MessagesContainer/MessagesContainer';
import SecondaryNavbar from './SecondaryNavbar/SecondaryNavbar';

const MainContent = () => {
  return (
    <div className="bg-gray-25 w-full h-full text-white bg-chats bg-repeat bg-[length:500px_1000px] relative">
      <SecondaryNavbar />
      <MessagesContainer>
        {messages.map(({ text, position }: MessageType) => (
          <Message text={text} position={position} />
        ))}
      </MessagesContainer>
      <InputMessageBar />
    </div>
  );
};

export default MainContent;
