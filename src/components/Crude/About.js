import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {v4 as uuidv4} from "uuid"
import { user } from "./CrudeSlice";
import AboutTextField from "./AboutTextField";

export default function About (){
    const [input,setInput] = useState({name : "",email : "email"})

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) =>{
        if(e.target.type === "text"){
            setInput({...input,name: e.target.value})
        }if(e.target.type === "email"){
            setInput({...input,email:e.target.value})
        }
        
    }
    
    const handleClick = ()=>{
        dispatch(user({
            id : uuidv4(),
            name : input.name,
            email :input.email
        }))
        navigate("/")
    }

    return(
        <AboutTextField handleClick= {handleClick} handleChange={handleChange}/>
    )
}