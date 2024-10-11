import React, { useState } from 'react'
import {BsSend} from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage'


const MessageInput = () => {
  const {loading,sendMessage}=useSendMessage();
  const [message,setMessage]=useState("");

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <form onSubmit={handleSubmit} className='px-4 my-3'>
        <div className="w-full relative">
            <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-purple-950 border-gray-800 text-gray-200' placeholder='Send a message...' value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                {loading? <div className="loading loading-spinner"></div> : <BsSend/>}
            </button>
        </div>
    </form>
  )
}

export default MessageInput

// started code for messageInput 
// import React from 'react'
// import {BsSend} from 'react-icons/bs'
// const MessageInput = () => {
//   return (
//     <form action="" className='px-4 my-3'>
//         <div className="w-full">
//             <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-700 text-white' placeholder='Send a message...'/>
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
//                 <BsSend/>
//             </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput