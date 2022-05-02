import style from "../pages/PagesAssets/EditorsTextfield.module.css"


function EditorsTextField ({inputProps,handleSubmit,handleChanege}){
    const {name,name2,type,placeholder,email,emailPlaceholder} = inputProps;
    return(
        <div className={style.container}>
            <div className={style.mainContent}>
                <form action="#" onSubmit={handleSubmit}>
                    <div className={style.inputField}>
                        <input name={name} type={type} placeholder={placeholder}  onChange={handleChanege}/>
                        
                        <input name ={name2} type={email} placeholder={emailPlaceholder} onChange={handleChanege}/>
                    </div>
                    <div className={style.submit}>
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default EditorsTextField