const Chat = () => {
  return (
    <div className="flex w-full items-center gap-x-2">
      <div className="flex items-center justify-center p-2">
        <div className="rounded-3xl bg-gray-1 h-10 w-10" />
      </div>
      <div className="text-sm w-full">
        <h4>Name</h4>
        <p>This is the chat</p>
      </div>
    </div>
  );
};

export default Chat;
