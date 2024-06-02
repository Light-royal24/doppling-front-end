import React from "react";
import './chat.css'
import { Button, Image,Avatar,Link,Divider } from "@nextui-org/react"
import { Link as Lk,useNavigate } from "react-router-dom";
import {ArrowRightOutlined,AndroidFilled,AppleFilled, GithubFilled,FacebookFilled,LinkedinFilled } from '@ant-design/icons';
import Landing_P from '../img/landing_primary.png'
import D_Icon from '../img/icon.png'
import { Card,CardHeader,CardBody } from "@nextui-org/react";

const Landing = ()=>{
   const navigator = useNavigate()
    return (
      <>
        <div className=' overflow-x-hidden custom_bg bg-opacity-25 relative  flex flex-col   items-center'>
            <div style={{"userSelect":'none'}} className='w-full flex justify-between items-center pt-4 pb-4 box-border  p-6'>
                    <div className='flex gap-2 items-center'>
                        <img className="w-[60px]" src={D_Icon} alt="" />
                        <h1 className='font-bold text-white text-2xl'>OPPLING</h1>

                    </div>


                    <div className="flex items-center gap-2">
                        
                    <div className="flex items-center gap-5">
                        <Link  href="#" className="text-white flex items-center gap-2">About Us</Link>

                        <Link  href="#" className="text-white flex items-center gap-2">Contact</Link>
                        
                        </div>`
                        
                        <Button onClick={()=>navigator('/login')} variant="bordered" color="success"  size="sm">Login</Button>
                       
                        <Button color="success"  size="sm">register</Button>
                    </div>
                </div>
                
                <div className="w-full custom_bg_img relative flex flex-col gap-5  p-6 ">
                    
                    <div>
                        <p className="font-bold text-[4rem] text-white">Doppling</p>
                    </div>

                    <div className="w-2/5 text-white text-lg">
                       {/* <img className="w-full" src={Landing_P} alt="" /> */}
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repudiandae accusantium et accusamus at. Molestiae corporis explicabo odio sunt totam, fugit fuga magni commodi rem soluta itaque eligendi cupiditate dolores nihil, natus in rerum hic ullam ad? Minus, esse?</p>
                    </div>
                    <div className="absolute bottom-[8rem] left-[8rem]">
                    <Button color="secondary" className="flex items-center gap-2" radius="sm"  size="lg">
                        Get Started
                        <ArrowRightOutlined/>
                    </Button>
                    
                
                    </div>
                </div>
        </div>
       
       <div className="w-full ">
         <div className="p-6">

         </div>
       <div className="w-full custom_bg_img2  flex flex-col gap-5  p-6 pb-0 pt-[6rem] ">
                    
                    <div>
                        <p className="font-bold text-[3rem] leading-[3rem] w-2/5 text-gray-600">
                            Communicate With Love Ones
                        </p>
                    </div>

                    <div className="w-2/5 text-slate-700 text-lg">
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repudiandae accusantium et accusamus at. Molestiae corporis explicabo odio sunt totam, fugit fuga magni commodi rem soluta itaque eligendi cupiditate dolores nihil, natus in rerum hic ullam ad? Minus, esse?</p>

                    </div>
                    
        </div>

       </div>


        <div className="w-full custom_bg_img3  flex flex-col gap-5  p-6 pt-[2rem] ">
                    
                    <div>
                        <p className="font-bold text-[3rem] leading-[4rem] w-2/5 text-gray-600">
                            Communicate In Your Office
                        </p>
                    </div>

                    <div className="w-2/5 text-slate-500 text-lg">
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repudiandae accusantium et accusamus at. Molestiae corporis explicabo odio sunt totam, fugit fuga magni commodi rem soluta itaque eligendi cupiditate dolores nihil, natus in rerum hic ullam ad? Minus, esse?</p>

                    </div>
                    
        </div>
        
        <div className="flex flex-col gap-8 w-full p-8">
            <p className="font-bold text-[3rem] leading-[3rem] w-2/5 text-gray-600">
                Free Of Charge
            </p>
        <div className=" grid grid-cols-3 gap-[6rem]">
            <Card shadow="none" className="border">
                <CardHeader className="flex items-center justify-center">
                    <div className="p-6 bg-slate-900 pt-4 pb-4 rounded-lg">
                    <AndroidFilled className="text-white" size={30}/>
                    </div>
                </CardHeader>

                <CardBody className="flex flex-col gap-4">
                    <div className="w-full flex justify-center">
                    <p className="font-bold">The porte novo</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <p className="w-[80%] line-clamp-4 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur rem, temporibus excepturi deserunt quo adipisci totam!
                        </p>
                    </div>
                </CardBody>
            </Card>
            <Card shadow="none" className="border">
                <CardHeader className="flex items-center justify-center">
                    <div className="p-6 bg-slate-900 pt-4 pb-4 rounded-lg">
                    <AndroidFilled className="text-white" size={30}/>
                    </div>
                </CardHeader>

                <CardBody className="flex flex-col gap-4">
                    <div className="w-full flex justify-center">
                    <p className="font-bold">The porte novo</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <p className="w-[80%] line-clamp-4 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur rem, temporibus excepturi deserunt quo adipisci totam!
                        </p>
                    </div>
                </CardBody>
            </Card>
            <Card shadow="none" className="border">
                <CardHeader className="flex items-center justify-center">
                    <div className="p-6 bg-slate-900 pt-4 pb-4 rounded-lg">
                    <AndroidFilled className="text-white" size={30}/>
                    </div>
                </CardHeader>

                <CardBody className="flex flex-col gap-4">
                    <div className="w-full flex justify-center">
                    <p className="font-bold">The porte novo</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <p className="w-[80%] line-clamp-4 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur rem, temporibus excepturi deserunt quo adipisci totam!
                        </p>
                    </div>
                </CardBody>
            </Card>
        </div>

        </div>

        <footer className="w-full flex flex-col gap-2 p-2 bg-slate-800 text-white" >
            <div className="p-5 flex items-center justify-end gap-3">
            <Link href="#" className="text-slate-200">
                <GithubFilled/>
            </Link>
            <Link href="#" className="text-slate-200">
                <FacebookFilled/>
            </Link>
            <Link href="#" className="text-slate-200">
                <LinkedinFilled/>
            </Link>
            </div>
            <div className="flex items-center justify-between pl-[4rem] pr-[4rem]">
                <div className="flex flex-col gap-4">
                    <p className="font-bold text-lg">Pages</p>
                    <div className="flex flex-col gap-1 ">
                        <Link href="#" className="text-slate-200">Contact</Link>
                        <Link href="#" className="text-slate-200">About Us</Link> 
                        <Link href="#" className="text-slate-200">Privacy Policy</Link> 
                        <Link href="#" className="text-slate-200">Login</Link> 
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="font-bold text-lg">Useful Links</p>
                    <div className="flex flex-col gap-1 ">
                        <Link href="#" className="text-slate-200">Vector Ilustrations</Link>
                        <Link href="#" className="text-slate-200">Ui Components</Link> 
                        <Link href="#" className="text-slate-200">Frontend Library</Link> 
                        <Link href="#" className="text-slate-200">Hire Us</Link> 
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="font-bold text-lg">Downloads</p>
                    <div className="flex flex-col gap-2 ">
                        <Link href="#" className="text-slate-200 border rounded-lg">
                            <div className="flex items-center gap-2 p-4 pt-1 pb-1">
                                <AppleFilled/>
                                <p>IOS</p>
                            </div>
                        </Link>
                        <Link href="#" className="text-slate-200 border rounded-lg">
                            <div className="flex items-center gap-2 p-4 pt-1 pb-1">
                                <AndroidFilled/>
                                <p>Android</p>
                            </div>
                        </Link>
                        
                    </div>
                </div>

            </div>

            <div style={{"userSelect":'none'}} className=" p-2 pb-1 pt-4 w-full flex justify-end ">
                    <p className="flex gap-2 text-slate-100 text-sm items-center">
                       <i className="fa-regular fa-copyright fa-sm text-purple-400"/> <Link className="text-purple-400 hover:underline flex items-center gap-2">Doppling { <p className="font-bold text-purple-400">{new Date().getFullYear()}</p>}</Link>  all rights reserved
                    </p>
            </div>

        </footer>
      </>


    )
}

export default Landing;