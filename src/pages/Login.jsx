import React, { useState } from "react";
import Login_Photo from '../img/login-photo.png'
import { Input, ConfigProvider } from "antd";
import { Button, Image,Avatar,Link } from "@nextui-org/react";
import { EyeInvisibleOutlined, EyeTwoTone, MailOutlined, KeyOutlined,SignatureOutlined,ArrowRightOutlined } from '@ant-design/icons';
import Google from "../img/google.png"
import { Login_Form, Get_OTP,Verify_OTP } from "../components/Login";

const Login = () => {

    const [stage, setStage] = useState('login')

    const Auth_Stages = {
        login:<Login_Form stage_modify={setStage}/>,
        otp:<Get_OTP stage_modify={setStage}/>,
        v_otp:<Verify_OTP stage_modify={setStage}/>
    }

    

    return (
        <ConfigProvider

            theme={{
                components: {
                    Input: {
                        activeBorderColor: '#9353D3',
                        controlOutlineWidth: '2px',
                        addonBg: '#fff',
                        colorIcon: '#9353D3',
                        hoverBorderColor: '#9353D3',
                        
                    },
                    
                    

                }
            }}
        >
            <div className='w-[100dvw] relative h-[100dvh] flex flex-col   items-center'>

                <div style={{"userSelect":'none'}} className='w-full flex justify-between p-10'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-purple-400 text-2xl'>Doppling</h1>
                        <p className='text-sm line-clamp-2 w-[150px] '>your best web chatting experience</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <SignatureOutlined classID="text-purple-400" className="text-purple-400"/>
                        <Button  className="" color="secondary" size="sm">register</Button>
                    </div>
                </div>

                {
                    Auth_Stages[stage]                
                }

                <div style={{"userSelect":'none'}} className="absolute bottom-3 right-3 w-full flex justify-end ">
                    <p className="flex gap-2 text-gray-500 text-sm items-center">
                       <i className="fa-regular fa-copyright fa-sm text-purple-400"/> <Link className="text-purple-400 hover:underline flex items-center gap-2">Doppling { <p className="font-bold text-purple-400">{new Date().getFullYear()}</p>}</Link>  all rights reserved
                    </p>
                </div>
            </div>
        </ConfigProvider>
    )
}

export default Login