import EditorCloneTextField from "./EditorCloneTextField"
import {useParams}from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux"
import { useState } from "react"

import {editUser} from "../../slice/userAuthenticationSlice";

function EditorClone (){
    const dispatch = useDispatch()
    const params = useParams();
    const navigate = useNavigate();
    const selector = useSelector(store=>store.user);
    const existingUser = selector.filter(ele=> ele.id === params.id);
    const {name,email} = existingUser[0]
    
    const [input,setInput] = useState({name:"", email:""})
    
    const inputType={
        name:"name",
        name2: "email",
        type:"text",
        email:"email",
        namePlaceholder:name,
        emailPlaceholder: email,
    }
    const handleChange = (e) =>{
        if(e.target.type === "text"){
            setInput({...input,name:e.target.value})
        }else if(e.target.type === "email"){
            setInput({...input,email:e.target.value})
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(editUser({
            id:params.id,
            name : input.name,
            email:input.email
        }))
        navigate("/")
        
    }
    return(
        <div>
            <EditorCloneTextField inputProps={inputType} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    )
}
export default EditorClone