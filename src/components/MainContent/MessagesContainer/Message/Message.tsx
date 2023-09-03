type MessageProps = {
  position?: 'left' | 'right',
  text?: string;
}

const Message = ({ position = 'left', text = "Lorem ipsum, dolor sit amet" }: MessageProps) => {

  const messageClassContainer = `relative w-full flex mb-2  ${position == 'left' ? 'justify-start' : 'justify-end'}`;
  const messageText = position === 'left' ? "bg-gray-50 text-white p-2 rounded max-w-[50%]" : "max-w-[50%] bg-secondary text-white p-2 rounded"

  const leftTriangle = "absolute w-0 h-0 border-8 border-solid border-transparent border-t-gray-50 top-0 left-[-6px]";
  const rightTriangle = "absolute w-0 h-0 border-8 border-solid border-transparent border-t-secondary top-0 right-[-6px]";
  const triangleClass = position === 'left' ? leftTriangle : rightTriangle;


  return (
    <div className={messageClassContainer}>
      <div className={triangleClass} />
      <p className={messageText}>{text}</p>
    </div>
  )
}

export default Message