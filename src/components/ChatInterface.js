import React, { useState, useEffect, useRef } from 'react';
import ComponentA from './ComponentA';
// Import other components as needed

const ChatInterface = () => {
    const [components, setComponents] = useState([]);
    const endOfChatRef = useRef(null);

    const handleNextStep = (newComponent) => {
        if (newComponent) {
            setComponents(prevComponents=>[...prevComponents,newComponent]);
        }
    };

    const handleClose = (e) => {

    }

    useEffect(() => {
        endOfChatRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [components]);

    return (
        <div className="flex flex-col items-center">
            <ComponentA key="1" onNextStep={handleNextStep} chainLength={1} handleClose={handleClose}/>
            {components.map((component) => component)}
            <div ref={endOfChatRef} />
        </div>
    );
};

export default ChatInterface;