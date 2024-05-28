import React from 'react';

const StatusItem = ({ status, onclick }) => {

    return (
        <div className="flex items-center mb-4 cursor-pointer" onClick={onclick}>
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500">
                <img src={status.image} alt={status.name} className="w-full h-full object-cover" />
            </div>
            <div className="ml-4">
                <div className="font-semibold">{status.name}</div>
                <div className="text-sm text-gray-500">{status.time}</div>
            </div>
        </div>
    );
};

export default StatusItem;
