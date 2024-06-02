import React from 'react'
import '../pages/chat.css'
import MobileHeaderTop from '../assets/MobileHeaderTop'
import img from '../img/test.jpeg'
import { Divider, User, Avatar, Badge, Image, Link,Input } from '@nextui-org/react'
import coffee from '../img/coffee.jpeg'
import headset from '../img/headset.jpeg'
import gamepad from '../img/gamepad.jpeg'


const contacts = [
    { name: 'Emmy', picture: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Json', picture: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Jessica', picture: 'https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Benjamin', picture: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Amber', picture: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Alex', picture: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Alex', picture: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Alex', picture: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Alex', picture: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Alex', picture: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];

export const Chat_People = ()=>{

    return (
        <div className='w-3/4  h-full flex flex-col overflow-hidden'>
            <div className='w-full grow bg-white pt-1'>
              <div className='w-full h-full  border flex items-center p-1 pl-2'>
                <div>
                  <p className='font-semibold'>Messages</p>
                  <p className='text-xs text-gray-500'>People, Group Message</p>
                </div>
              </div>
            </div>
            <div className='w-full h-[88%] flex flex-col'>

              <div className='flex gap-4 p-2 border-b border-l hover:bg-gray-100 transition duration-75'>
               <Badge content='' color='success' placement='bottom-right'>
               <Avatar src={contacts[0].picture} />
               </Badge>
                <div className='grow pr-2'>
                  <div className='flex items-center justify-between'>
                    <p className='font-bold'>{contacts[0].name}</p>
                    <p className='p-0 text-xs'>12.48</p>
                  </div>

                  <div className='flex items-center justify-between'>
                    <p className='text-xs text-gray-500 truncate  '>where have you been bro?</p>
                    <Badge content='2' color='primary'/>
                  </div>
                </div>
              </div>

              <div className='p-2 flex items-center w-full border-l border-b'>
              <i className='fa fa-search fa-sm text-gray-500'/>
              <input type="search" placeholder='Search Peoples, Groups Messages' className='grow p-2 border-none outline-none text-xs'  />
              </div>

              <div className='w-full h-full border-l flex flex-col custom-scroll overflow-y-auto'>
                {
                  contacts.map(contact => {
                    return (
                      <div unselectable='on' className='flex gap-4 p-2 border-b cursor-pointer  hover:bg-gray-100 transition duration-75'>
                        <Avatar src={contact.picture} />
                        <div className='grow pr-2'>
                          <div className='flex items-center justify-between'>
                            <p className='font-bold'>{contact.name}</p>
                            <p className='text-xs p-0'>12.48</p>
                          </div>

                          <div className='flex items-center justify-between'>
                            <p className='text-xs text-gray-500 truncate  '>where have you been bro?</p>
                            <Badge className=''  content='2' color='primary' />
                          </div>
                        </div>


                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
    )
}

const Chat_Pane = ()=>{

    return (
      <>
      <div className='grow flex'>

      <div  className='w-1/5 portrait:hidden  h-full flex flex-col overflow-hidden'>
            <div style={{"userSelect":'none'}} className='w-full grow bg-white pt-1'>
              <div className='w-full h-full  border flex items-center p-1 pl-2'>
                <div>
                  <p className='font-semibold'>Messages</p>
                  <p className='text-xs text-gray-500'>People, Group Message</p>
                </div>
              </div>
            </div>
            <div className='w-full h-[88%] flex flex-col'>

              <div style={{"userSelect":'none'}} className='flex gap-4 p-2 border-b border-l hover:bg-gray-100 transition duration-75'>
               <Badge content='' color='success' placement='bottom-right'>
               <Avatar src={contacts[0].picture} />
               </Badge>
                <div className='grow pr-2'>
                  <div className='flex items-center justify-between'>
                    <p className='font-bold'>{contacts[0].name}</p>
                    <p className='p-0 text-xs'>12.48</p>
                  </div>

                  <div className='flex items-center justify-between'>
                    <p className='text-xs text-gray-500 truncate  '>where have you been bro?</p>
                    <Badge content='2' color='primary'/>
                  </div>
                </div>
              </div>

              <div className='p-2 flex items-center w-full border-l border-b'>
              <i className='fa fa-search fa-sm text-gray-500'/>
              <input type="search" placeholder='Search Peoples, Groups Messages' className='grow p-2 border-none outline-none text-xs'  />
              </div>

              <div style={{"userSelect":'none'}} className='w-full h-full border-l flex flex-col custom-scroll overflow-y-auto'>
                {
                  contacts.map(contact => {
                    return (
                      <div unselectable='on' className='flex gap-4 p-2 border-b cursor-pointer  hover:bg-gray-100 transition duration-75'>
                        <Avatar src={contact.picture} />
                        <div className='grow pr-2'>
                          <div className='flex items-center justify-between'>
                            <p className='font-bold'>{contact.name}</p>
                            <p className='text-xs p-0'>12.48</p>
                          </div>

                          <div className='flex items-center justify-between'>
                            <p className='text-xs text-gray-500 truncate  '>where have you been bro?</p>
                            <Badge className=''  content='2' color='secondary' />
                          </div>
                        </div>


                      </div>
                    )
                  })
                }
              </div>
            </div>
      </div>
      
      <div className='grow flex flex-col '>

          <div className=' grow border-b bg-white flex justify-between pl-[2rem] pr-[4rem] items-center'>

            <div style={{"userSelect":'none'}} className='flex gap-3 items-center'>
              <div>
                <Badge content='' color='success' placement='bottom-right'>
                  <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                </Badge>
              </div>
              <div className='flex flex-col justify-center'>
                <p className=' font-semibold'>Anna</p>
                <p className=' text-xs text-gray-500'>Web Developer</p>
              </div>
            </div>

            <div className='flex items-center portrait:gap-[2rem] portrait:justify-end gap-3'>
              <i className='fa fa-bell text-green-400 fa-xl'></i>
              <i className='fa fa-ellipsis-h text-green-400 fa-xl'></i>
            </div>
          </div>


          <div className='h-[88%]  flex overflow-hidden border-l'>
            <div className='grow flex flex-col'>
              <div className='bg-gray-50 grow'>

              </div>

              <div className='h-[12%] w-full flex items-center justify-between border-t'>

                <div className='flex items-center justify-center w-[10%]'>
                  <i className='fa fa-link text-gray-400'/>
                </div>

                <div className='grow'>
                  <input type="text" className='w-full p-2 border-none outline-none' placeholder='Type message here' />
                </div>

                <div className='flex items-center justify-evenly w-[15%]'>
                  <i className='fa fa-smile text-gray-400'/>
                  <i className='fa fa-microphone text-gray-400'/>
                </div>

              </div>
            </div>

            <div style={{"userSelect":'none'}} className='w-[30%] portrait:hidden  border-l  overflow-hidden'>
              <div className='h-full flex flex-col overflow-y-auto custom-scroll'>

              <div className='grow pr-3'>
                <div className='flex flex-col gap-1 border-b-2'>
                  <div className='p-3 flex justify-between items-center'>
                    <p className='font-semibold'>Shared Media</p>
                    <Link className='text-green-400'>view all</Link>
                  </div>
                  <div className='grid grid-cols-2 gap-4 p-3'>
                    <Image radius='sm' className='h-[5rem] w-full' removeWrapper src='data:image/jpeg;base64,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' />
                    <Image radius='sm' className='h-[5rem] w-full' removeWrapper src='data:image/jpeg;base64,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' />
                    <Image radius='sm' className='h-[5rem] w-full' removeWrapper src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExIWFRUXFxgXFxcYFxcYFxcVGBcWFxcVFxUYHSggGB0lHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS4tLS0tLS0tLS8tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAD0QAAEDAgQDBQYDBwQDAQAAAAEAAhEDIQQSMUEFUWEGInGBkRMyobHR8BRCwSMzUmKCkuFyssLxFUNTB//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACoRAAICAgICAAQGAwAAAAAAAAABAhEDIRIxQVEEImFxE5GhsdHwMlKB/9oADAMBAAIRAxEAPwD2Om8Gx1SvpxcKKpTm4B++SazEEWKDp4+iauQ9nUX81gcUrDIAPFaWMxgptL9YBtIEwCYkkDY6lefY7joquDabs97QC2xvcOPLQcgmkd/wPw7k78I2MM4uMN8zs0fXoumGJDWAMb7jYuRcc52OpVLgXDm5BcZYBc4fmMaj72Vmq4SGgQOXMKWx55xySpeCXgnEhUkbj6n1GnqtUvVHDYZtO7BEkk+dyrrajTqg8/LTlaWiUVmwTMAazsqPD+MMrOyta4WJBIAkCLxMjUarN7QYoso1fZjNZrY/mc4NA+Pkk4TwVtNsvc51R0S4c+k6AbBMuOGCxuUnvwdDiHANLiYABJPQXK47AYSpinmo4EMJmemzRztAXSYBwezvGWzF/wAw5kHbSyulzeY8voolHl2TjzPByUVt+fQ2AlhRuYTp+oTC1w1VnL9yXLKQ005jk6UAQOYq1eiI6q+QmOpoEZbDFjorbMU8cnD0Pqoq9OFXNQhInopcZqh9UwfyNjmPe/VcTx98VH7Zu+P6ruHk6R5LruLOhzan9LvmP1XJ9q6Nm1BsYPg7/P8AuUSMpj+y/FHMf7Oe7UGVw6jvNPwI/qXciiI0C8ko4ksIc3VpDh4gyPkvXGYljqTXCYqNBHQPEifVEGLG9URtotOhCU4X57JuF00uLFu/krVIjYqrNET8Pw9yTBFoEac1Yr0THd9Of0TcHUFwCrTky0tHF8VL6TzVpTm/9jLgkazA/TxvdWeGcQp4gS1xJESHe831+YWzxLANqC9iNHD3h5/ouE4lgH0quYO9lVF21Gjuv/1N+fyKzdxZi7i/odqwCJ2/zG6lc0NuYGlz4ws/gHEzVblqNDao1Au138zDy6G4+K2RtutFs0W0JTapUz2gG2n3onlwudgmWMKEGeQ+/JCBEr8SFA6sOQUBBGv35qu97tAI67D6lB3RxIpcdw4qNLGtYHuEB2QOy8ndTyXEYjso6liQXPEVM5BAMtiD5nvRfZek4PCXk3PMrE4sA6oLxGYZj+UHLJHXbzVJ+D0fhfiJQfCL15MnhvFamFc4ZWva73mzlBOzhrB5q9wrH1KtV73DuwC0BpDWwSCMx1Jkeilfwak4tBmHZrgnMCIE/HdXeF4Z+Ha+l7TO3NItoCNgdJ36qWVlniabivmZu0iC2eiHG178hCz2VSIG039LfFX2mUjy5Q4sz6uFfUBa98g6ADKB5DdWcOCRDyZj7hW2UpIU9SluDceh6Efr/wBIJll1RnNpEEwBtvB8zcDzhPxJqhv7NwDuTxY/1DTzCt1aDXwSIcPUdEU6JHhy+nJKiOa78nKP47jmuyOZTB5EEEjmDMEdQr/Cu0jiQzEU8hJgOAJaSdjEx96LZqYdjhBAIm4IkA9R+ouo28NokglgnUAkkehMFRxkn2dMs+CUaeOvt/f5LFtR59PonEKLG4MVLg5XjRw18DzHRQ4as4HK8X0/yDuFpZx8LVplgkjVRvqhWUkpmZQqUXu0keP0KrPwjxqAfD6LYTSEqFRg1aAcC0iQbELnOLcMfTa4EF1IggnkOvLxXevpg+PNQvZzE9R9Pok1ZLjZ4LimGm4tmRseY2K9e4CwHCYfcexpf7GqLjfZHDYlpgBj9nt2P8zND13UnZem+nRbh6wy1KQyi/dqMHuvYdxEAjUEX1CmMaZEYcWWXU5h7Df4EJRVk3GV336q1UIFt+Wp9Aq9WoZgNv128YVMslw7srs3kfqtMPWEAc1/EEc7hW6FdwtY/r5enqmNMu1SqVdjH+81rhyIB+amNadj6KGqwu/KfSEgYlLAUDJZTbIMWkQfEaapW0H0xFLvNH5HRMTJDX87n3p11Cga2oyc2YN1OUtBHW/6JuMexhbOcg6h1UhxBFsrGul3ognRdGOpBuZzw3Yh5DXBw2LTuoKnFLdxhLd3vPs2ztGYZneQUFCk4nMyiyiBfM4ZqmmoFo/qVDiPGaNAEtqGtWix94NvNybNta3oixOTSL4qYl17idgxkeWd2b1QvM8d/wDoWNdUcabw1k2Aa2I6SCUqjmjP8RfU9jxObRupVKboxuIqNqWAyAGXTeToMvhvzCoHHtDgDIG5gkrQ9jFjbjo1XVQxhcddvosHiDDTpB+U1KhJOQRdjrEkmwHitOt7Mta4PzgyRyERNudxYrOrZa1Sm18k5oBk72gx96ckWb4FW/z/AOeDP4DwMUnmoXEZxLg0nK2IuJBtc+i6ShQzXufHXpKr8Rx5o1KdEUwZsXSA2AC5ttZsZG4U9SXVIa4uLbOdMAHcADl9lDFkyTyPk/P7DcTQLRO3xCbwzibXnJFxZ38pOgPj/hOx1FxblaZcbCSYHM+QumcO4JSpEOY2TqZvmI35SDcckENxcPm78G0ydlK1x3Q1KQmcDdlbH4sUsrjoXZT5gmfKFbXPdqqv7tnUuPyHzK1ODvJosnUCPQkD5KFL5mjaeGsMZ+yXGvyNNQCcoJI5tFyPSYUOBoiS9jppvGYDk46kcp5c1axDMzXDmCPUQsHszVLYZsduR1+vwTb2ghG8cmvH7HQtKCEj9JStMqjnGFpTHKdR16eYRMfqgCg7EOJ7thz3PhyTXOO7z6lSVKLht6XURouOjT8viVJm7KlTFuGhcfvqpsH7d93Oys8BJ8CRp1V3D8OAu+55bD6q3UqBoumkNR9lR+Ea68unnJn1VWphS8QHS3m4A35tIg+folx1QvhgsHEAxyJ5q/UcGNM2DQT5AfQIGc7j8ScMWtluao7K1pJLiSYm4BgTqSVdpl0Q6kR4Oa7z1XC8PxD8TxOi5xk5sxGzAA5wYOgAHmSvTSxKLsiOzIqtM+6QOov8+cJWASDlMiwNtPVaj6chYePx4pSB3ngaA2HUn9E3ob0XXVTHuwOZdGl9lXOPqO/dtDjzE5f7jA9JUXDy+qzO+LmwjugDpuZm/orbmHYwef8A2l2HZC3D1XPAqPIBB/dgADSxqG9+g2UOL4rh8MP2TA6o6YF5MGC57zcCfXZX62IDGOe6zWgk+AXH081Z7qz7Zj6DZo8Ak9ESfHoTFV61f95UJHIWb/aNfOVh9o3ezpim336ndHRv53ekD+pdLA6AC5J0AFySegvK5SvWFWq6sdIimDswe6SNiXGT4xsoZhIwn4YC3JC7rhHYf8RRZWL8ueTHQEgHzAB80qXBgsUmjvMa3N3d/u6zMRQDSQRP6hb5WVjnZjEafeq1PbwZHdeDBxj2U3Dvd0300m3005jor2Aw+ZwqDQaGYB6g7jqFn8a4IXloBtckEnW2Xf8A1LTwJI7np9FVHdOV4/lf3L9TDU8we5jTH8JcD4kHU9dUYdhZ3RfedZB0KjbRzECY5qw/GZSA0Aw3SYMWv980jid/4rZM6nAk6qSibBJRrCq02g/LkQUymxzbEeCDF+U+y60JwCRg5pyZgznu0OEc6tTcGkgtiwJggzf+74LbwlHIwN5fM3KmQpUabZpPM5QjD0CoU+HBtX2gNrnL1PI8rq+hOiIycboE1jYTkJkghCEACEIQAKjWdJJ5WV5V/wAINyUCZWwtPM+dhfz2Ck41TLqFUNBLvZugDUnKbAdVbYwAQBCclQVo5Lsd2d/DZqtUftniI1yNJkidyd/D16UulTOYCoaoAt5nwQlQkqVIy+LYtwGRhhx35Dn9FiuwwFjyJP3z1Wy+lJLj4/QKpRbnqBvM/AXPwlSyGrNPBUMlNjSLhonx3+KmyBWW0efoldQb4KzSjm+1FQGlkBBJe0OE6AS4T5gLEYLABbfa2gGNY4Ad51zGpAtPPdZNAgDMdAJPgs5dnPP/ACM7j1aGeyH5oL/9OoZ52J6RzK55tJz3tpt95zg0eJIA+av4/FyS46kkrp+xPZtzHDE1mw6P2bDqJEZ3DYxoOqmrZkk5ypHW0QabWsZT7rAGt7w0AgfJKpaNN2UZiJ38fJC2O2iKnUcXEEWR+H7xPNV+EcWbXpGqAWgOeCDqMp38oPmmcKxjqntHu0kZRyF7eNlmpGin6DEYa5vfWNyOar4GgTU6NMk/EBXamLozke+nm/hJbIPgdFZa0AQAAOllXI3Wd8aDE08zSAYOx6rMfgAwNcB37ybmSTN+e4WnKWUWTCbj0NwNDKJ3MT4q2mUjZPTRjNtvYIQhMkEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAVN5mep+AVxUhYIEylj6kNhS8F4eWTUf7zhAH8LdY8Tb0Cs4bCXzu12H8P+VcSoSXkEhCVCZRncfwftaJaBLh3mjmRt5iR5rgcTnqxSpNLidY5SBc7CSNV6a94GpjQeZsAqLOE0Q5xyGXODyZ/MDIFttTHVS42ZThyMjgXZNtEsqVMr6guZEtba2TrP5j5QumAUTKrQ8szS73ss3A0sOSlATSouMUlSFQq76tOTJv4lCY7OU7J0z+GxLf5ifVjZ+S2KGHAYGmQDr3stoAAnXz6rE4PWDG5ZIJcXOjXYNaPIT5hbFCnUee7Tyg6udqfW5XNF6QovQ3D9msIDmFIHxe53qCYK2AwAAAQBYDpyTcPQDOpOpUy2So0iqISE2VMQmEIaLTFaeSlD1WBhStdKExNE6FCHQplVkNUCEITECEIQAIQhAAhCEACEIQAIQhAAhCEACr0wJjx+CsKM0u8HdCPWPogTJEIQgYIQkcUAI8gAk6C/om0KzXtDmmQRIKVjwQnNHJAETsM0vD4hwtIi45Hpun5Tmme7GkbzrP6JWPB0TCHBroOZ1y2bDoDGyBDalN5NnNA6tn4ylRhC8sHtAA/cDT7hCAOTdxL8NUfTpMYYJGggdXO1ced+ao4ntHVcbVDPSAPKNVgudUqnKxrjJiACS4/qux7N9mPZkVK0ZhdrNQ083cz0+xyR5S0iOTk9G/w8P8AZM9pd+UF06z92VlIAlXSbA5IRKRjwZ6GPRKUDI3JkwpHqNyllomUlI2UNPQJ4MKkS0TISApVRmCEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEAVXvFMFzp3JMbeAGygw3E6bph0TpII+K0VicR4E0yabvZk3j8pPhsgl2ujRw/vHqE9mKaXFu4E+POFn8Oo1abXB8GGnKQZExpzUODM12RsCT6O+oQLl0bBxLN3AdCYN+YNwhI/C03GSxpPMtBPqlQVs5ThHH8GxsMpvYY1c2T5lpJjoF0WD4jSq/u3h0ajQjxBuvLMDie7Ivz5jx+qvDEixBLXC4OkHoRosk6MY5muz01RYVjgO87MZ+C5vs/2nD3ClWIDzZrtA4/wnkfn8+mqMzAXIuDbpsq72dMZKS0SJjKgMwZgweh5LP43RrODfYkiCZAdlJ0i/qr1AENbnIzQATzdYFF7oqtWLUTGMB1Urwo9EMa6Jb2SkJrXJ2ZMkAYTw9NSIDslQoksp2TQ+USmJwCAoWUkpYSEIAUFKoiU9rpRYUOQhCYgQhCABCEIAEIQgAQhCABIQlQgCA0zJgztCr8OweQucfeJjwHL5FT4mjmu05XDQ/oVlcV4i5jC1wLXu7vSN3A9RZBLo0m8SpG4eN/gYQuKzgffO6ErI/EOHpVS0y0wfv1HRX2Y5pHfaQebbg+LTp5HyWz2i7FVaRc+h+0p3OWe+0a7++PC/Tdc4zAViYFKoSADAY42OhsNDzWVM53CUdMdiYOjp9R87r1HshxX8ThmOcZe3uVOeZu58RB8151gOy+MrGBScwbuqdwDrBufIL0ns7wWngqOQOknvVHm0mLn+UAJxRtgUk/oapmREReefSE5ZH/AJfOTk93nueo5BWGVlob80XSmEg2kTy3UAqKekw6mP19UmilIUBOBSOYNUjHSJE/JIocXXAAkHdPUNJ7pMgAbXvEb9VODKaEwhGVKklMQ4BCYhFioehMQiwoRyaSnFIQkWhzKoPQqRVnMSBzgi/YuPotIUTKw3spVVktUCEIQIEIQUACEyUz20mAgdEyFSxGIcLDXWeisUqwc2Z8ehQNwaVi1Aub7Xd4Uidi71srPF8RUZDWvIvPUi/dzbK27BtqMAqd6IJ8QgrJgagnfZjYLs8+oxry7LmExG23whCu1uK1MxykNGwgGyEjm+U21kYnhne7rzTIB9k5urCbln8zDrlNvCAtghV8cLDxn5pNGz6MXA8Urip7KqGZxsSWBw2c10EOnlZLxzBYvEEMaGMpC5Bfd52mBoOXn4aGIwrK7IdZw0MAx5HVp3B+hVbBPrMJYILm3NN5N2/x0apklv8AK6SCYkWJKIe1T6KuD4XVbbKDGsOB+cLSo4N+8Dzn4D6pg4sy4Y2KuaDTecrp3i8Oj+UkXWpBnW0aRefFCY1jSKlbCgMdq45TpY6bcvilwVMtYwAcswcbgRtAvfmrTieSq1quWo39m45hlLgBAvNzMgfVJ92arqi04hVPal+lm/E9VDjq2lL8xu7w2nxPyVmlDQqMpPwDcOBfUqRroSQSkcYSZcFonDkSoKZlSkHb7CYrBzgBJShBSwkUCEEqJ1bkEB2SpFXNV3RHt3bgJWVxZOiFCMSNwVI2s07osVMC1I1xb4KSEhCAsla6Uqq3bdWGukWVJkuNDkxzk32ijfWj6osFFlbifFKdFvfOWbfZUVLEtfJY6YE7/DmpquCbVIL7wQROk+CrMqFj8mUNgSIsDGw5WQdMFDjS7MPiHEqvtg0MOSO8+COVgDEk38FrNqZmtLXWvmAkXMQI30+JTMZRD2OqOIsbiNBsZP3qs+p3Xsew3GvUFwsRuIlLZ2JRnFJKmizjMTnLDvmDXdDK1a+J/wDW0336D6rBo4fPVBc4mDMgwTEFubmujZgqYEhgB5x3td3alUYZXFKNp/YpNwbRs3zmfmhavsRy+JQg5OUf9UWFBWap1E4gnVJmLKDmEGRqpXsFVoM5XNMtdu13PqCLEbiVNUaoqTLxsQgS9HMcb7VnDyzEYNzhecuV1J5H5pdcWgwRaR4rnx2+cf3FL2Q5Goajf7CIb4NhegcZwTKjQHiWGGu5tn3Hg7FpMeDjK4Hi/APw74q0mvYT3agGWehc24PQqHaM8nJFyh27xBF2Uj4B4/5Lb4b2qp1SGvc5jjsA0NJ5B0k/JcpS4Nh33aajD0II+IM+qkd2eEWxDT/qYW/IuS5MlTkeiDENb+V459x/qTF1DU4i1snJUPKKbr+ZAXN9meJ1aT24eofascYYRJLelxdvy8NOvd4Squzpg+SKrOIg6g0xzqNc34kZfirWUb3SVGBwLToQQR0NisvgWZk0nbC3Tw6Jj6Zs009RgolA2PJSSklISgKEcE0hOlIkMbCCE5KGoCyIhJkUpYmlKikyviOJMpfvDHLc/wBousXiVH8aQ6nVrNa20ZYYTzFwSfXyV2pwpoLqlRxduRpJ+7K9gXHIO6AdmiwY3Zv6+anb0zpTjjXKG3+hl8O4G+nf21c9C8Nb6d5a7Wubp/un/ipZMS4gD75qli8exgkifE/WU6SM3KeWXstOZmvYHxg/KE9tG2sqjgcRUf3vZNY3qTJHPLAWiSY2+/NUtmc04uiNg1BM/RVq8GJtEwd9xB+ipNr1fbuzNhkWI3IV0PeJJaC3YAXjeXaesKjRwcXZj8VzUmucO+wiHAaxvbdYPCOKtqtGU9L6iLaHddD2hxQNI/w8oIne8rD7PcCJpuqUxEGN790E93eJ6naE/B6mBxWFyyad/wBs0qAfTcXhmcAS4D0kELocHim1GhzTbUjyVTgzXMpvBHfLgAdZDoAcOYEk+RVfG4Q4euKrZ9k4AOA2MQZ6Gx8ZQto48rjlk4vtdP39P4N8Vm/YKFmMx7CPePp/hCDkeCXo2CVEGxsOp0lKhIwGvSNG6EIJXYr2BwLSLEEHwOqgwlRtVha4B0E03giQS0wbcjr5oQkU+zOf2XokkjMyTbI6PgZCjqdmaYBJfVdGxc0A+MNQhJxQuKvov8OwFOm0FlMNJFzqf7jdWS+4Eaz8EiEGiocQmZLzvEeSEIAe0pHAyL236pEIAV2aRe15EXna6QvKRCBoTMU7MUiEhiyntKEJiZIAlLUIVEDH0wdRKSm2CUqEh2UMfhK9R3dcxrdtSZ3tEfFMwPBGsOd7vaP2JENHg3n1QhLirs0WeajxWkaRCw+N4+vSq0mty+zqPawujvAlwBAvy3hIhKXRfw9OaTQ/tbiTSoF7TlcCMpHMmNNIgnVM4Vx2s6k11SiG6d4OEOHRoJLfNCEW+Z0Y4ReCNq7k/wBhOKYL8TBDg1jiA7XNm5NERcRckK5hs2H7pADDJgXAgS5zZMjmWnyJ0SIVPozcm2sT63+hbqtLXB4gtJvtraY8/u6vOaCIIkHUFCFRySekVP8AxdH/AOY+KEIQH4s/b/M//9k=' />
                    <Image radius='sm' className='h-[5rem] w-full' removeWrapper src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXCCSDjVJgnxNFUEYE-ePhsBVE_MN_sAvt-A&s' />
                  </div>
                </div>
              </div>

              <div className='grow '>
              <div className='flex flex-col gap-1 border-b'>
                  <div className='p-3 flex justify-between items-center'>
                    <p className='font-semibold'>Shared Files</p>
                    <Link className='text-green-400'>view all</Link>
                  </div>
                  <div className='flex flex-col gap-4 p-3'>

                    <div className='flex items-center justify-between gap-2'>
                      <div className='bg-green-200 p-4 pt-2 pb-2'>
                      <i className='fa fa-file text-green-500 rounded-sm'/>
                      </div>
                      <div className='grow'>
                        <p className='text-sm font-semibold truncate'>Text File</p>
                        <p className='text-xs'>29-05-2024</p>
                      </div>
                      <div className='flex items-start h-full'>
                      <p className='text-sm font-semibold'>5MB</p>
                      </div>
                    </div>

                    <div className='flex items-center justify-between gap-2'>
                      <div className='bg-green-200 p-4 pt-2 pb-2'>
                      <i className='fa fa-music text-green-500 rounded-sm'/>
                      </div>
                      <div className='grow'>
                        <p className='text-sm font-semibold truncate'>Pana Tekno</p>
                        <p className='text-xs'>29-05-2024</p>
                      </div>
                      <div className='flex items-start h-full'>
                      <p className='text-sm font-semibold'>5MB</p>
                      </div>
                    </div>

                    <div className='flex items-center justify-between gap-2'>
                      <div className='bg-green-200 p-4 pt-2 pb-2'>
                      <i className='fa-regular fa-file text-green-500 rounded-sm'/>
                      </div>
                      <div className='grow'>
                        <p className='text-sm font-semibold truncate'>Documents|Form File </p>
                        <p className='text-xs'>29-05-2024</p>
                      </div>
                      <div className='flex items-start h-full'>
                      <p className='text-sm font-semibold'>5MB</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              
              <div className='grow '>
              <div className='flex flex-col gap-1 border-b'>
                  <div className='p-3 flex justify-between items-center'>
                    <p className='font-semibold'>Shared Links</p>
                    <Link className='text-green-400'>view all</Link>
                  </div>
                  <div className='flex flex-col gap-4 p-3'>

                    <div className='flex items-center justify-between gap-2'>
                      <div className=''>
                      <Avatar radius='sm' src={coffee}/>
                      </div>
                      <div className='grow'>
                        <Link color='success' className='text-sm font-semibold truncate'>coffee website</Link>
                        <p className='text-xs'>all the coffee you need</p>
                      </div>
                    </div>

                    <div className='flex items-center justify-between gap-2'>
                      <div className=''>
                      <Avatar radius='sm' src={headset}/>
                      </div>
                      <div className='grow'>
                        <Link color='success' className='text-sm font-semibold truncate'>Headset Master</Link>
                        <p className='text-xs'>Buy an original headset now</p>
                      </div>
                    </div>

                    <div className='flex items-center justify-between gap-2'>
                      <div className=''>
                      <Avatar  radius='sm' src={gamepad}/>
                      </div>
                      <div className='grow'>
                        <Link color='success' className='text-sm font-semibold truncate'>Game Verse Community</Link>
                        <p className='text-xs'>your best gaming experience</p>
                      </div>
                    </div>

                    
                  </div>
                </div>
              </div>
              
              
              </div>

            </div>
          </div>
        </div>
      </div>
      </>
        
    )
}

export default Chat_Pane