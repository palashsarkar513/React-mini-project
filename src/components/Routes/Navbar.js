import {NavLink} from "react-router-dom"

import style from "../Routes/Routes Assets/RoutesNav.module.css"

function Navbar (){
    return(
        <div className={style.container}>
            <ul>
                <li>
                    <NavLink to ="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to ="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to ="/signup">Sign Up</NavLink>
                </li>
            </ul>
        </div>
    )
};
export default Navbar;