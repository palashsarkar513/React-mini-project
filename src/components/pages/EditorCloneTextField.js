import style from "./PagesAssets/EditorClone.module.css"



function EditorCloneTextField({handleSubmit,handleChange,inputProps}){
    
    return(
        <div>
            <div className={style.container}>
            <div className={style.mainContent}>
                <form action="#" onSubmit={handleSubmit}>
                    <div className={style.inputField}>
                        <input type={inputProps.type} onChange={handleChange} placeholder={inputProps.namePlaceholder}/>
                        
                        <input type={inputProps.email} onChange={handleChange} placeholder={inputProps.emailPlaceholder}/>
                    </div>
                    <div className={style.submit}>
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}
export default EditorCloneTextField