import axios from "axios";
import { useEffect, useRef, useState } from "react";


function Contents() {
    const [timer, setTimer] = useState(180)
    
    
    useEffect( () => {
       const timerId = setInterval( () => {
        setTimer(timer - 1)
       },1000)

       return () => {
        clearInterval(timerId) 
    }
    },[timer]
    
   

    )
    

    return (  
        <div>
            {timer}
        </div>

    );
}

export default Contents;