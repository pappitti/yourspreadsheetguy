import React, { useState, useEffect } from 'react';
import ComponentY from './ComponentY';

const ComponentX = ({ onNextStep,chainLength,handleClose }) => {
    const [isLoading, setIsLoading] = useState(true);

    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 5000);

    const handleFirst = () => {
        // Perform validation or other logic
        onNextStep(<ComponentX key={chainLength+1} onNextStep={onNextStep} chainLength={chainLength+1}/>); // Or determine the next component dynamically
    };

    const handleSecond = () => {
        // Perform validation or other logic
        onNextStep(<ComponentY key={chainLength+1} onNextStep={onNextStep} chainLength={chainLength+1}/>); // Or determine the next component dynamically
    };

    return (
        <div className="relative p-4 m-4 bg-white w-full rounded shadow sm:w-[600px]">
                    {isLoading ? (
                        <div className="flex-grow min-w-[64px] max-w-[600px]">
                            <div className="flex mb-4 w-full flex-nowrap items-center">
                                <div className="w-12 p-2">
                                    <img src={`wojak.webp`} alt="Avatar" className="w-10 object-contain" />
                                </div>
                                <div className="font-bold w-full">Working...</div>
                            </div>
                        </div>):(
                        <div className="flex-grow min-w-[64px] max-w-[600px]">
                            <div className="flex mb-4 w-full flex-nowrap items-center">
                                <div className="w-12 p-2">
                                    <img src={`wojak.webp`} alt="Avatar" className="w-10 object-contain" />
                                </div>
                                <div className="font-bold w-full">I need more time to work on the model, do you want me to continue?</div>
                            </div>
                            <div className="w-full flex jusfy-center gap-4">
                                <button onClick={handleFirst} className="px-4 py-2 w-24 text-white bg-blue-500 rounded hover:bg-blue-600">
                                Yes
                                </button>
                                <button onClick={handleSecond} className="px-4 py-2 w-24 text-white bg-blue-500 rounded hover:bg-blue-600">
                                No
                                </button>
                            </div>
                        </div>
                   )}
        </div>
    );
};

    

export default ComponentX;
