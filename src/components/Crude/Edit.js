import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { editUser } from "./CrudeSlice";
import { useNavigate,useParams } from "react-router-dom";

import EditTextfield from "./EditTextfield"


export default function Edit (){
    const [input,setInput] = useState({name : "",email : "email"})

    const params =useParams()
    const dispatch = useDispatch()
    const selector = useSelector(store=> store.user);
    const rslt = selector.find((ele)=> params.id === ele.id);
    const navigate = useNavigate()


    
    const handleChange = (e) =>{
        if(e.target.type === "text"){
            setInput({...input,name: e.target.value})
        }if(e.target.type === "email"){
            setInput({...input,email:e.target.value})
        }
        
    }
    
    const handleClick = (e)=>{
        e.preventDefault()
        dispatch(editUser({
            id : params.id, 
            name : input.name,
            email :input.email
        }))
        navigate("/")
    }
    
    return(
        <div>
            <EditTextfield handleChange={handleChange} handleClick={handleClick} rslt = {rslt}/>
        </div>
    )
}