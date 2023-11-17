import React, { useState } from 'react';
import ComponentX from './ComponentX';

const ComponentY = ({ onNextStep,chainLength,handleClose }) => {

const handleFirst = () => {
    // Perform validation or other logic
    onNextStep(<ComponentY key={chainLength+1} onNextStep={onNextStep} chainLength={chainLength+1}/>); // Or determine the next component dynamically
};

const handleSecond = () => {
    // Perform validation or other logic
    onNextStep(<ComponentX key={chainLength+1} onNextStep={onNextStep} chainLength={chainLength+1}/>); // Or determine the next component dynamically
};

return (
    <div className="relative p-4 m-4 bg-white w-full rounded shadow sm:w-[600px]">
        <div className="flex-grow min-w-[64px] max-w-[600px]">
            <div className="flex mb-4 w-full flex-nowrap items-center">
                <div className="w-12 p-2">
                    <img src={`wojak.webp`} alt="Avatar" className="w-10 object-contain" />
                </div>
                <div className="font-bold w-full">Sorry to hear that. It shouldn’t take long though, are you sure you don’t want me to handle this?</div>
            </div>
            <div className="w-full flex jusfy-center gap-4">
                <button onClick={handleFirst} className="px-4 py-2 min-w-[96px] text-white bg-blue-500 rounded hover:bg-blue-600">
                Yes, stop now
                </button>
                <button onClick={handleSecond} className="px-4 py-2 min-w-[96px] text-white bg-blue-500 rounded hover:bg-blue-600">
                Please continue
                </button>
            </div>
        </div>
    </div>
);
};


    

export default ComponentY;
