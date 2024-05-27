import React from 'react'

const MobileHeaderTop = () => {
  return (
    <div className='flex items-center justify-center w-full md:hidden bg-gray-500 z-[999]'>
        <header className='flex items-center justify-center flex-col w-[90%] fixed bottom-[2%] gap-1'>
        <div className='w-full flex items-center justify-end'>
            <div className='text-gray font-[san-serif] rounded-[25px]  bg-[royalblue] text-[white] p-[15px] text-[1.2rem] font-[600] flex items-center justify-center'>the New Chat</div>
        </div>
            <div className="bg-gray-200 w-full rounded-[10px] rounded-[30px] p-[0.5rem]">
                <div className="flex items-center justify-between w-full">
                    <div className='flex items-center cursor-[pointer] border border-gray-300 justify-center flex-col w-[22%] pt-[5px] pb-[5px] text-[1.2rem] text-black font-[500] bg-[royalblue] rounded-[15px] text-white'>
                        <p>d</p>
                        <p className='text-[0.9rem]'>Chat</p>
                    </div>
                    <div className='flex items-center cursor-[pointer] border border-gray-300 justify-center flex-col w-[22%] pt-[8px] pb-[8px] text-[1.2rem] text-black font-[500] rounded-[15px]'>
                        <p>d</p>
                        <p className='text-[0.9rem]'>Groups</p>
                    </div>
                    <div className='flex items-center cursor-[pointer] border border-gray-300 justify-center flex-col w-[22%] pt-[8px] pb-[8px] text-[1.2rem] text-black font-[500] rounded-[15px]'>
                        <p>d</p>
                        <p className='text-[0.9rem]'>Stories</p>
                    </div>
                    <div className='flex items-center cursor-[pointer] border border-gray-300 justify-center flex-col w-[22%] pt-[8px] pb-[8px] text-[1.2rem] text-black font-[500] rounded-[15px]'>
                        <p>d</p>
                        <p className='text-[0.9rem]'>Settings</p>
                    </div>
                </div>
            </div>
        </header>
      
    </div>
  )
}

export default MobileHeaderTop
