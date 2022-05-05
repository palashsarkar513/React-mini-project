import { useSelector,useDispatch } from "react-redux" 

import { deleteUser } from "./CrudeSlice";
import HomeTextField from "./HomeTextField";

export default function Home (){
    const selector = useSelector(store=> store.user);
    const dispatch = useDispatch()
    
    const handleEdit = (id) =>{
        
    }
    const handleDelete = (id) =>{
        dispatch(deleteUser({
            id
        }))
        
        console.log(id)
    }
    
    return(
        <HomeTextField selector={selector} handleEdit={handleEdit} handleDelete={handleDelete} />
    )
}