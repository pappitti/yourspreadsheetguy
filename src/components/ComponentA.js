import React, { useState } from 'react';
import ComponentB from './ComponentB';

const ComponentA = ({ onNextStep,chainLength,handleClose }) => {
    const [inputValue, setInputValue] = useState('');
    const [showWarning, setShowWarning] = useState(false);

    const handleSubmit = () => {
        // Perform validation or other logic
        onNextStep(<ComponentB key={chainLength+1} onNextStep={onNextStep} chainLength={chainLength+1}/>);
    };

    const handleChangeInput = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setShowWarning(value.length > 30);
    };

    return (
        <div className="relative p-4 m-4 bg-white w-full rounded shadow sm:w-[600px]">
                <div className="flex-grow min-w-[64px] max-w-[600px]">
                    <div className="flex w-full flex-nowrap items-center">
                        <div className="w-12 p-2">
                            <img src={`wojak.webp`} alt="Avatar" className="w-10 object-contain" />
                        </div>
                        <div className="font-bold w-full">Hi, how can I help?</div>
                    </div>
                    <textarea
                        value={inputValue}
                        onChange={(e) => handleChangeInput(e)}
                        className="flex-grow p-2 h-32 align-text-top border border-gray-300 rounded w-full mb-4"
                    />
                    <div className="flex w-full justify-start gap-4 flex-wrap">
                    <button onClick={handleSubmit} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                            Validate
                    </button>
                    {showWarning && 
                        <div className="text-sm text-red-500">I am a spreadsheet guy, not a novelist! Keep it short!
                        </div>}
                    </div>
                </div>
        </div>
    );
};

export default ComponentA;