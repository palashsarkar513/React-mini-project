import style from "../Routes Assets/Dashboard.module.css"
import {NavLink} from "react-router-dom"
import {RouteData} from "../RoutesData/Index"
//import {v4 as uuidv4} from "uuid"
function DashBoard (){
    
    return(
        <div className={style.container}>
            <div className={style.sidebar}>
                <ul>
                    {
                        RouteData.map((ele)=>{
                            const {id,title,body} = ele;
                            return(
                                <li key={id}>
                                    <NavLink to ={title} state={{id,title,body}}>{title}</NavLink>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </div>

        </div>
    )
};
export default DashBoard