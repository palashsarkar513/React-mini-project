import style from "./CrudeAssets/AboutStyle.module.css"

export default function AboutTextField ({handleClick, handleChange}){
    return(
        <div>
             <div className={style.container}>
            <div className={style.content}>
                <form action="#" onSubmit={handleClick}>
                    <div className={style.text}>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="type your name" onChange={handleChange}/>
                    </div>
                    <div className={style.email}>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="type your email" onChange={handleChange}/>
                    </div>
                    <button type="submit">click for go to home</button>
                </form>

            </div>
            
        </div>
        </div>
    )
}