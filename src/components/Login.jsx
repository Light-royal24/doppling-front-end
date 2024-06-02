import React, { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Login_Photo from '../img/login-photo.png'
import { Input, ConfigProvider } from "antd";
import { Button, Image,Avatar,Link, RadioGroup, Radio } from "@nextui-org/react";
import { EyeInvisibleOutlined, EyeTwoTone, MailOutlined, KeyOutlined,UserOutlined ,SignatureOutlined,ArrowRightOutlined } from '@ant-design/icons';
import Google from "../img/google.png"


export const Login_Form = ({stage_modify})=>{

  return (
    <div className="grid grid-cols-2 gap-2 items-center w-3/5">
    <div style={{"userSelect":'none'}} className="">
        <img className="w-full" src={Login_Photo} alt="" />
    </div>

    <div className=" flex flex-col gap-5">
        <form action="" className="flex flex-col gap-3">
            <div>
                <Input required className=" "  addonBefore={<UserOutlined className="text-purple-400" />} placeholder="username, phone or email" />
            </div>

            <div>
                <Input.Password color="#9353D3" addonBefore={<KeyOutlined className="text-purple-400" />} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} radius="md" placeholder="Password" />
            </div>

            <div>
                <Button onClick={()=>stage_modify('otp')} className="" size="sm"  color="secondary" type="submit">Login</Button>
            </div>

        </form>

        <div>
            <Button elementType="a" href="https://google.com" target="_blank" color="secondary" radius="full" fullWidth variant="bordered" className="flex border justify-start p-1">
            <Avatar size="sm" className="bg-transparent" src={Google}/>
            <div className="flex grow justify-between items-center pr-3 pl-2">
            <p>Continue with Google</p>
            <ArrowRightOutlined/>
            </div>
            </Button>
        </div>
            

    </div>

</div>
  )
}

export const Get_OTP = ({stage_modify})=>{
  const [by,setBy] = useState('email')
  const [show,setShow] = useState(false)

  return (
    <div className='flex flex-col gap-4'>
      {/* <p className=''>How will you like to recieve and OTP</p> */}

      <div>
        <RadioGroup defaultValue={by} onValueChange={i=>setBy(i)} label="How will you like to recieve OTP"  color='secondary' >
          <Radio value={'email'} key={'email'}>
            By email
          </Radio>
          <Radio value={'phone'}  key={'phone'}>
            By Phone
          </Radio>
        </RadioGroup>
      </div>

     <div>
     {
        by === 'phone'?<div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-3'>
          <p className='text-xs text-gray-500'>Click send OTP if this you?</p>
        <div className='flex  items-center gap-3'>
        <Avatar size='sm' src='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600'/>
        <div className='flex items-center gap-3'>
        <div className='flex flex-col gap-1'>
        <p className='text-sm font-bold'>Solomon Williams</p>
        <p className=' text-xs font-bold'>+22070***33</p>
        </div>
        <Button size='sm' onClick={()=>setShow(!show)} color='secondary' variant='light'>Not Me</Button>
        </div>
        </div>
        </div>
        {
          show === true?<Input allowClear type='tel' placeholder='phone' required/>:''
        }
        <Button className='mt-[2rem]' color='secondary' size='sm'>Send OTP</Button>
      </div>:<div className='flex-col flex  gap-4 mt-4'>
        <div className='flex flex-col gap-1'>
          <p className='text-xs text-gray-500'>Click send OTP if this you?</p>
        <div className='flex  items-center gap-2'>
        <Avatar size='sm' src='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600'/>
        <div className='flex items-center'>
        <div className='flex flex-col gap-1'>
        <p className='text-sm font-bold'>Solomon Williams</p>
        <p className='w-2/3 truncate text-xs'>willamssolomon672@gmail.com</p>
        </div>
        <Button size='sm' onClick={()=>setShow(!show)} color='secondary' variant='light'>Not Me</Button>
        </div>
        </div>
        </div>
        
        {
          show === true?<div>
            <Input type='email' placeholder='Enter your email'/>
          </div>:''
        }
        <div className='mt-[2rem]'>
          <Button onClick={()=>stage_modify('v_otp')} size='sm' color='secondary'>send OTP</Button>
        </div>
       
        
      </div>
      }
     </div>

    </div>
  )
}

export const Verify_OTP = ()=>{
  
  const navigator = useNavigate()
  const [status,setStatus] = useState('')
  const [disabled,setDisabled] = useState(false)
  return (
    <div style={{"userSelect":'none'}} className='flex flex-col pt-[4em]  gap-3'>
      <div className='flex justify-end text-yellow-400'>
        <i className='fa fa-bell fa-shake fa-xl'/>
      </div>
      <p className='text-gray-400 text-sm'>Enter code</p>
      <Input.OTP  disabled={disabled} onChange={code=>{
        if (!code.includes(' ')){
          setDisabled(true)
          setTimeout(()=>navigator('/chat'),7000)
        }else{
          setStatus('error')
          setTimeout(()=>setStatus(''),5000)
        }
      }} status={status}  length={4}  aria-colcount={4}/>
      <div className='p-2 flex items-center pl-0 gap-5'>
        <p className='text-sm text-gray-400 '>didn't get a code?</p>
        <Button size='sm' variant='light' color='secondary'>resend</Button>
      </div>
    </div>
  )
}