import { useState } from "react";

export const Button = () => { 
    const [randomNumber, setRandomNumber] = useState (null);
  
    const showRandomNumberAlert = () =>{

        const randomNumber= Math.floor(Math.random()*100) + 1;
        setRandomNumber (randomNumber)
        alert(`Random Number: ${ randomNumber }` );
    };
    return(
        <button onClick={ showRandomNumberAlert }> 
            show number random 
        </button> 
    ); 
};


       