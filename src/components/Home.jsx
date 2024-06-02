import React from 'react';
import { useNavigate } from 'react-router-dom';
import Chat_Pic from '../img/chat.png'
import Verify_Pic from '../img/verify.png'
import Faq from '../img/faq.png'
import Key from '../img/key.png'
import Support from '../img/support.png'

import { Image,Button, Progress } from '@nextui-org/react';
import { CircularProgress } from '@nextui-org/react';

const Home = ({ onLogout })=>{
    let navigate = useNavigate();

  return (
    <div  style={{"userSelect":'none'}} className='grow w-full border-l pl-4 pr-4 pb-4 pt-3 flex flex-col gap-[4rem] overflow-y-auto'>
      <div className='w-full flex justify-between'>
        <div className='flex flex-col gap-2'>
        <h1 className='font-bold text-purple-400 text-2xl'>Doppling</h1>
        <p className='text-sm line-clamp-2 w-[150px] '>your best web chatting experience</p>
        </div>

        <div>
          <i className='fa-regular fa-moon fa-2xl text-purple-400'/>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-4 justify-between w-full'>
        <h1 className='font-bold text-xl'>Actions</h1>
        <CircularProgress  color='secondary' size='lg' showValueLabel  minValue={0} maxValue={100} value={25}/>
        </div>

        <div className='grid grid-cols-3 gap-2 w-full '>

          <div className='flex items-center pr-1 gap-1 rounded-lg  bg-opacity-10 bg-purple-300'>
           <div className='w-2/4'>
           <Image removeWrapper src={Chat_Pic}/>
           </div>
            <div className='grow flex flex-col justify-center h-full'>
              <p className='font-semibold'>Start Messaging</p>
              <p className='text-sm'>start messaging your colleagues Now</p>
              <div className='w-full flex justify-end items-center italic text-purple-400 gap-2'>
                <p>Get Started</p>
                <i className='fa fa-arrow-right-long'/>
              </div>
            </div>
          </div>


          <div className='flex items-center pr-1 gap-1 p-0 rounded-lg bg-opacity-10 bg-purple-300'>
           <div className='w-2/4'>
           <Image removeWrapper src={Verify_Pic}/>
           </div>
            <div className='grow flex flex-col justify-center h-full'>
              <p className='font-semibold'>Verify Email</p>
              <p className='text-sm'>click the verify email button to verify your email</p>
          <Button radius='sm'  color='secondary' variant='flat' className='w-full flex justify-end items-center gap-2'>
                <p>Verify Email</p>
                {/* <i className='fa fa-arrow-right-long'/> */}
              </Button>
            </div>
          </div>

        </div>
      </div>

      
      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-4 justify-between w-full'>
        <h1 className='font-bold text-xl'>Help Center</h1>
        </div>

        <div className='grid grid-cols-4 gap-2 w-full '>

          <div className='flex items-center pr-2 pl-3 gap-3 rounded-lg bg-opacity-10 bg-purple-300'>
           <div className=''>
           <Image removeWrapper src={Support}/>
           </div>
            <div className='flex grow flex-col justify-center h-full'>
              <p className='font-semibold'>Customer Care</p>
              <p className='text-sm'>Get help</p>
              <div className='w-full flex justify-end items-center  text-purple-400 gap-2'>
                <p>Get Help</p>
              </div>
            </div>
          </div>


          <div className='flex items-center p-3 gap-3 rounded-lg bg-opacity-10 bg-purple-300'>
           <div className=''>
           <Image removeWrapper src={Key}/>
           </div>
            <div className='flex grow flex-col justify-center h-full'>
              <p className='font-semibold'>Privacy Policy</p>
              <p className='text-sm'>Read Our Privacy policy</p>
              <div className='w-full flex justify-end items-center  text-purple-400 gap-2'>
                <p>Privacy & Pocily</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default Home;
