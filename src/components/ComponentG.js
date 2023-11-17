import React, { useState} from 'react';
import ComponentH from './ComponentH';
import ComponentZ from './ComponentZ';

const ComponentG = ({ onNextStep,chainLength,handleClose }) => {
    const [isLoading, setIsLoading] = useState(false);


    function handleFileChange(){
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            const decideNextStep = Math.random();
            if (decideNextStep < 0.5) {
                onNextStep(<ComponentH key={chainLength + 1} onNextStep={onNextStep} chainLength={chainLength + 1}/>);
            } else {
                onNextStep(<ComponentZ key={chainLength + 1} onNextStep={onNextStep} chainLength={chainLength + 1}/>);
            }
        }, 5000);
    }

    return (
        <div className="relative p-4 m-4 bg-white w-full rounded shadow sm:w-[600px]">
                <div className="flex-grow min-w-[64px] max-w-[600px]">
                    <div className="flex w-full flex-nowrap items-center">
                        <div className="w-12 p-2">
                            <img src={`wojak.webp`} alt="Avatar" className="w-10 object-contain" />
                        </div>
                        <div className="font-bold w-full">Select your file, even an image or a pdf, I'll work it out.</div>
                    </div>
                    {isLoading ? ( <div className="font-bold w-full">Processing...</div>):(<input type="file" onChange={handleFileChange} />)}
                </div>
        </div>
    );


}


    

export default ComponentG;
