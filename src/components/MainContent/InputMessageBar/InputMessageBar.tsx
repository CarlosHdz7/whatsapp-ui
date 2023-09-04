import { BsEmojiLaughingFill, BsPlusLg, BsFillMicFill } from 'react-icons/bs';

const InputMessageBar = () => {
  return (
    <div className="absolute bottom-0 w-full h-14 bg-gray-50 p-2 flex">
      <div className='w-[80px] gap-2 flex items-center justify-center text-gray-1 cursor-pointer'>
        <div><BsEmojiLaughingFill size={22} /></div>
        <div><BsPlusLg size={22} /></div>
      </div>
      <div className='w-[100%] flex items-center bg-gray-0 rounded'>
        <input type="text" className='w-full bg-transparent outline-none p-2' placeholder='Escribe un mensaje' />
      </div>
      <div className='w-[60px] flex items-center justify-center text-gray-1 cursor-pointer'><BsFillMicFill size={22} /></div>
    </div>
  )
}

export default InputMessageBar