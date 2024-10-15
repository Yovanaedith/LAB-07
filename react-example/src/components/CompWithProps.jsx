import { useState } from "react";

    export const CompWithProps = () => {
    const [inputValue, setInputValue] = useState( ' ' );
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input
                type = "text"
                value ={inputValue}
                onChange = {handleInputChange}
                placeholder = "Write something" 
            /> 
            <h2> {inputValue} </h2>  
        </div>  
    );
};