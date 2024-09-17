import { useState } from "react";

export const Button = () => { 
  
    const[count, setCount] = useState(0);

    const IncreaseOfFiveByFive = () => {
        setCount(count +5);
    };
    return(
        <button onClick={ IncreaseOfFiveByFive }> 
            Increase by five: { count }
        </button> 
    ); 
 }


       