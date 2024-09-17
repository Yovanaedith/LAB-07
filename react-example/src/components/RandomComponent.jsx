import { useState } from "react";

export const RandomComponent = () => {
    const [randomValue, setRandomValue] = useState(Math.floor(Math.random()* 50));
    
    const generateRandomValue = () => {
        setRandomValue (Math.floor(Math.random()* 50));
    };
    const resetValue = () => {
        setRandomValue(0);
    };
    return(
        <div>
            
            <button onClick={ generateRandomValue }> 
                Generate new value
            </button> 
            <p>The value random is: { randomValue}</p>
            <button onClick={ resetValue }> 
                Reset to 0 
            </button>
           
        </div>
    );
};