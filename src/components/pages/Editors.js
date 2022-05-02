import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditorsTextField from "./EditorsTextField"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {user} from "../../slice/userAuthenticationSlice"



function Editors(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [input,setInput] = useState({name:"",email:""})

    const inputType ={
        name:"name",
        name2: "email",
        type:"text",
        email:"email",
        emailPlaceholder:"type your email",
        placeholder: "type your name",
        
    }
    const handleChanege = (e) =>{
        if(e.target.type === "text"){
            setInput({...input,name:e.target.value})
        }else if(e.target.type==="email"){
            setInput({...input,email:e.target.value})
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(user({
            id:uuidv4(),
            name :input.name,
            email:input.email
        }))
        navigate("/")
    }
    return(
        <div>
            <EditorsTextField inputProps={inputType} handleChanege={handleChanege} handleSubmit={handleSubmit}/>
            
        </div>
    )
}
export default Editors