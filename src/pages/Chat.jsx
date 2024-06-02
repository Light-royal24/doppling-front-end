import React,{useState} from 'react'
import './chat.css'
import MobileHeaderTop from '../assets/MobileHeaderTop'
import { Button,Link,Avatar } from '@nextui-org/react'
import Chat_Icon from '../img/chat.png'
import Chat_Pane, { Chat_People } from '../components/chat'
import Home from '../components/Home'


const Chat = () => {
 
  const [comp,Set_comp] = useState(<Chat_Pane/>)
  const chats = [
    { id: 1, name: 'Emily', message: 'Wanna lunch with me?', time: '9:41 AM', pinned: true, unread: 1, avatar: '🧑‍🦰' },
    { id: 2, name: 'Ana', message: 'Photo', time: '9:34 AM', pinned: false, unread: 1, avatar: '👩🏽' },
    { id: 3, name: 'Farhan', message: 'You: Okay', time: '7:00 AM', pinned: false, unread: 0, avatar: '🧔' },
    { id: 4, name: 'Amir', message: 'Photo', time: '5:00 AM', pinned: false, unread: 0, avatar: '👨🏿' },
    { id: 4, name: 'Amir', message: 'Photo', time: '5:00 AM', pinned: false, unread: 0, avatar: '👨🏿' },
    { id: 4, name: 'Amir', message: 'Photo', time: '5:00 AM', pinned: false, unread: 0, avatar: '👨🏿' },
    { id: 4, name: 'Amir', message: 'Photo', time: '5:00 AM', pinned: false, unread: 0, avatar: '👨🏿' },
    { id: 4, name: 'Amir', message: 'Photo', time: '5:00 AM', pinned: false, unread: 0, avatar: '👨🏿' },
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
    <>
      <div id='swup' className='flex transition-fade portrait:flex-col-reverse w-[100dvw] h-[100dvh] overflow-hidden'>

        {/* Section 1 starts */}
        <div className='w-[6%] portrait:w-full flex'>
          <div className='grow flex landscape:flex-col'>

            <div className='landscape:w-full landscape:h-[12%] landscape:border-b portrait:border-r portrait:w-1/6'>
              <Link href='/' className='flex w-full h-full items-center justify-center text-purple-400'>
                <Avatar className='bg-transparent'  src={Chat_Icon}/>
              </Link>
            </div>

            <div className='grow flex landscape:flex-col'>

              <div className='landscape:h-2/4 flex landscape:flex-col portrait:w-2/3 justify-between  items-center landscape:pt-4 text-gray-300'>
                <Button isIconOnly variant='none' onClick={()=>Set_comp(<Home/>)} className='hover:text-purple-400'>
                  <i className='fa fa-home'/>
                </Button>
                <i className='fa fa-bell  hover:text-purple-400'/>
                <i className='fa fa-user  hover:text-purple-400'/>
                <Button isIconOnly variant='none' onClick={()=>Set_comp(<Chat_Pane/>)} className='hover:text-purple-400'>
                <i className='fa fa-comment text-purple-400'/>
                </Button>
                
              </div>

              <div className='grow flex landscape:flex-col justify-end gap-[4rem] text-gray-300 landscape:pb-6 items-center portrait:gap-[2rem] portrait:pr-2'>
                <i className='fa fa-gear  hover:text-purple-400'/>
                <i className='fa fa-right-from-bracket  hover:text-purple-400'/>
              </div>
            </div>
          </div>
          
          </div>
        {/* Section 1 ends */}
        


        {/* Section 2  starts*/}
        {
          comp
        }
        {/* Section 2 ends */}
      </div>
    </>
  )
}

export default Chat
