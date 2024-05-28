import React from 'react';

import StatusItem from './StatusItem';

const statuses = [
    { id: 1, name: "John Doe", image: "https://via.placeholder.com/150", time: "Today, 10:30 AM" },
    { id: 2, name: "John Doe", image: "https://via.placeholder.com/150", time: "Today, 10:30 AM" },
    { id: 3, name: "John Doe", image: "https://via.placeholder.com/150", time: "Today, 10:30 AM" },
    { id: 4, name: "John Doe", image: "https://via.placeholder.com/150", time: "Today, 10:30 AM" },
    { id: 5, name: "John Doe", image: "https://via.placeholder.com/150", time: "Today, 10:30 AM" },
    { id: 6, name: "John Doe", image: "https://via.placeholder.com/150", time: "Today, 10:30 AM" },
    { id: 7, name: "My Story", image: "https://via.placeholder.com/150", time: "Today, 10:30 AM" },
    // Add more statuses here solomon
];

const StatusList = ({ onStatusClick }) => {

    return (
        <div className="">
            {statuses.filter((status) => status.name != "My Story")  .map(status => (
                <StatusItem key={status.id} status={status} onclick={() => onStatusClick(status)}/>
            ))}
        </div>
    );
};

export const StatusListUser = ({ onStatusClick }) => {

    return (
        <div className="">
            {statuses.filter((status) => status.name == "My Story")  .map(status => (
                <StatusItem key={status.id} status={status} onclick={() => onStatusClick(status)}/>
            ))}
        </div>
    );
};



export default StatusList;
