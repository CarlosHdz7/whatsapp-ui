type MessageProps = {
  position?: 'left' | 'right',
  text?: string;
}

const Message = ({ position = 'left', text = "Lorem ipsum, dolor sit amet" }: MessageProps) => {

  const messageClass = `w-full flex mb-2  ${position == 'left' ? 'justify-start' : 'justify-end'}`;

  return (
    <div className={messageClass}>
      <p className="bg-secondary text-white p-2 rounded">{text}</p>
    </div>
  )
}

export default Message