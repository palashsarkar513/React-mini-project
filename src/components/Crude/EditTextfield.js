import style from "./CrudeAssets/AboutStyle.module.css"

export default function EditTextfield({handleChange,handleClick,rslt}){
    return(
        <div>
            <div className={style.container}>
                <div className={style.content}>
                <form action="#">
                    <div className={style.text}>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder={rslt.name} onChange={handleChange}/>
                    </div>
                    <div className={style.email}>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder= {rslt.email} onChange={handleChange}/>
                    </div>
                    <button onClick={handleClick}>click for go to home</button>
                </form>
                </div>
            
            </div>
        </div>
    )
}