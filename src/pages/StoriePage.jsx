import React, { useState } from 'react';
import StatusViewer from '../components/StatusViewer';
import StatusList, { StatusListUser } from '../components/StatusList';
import MobileHeaderTop from '../assets/MobileHeaderTop';


const StoriePage = () => {
    const [selectedStatus, setSelectedStatus] = useState(null);

    const handleStatusClick = (status) => {
        setSelectedStatus(status);
    };

    const handleCloseViewer = () => {
        setSelectedStatus(null);
    };

    return (
        <div className="App">
            <MobileHeaderTop content={"new Story"}/>

            <div className='flex items-center justify-center w-full'>
                <div className='flex items-center justify-between w-[90%] mt-[1rem]'>
                    <h1 className='text-[1.3rem] font-[700]'>Stories</h1>
                    <div className='flex flex-col gap-1 items-center justify-center cursor-[pointer]'>
                        <div className='w-[5px] h-[5px] bg-black rounded-[50%]'></div>
                        <div className='w-[5px] h-[5px] bg-black rounded-[50%]'></div>
                        <div className='w-[5px] h-[5px] bg-black rounded-[50%]'></div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center w-full'>
                <div className='flex flex-col  w-[90%] mt-[1rem]'>
                    {/* my story */}
                    <StatusListUser onStatusClick={handleStatusClick}/>
                    {/* Recent */}
                    <p className='pt-3 pb-3 font-[600]'>Recent Updates</p>
                    <StatusList onStatusClick={handleStatusClick} />
                    {selectedStatus && (
                        <StatusViewer status={selectedStatus} onClose={handleCloseViewer} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default StoriePage;
