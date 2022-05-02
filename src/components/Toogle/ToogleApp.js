import { useState } from "react";
import ToogleTextField from "./ToogleTextField";

function ToogleApp (){
    const [condition,setCondition] = useState(true)

    const handleClick = () =>{
        if(condition){
            setCondition(false)
        }else{
            setCondition(true)
        }
    }
    return(
        <div>
            hello from toogle

            <ToogleTextField condition={condition} handleClick={handleClick}/>
        </div>
    )
}
export default ToogleApp;