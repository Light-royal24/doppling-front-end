// src/components/StatusViewer.js
import React from 'react';

const StatusViewer = ({ status, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg">
                <button onClick={onClose} className="absolute top-4 right-4 text-white">Close</button>
                <div className="flex items-center mb-4">
                    <img src={status.image} alt={status.name} className="w-16 h-16 rounded-full object-cover" />
                    <div className="ml-4">
                        <div className="font-semibold">{status.name}</div>
                        <div className="text-sm text-gray-500">{status.time}</div>
                    </div>
                </div>
                <div>
                    <p>Status content for {status.name}</p>
                </div>
            </div>
        </div>
    );
};

export default StatusViewer;
