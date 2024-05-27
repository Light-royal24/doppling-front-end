import React from 'react'
import MobileHeaderTop from '../assets/MobileHeaderTop'
import img from '../img/test.jpeg'

const Chat = () => {
    const contacts = [
    { id: 1, name: 'Emily', message: 'Wanna lunch with me?', time: '9:41 AM', unread: 1, avatar: '🧑‍🦰' },
    { id: 2, name: 'Ana', message: 'Photo', time: '9:34 AM', unread: 1, avatar: '👩🏽' },
    { id: 3, name: 'Farhan', message: 'You: Okay', time: '7:00 AM', unread: 0, avatar: '🧔' },
    { id: 4, name: 'Amir', message: 'Photo', time: '5:00 AM', unread: 0, avatar: '👨🏿' },
    ];
    
    const chats = [
        { id: 1, name: 'Emily', message: 'Wanna lunch with me?', time: '9:41 AM', pinned: true, unread: 1, avatar: '🧑‍🦰' },
        { id: 2, name: 'Ana', message: 'Photo', time: '9:34 AM', pinned: false, unread: 1, avatar: '👩🏽' },
        { id: 3, name: 'Farhan', message: 'You: Okay', time: '7:00 AM', pinned: false, unread: 0, avatar: '🧔' },
        { id: 4, name: 'Amir', message: 'Photo', time: '5:00 AM', pinned: false, unread: 0, avatar: '👨🏿' },
      ];

    const currentChat = {
    name: 'Emily',
    messages: [
    { from: 'Emily', content: 'Hey, how are you?', time: '9:30 AM' },
    { from: 'You', content: 'I am good, how about you?', time: '9:32 AM' },
    { from: 'Emily', content: 'Wanna lunch with me?', time: '9:34 AM' },
    ],
    };
  return (
    <div className='bg-gray-300 fixed w-full'>
      <MobileHeaderTop />

    <div className="h-screen hidden lg:flex">
      <aside className="w-1/4 bg-gray-100 p-4 border-r">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center p-2 mb-2 rounded-md cursor-pointer ${contact.unread ? 'bg-blue-100' : ''}`}
            >
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg">
                <span role="img" aria-label="avatar">{contact.avatar}</span>
              </div>
              <div className="ml-3 flex-1">
                <div className="flex justify-between">
                  <div className="font-bold">{contact.name}</div>
                  <div className="text-sm text-gray-500">{contact.time}</div>
                </div>
                <div className="text-sm text-gray-500">{contact.message}</div>
              </div>
              {contact.unread > 0 && (
                <div className="ml-2 text-xs text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                  {contact.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>
      <main className="w-3/4 flex flex-col">
        <div className="p-4 border-b flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg">
            <span role="img" aria-label="avatar">🧑‍🦰</span>
          </div>
          <div className="ml-3">
            <div className="font-bold text-lg">{currentChat.name}</div>
            <div className="text-sm text-gray-500">Online</div>
          </div>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {currentChat.messages.map((msg, index) => (
            <div key={index} className={`mb-4 ${msg.from === 'You' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-2 rounded-md ${msg.from === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                {msg.content}
              </div>
              <div className="text-xs text-gray-500">{msg.time}</div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <input
            type="text"
            placeholder="Type a message"
            className="w-full p-2 border rounded-md"
          />
        </div>
      </main>
    </div>

      <div className='flex items-center justify-center w-full lg:hidden'>
        <div className='pt-[1rem] w-full flex items-center justify-center flex-col'>
            <div className='w-[95%] w-full h-[10vh] flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='w-[60px] h-[60px] rounded-[50%]'>
                        <img src={img} alt="" className='w-[inherit] h-[inherit] rounded-[inherit]'/>
                    </div>
                    <div className='flex flex-col gap-[-10px]'>
                        <div className="font-bold text-lg">John Doe</div>
                        <div className="text-sm text-gray-500">At work</div>
                    </div>
                </div>
                <div className='flex top-[-10px] gap-7'>
                    <span>😄</span>
                    <div className='flex flex-col gap-1 items-center justify-center cursor-[pointer]'>
                        <div className='w-[5px] h-[5px] bg-black rounded-[50%]'></div>
                        <div className='w-[5px] h-[5px] bg-black rounded-[50%]'></div>
                        <div className='w-[5px] h-[5px] bg-black rounded-[50%]'></div>
                    </div>
                </div>
            </div>
            <div className='pt-[1.3rem] w-[95%] h-[7vh] flex gap-1 items-center'>
                <h2 className='font-[700] text-[1.4rem]'>Chat</h2>
                <p className='bg-white w-[1.5rem] h-[1.5rem] text-[green] font-[800] rounded-[50%] flex items-center justify-center text-[80%]'>90</p>
            </div>
            <div className='w-full mt-[10px] h-[7.9vh] bg-gray-200 flex items-center justify-center'>
                <div className='w-[95%] flex items-center justify-between pt-[9px] pb-[9px] text-[1.3rem]'>
                    <li className='list-[none] font-[800]'>All</li>
                    <li className='list-[none] font-[600]'>Pinned</li>
                    <li className='list-[none] font-[600]'>Locked</li>
                    <li className='list-[none] font-[600]'>Archive</li>
                </div>
            </div>
            <div className='w-full bg-gray-200 flex items-center justify-center'>
                <div className='w-full flex-col bg-white h-[70vh] rounded-t-[25px] flex items-center pt-[15px]'>
                    {chats.map((chat) => (
                        <div
                        key={chat.id}
                        className={`flex w-[95%] items-center p-2 mb-2 rounded-md ${chat.unread ? 'bg-blue-100' : ''} ${chat.pinned ? 'border-l-4 border-blue-500' : ''}`}
                        >
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg">
                            <span role="img" aria-label="avatar">{chat.avatar}</span>
                        </div>
                        <div className="ml-3 flex-1">
                            <div className="flex justify-between">
                            <div className="font-bold">{chat.name}</div>
                            <div className="text-sm text-gray-500">{chat.time}</div>
                            </div>
                            <div className="text-sm text-gray-500">{chat.message}</div>
                        </div>
                        {chat.unread > 0 && (
                            <div className="ml-2 text-xs text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                            {chat.unread}
                            </div>
                        )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Chat
