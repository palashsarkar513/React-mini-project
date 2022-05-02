import { useState } from "react"
import SidebarTextfield from "./SidebarTextField"

function SidebarApp (){
    const [condition,setCondition] =useState(false);
    const handleClick = () =>{
        setCondition(false)
    }
    const showSidebar = () =>{
        setCondition(true)
    }
    return(
        <div>
            <SidebarTextfield condition={condition} handleClick={handleClick} showSidebar={showSidebar}/>
        </div>
    )
};
export default SidebarApp