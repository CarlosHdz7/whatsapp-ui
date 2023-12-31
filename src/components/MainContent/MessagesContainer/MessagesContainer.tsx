type MessagesContainerProps = {
  children: React.ReactNode;
}

const MessagesContainer = ({ children }: MessagesContainerProps) => {
  return (
    <div className='px-10 pt-[70px] pb-[70px] w-full h-[calc(100%-56px)] overflow-y-scroll z-40' >
      {children}
    </div>
  )
}

export default MessagesContainer