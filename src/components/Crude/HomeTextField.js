import style from "./CrudeAssets/HomeStyle.module.css"
import {NavLink} from "react-router-dom"

export default function HomeTextField ({selector, handleEdit, handleDelete}){
    return(
        <div>
            <div className={style.container}>
           
           {selector.map((ele)=>{
               return(
                <div className={style.content} key={ele.id}>
                    <div>
                    id : {ele.id}
                    <br />
                    name : {ele.name}
                    <br />
                    email : {ele.email}
                    </div>
                    <div>
                        <NavLink to ={`edit/${ele.id}`}>
                            <h4 onClick={()=> handleEdit(ele.id)}>edit</h4>
                        </NavLink>
                        
                        <h4 onClick={()=>handleDelete(ele.id)}>del</h4>
                    </div>
                </div>
               )
           })}
           
            </div>
        </div>
    )
}