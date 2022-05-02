import style from "../pages/PagesAssets/Home.module.css"
import { NavLink } from "react-router-dom"
import {MdDelete} from "react-icons/md"
import {FaUserEdit} from "react-icons/fa"


function HomeTextField({selector,handleEdit,handleDelete}){
    return(
        <div>
            <div className={style.container}>
            <NavLink to="/editors">
                <button>click</button>
            </NavLink>

            
            <div className={style.box} >
                {selector.map((ele)=>{
                    return(
                        <div className={style.boxContent} key={ele.id}>
                            <div className={style.userContent}>
                                name : {ele.name}
                                <br />
                                email : {ele.email}
                            </div>
                            <div className={style.icons}>
                                <NavLink to={`editorclone/${ele.id}`}>
                                    <li onClick={handleEdit}><MdDelete/></li>
                                </NavLink>
                                
                                <li onClick={()=>handleDelete(ele.id)}><FaUserEdit/></li>
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
        </div>
    )
}
export default HomeTextField