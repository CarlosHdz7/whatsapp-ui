import Message from './MessagesContainer/Message/Message';
import MessagesContainer from './MessagesContainer/MessagesContainer';
import SecondaryNavbar from './SecondaryNavbar/SecondaryNavbar';

const MainContent = () => {
  return (
    <div className="bg-gray-25 w-full h-full text-white bg-chats bg-repeat bg-[length:500px_1000px]">
      <SecondaryNavbar />
      <MessagesContainer>
        <Message />
        <Message position='right' text="Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet" />
        <Message />
        <Message />
        <Message position='right' text="Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet" />
        <Message />
        <Message position='right' />
        <Message text="Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet" />
        <Message />
        <Message position='right' />
        <Message />
        <Message position='right' />
        <Message />
        <Message />
        <Message position='right' />
        <Message />
        <Message position='right' />
        <Message />
        <Message />
        <Message position='right' />
        <Message />
        <Message position='right' />
        <Message />
        <Message />
        <Message position='right' />
        <Message />
        <Message position='right' />
        <Message />
        <Message />
        <Message position='right' />
        <Message />
        <Message position='right' />
        <Message />
        <Message />
        <Message position='right' />
        <Message />
        <Message position='right' />
        <Message />
        <Message />
        <Message position='right' />
        <Message />
        <Message position='right' />
        <Message />
        <Message />
        <Message position='right' />
      </MessagesContainer>
    </div>
  );
};

export default MainContent;
