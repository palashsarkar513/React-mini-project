import { useDispatch } from "react-redux";
import {useSelector} from "react-redux";
import { deleteUser } from "../../slice/userAuthenticationSlice";


import HomeTextField from "./HomeTextField";

export default function Home (){
    const dispatch = useDispatch();
    const selector = useSelector(store=>store.user);
    const handleEdit = ()=>{
       
    }
    const handleDelete =(id)=>{
        dispatch(deleteUser({
            id
        }))
    }
    return(
        <HomeTextField selector={selector} handleEdit={handleEdit} handleDelete={handleDelete}/>
    )
}