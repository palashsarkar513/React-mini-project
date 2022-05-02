import style from "../Routes Assets/Nest1.module.css"
import {useLocation} from "react-router-dom";

function Nest1 (){
    const location = useLocation();
    console.log(location)
    return(
        <div className={style.container}>
            <article>
                <h2>title :{location.state.title}</h2>
                <br />
                <h3>paragraph : {location.state.body}</h3>
            </article>
        </div>
    )
};
export default Nest1