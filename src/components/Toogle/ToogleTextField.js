import style from "../Toogle/ToogleAssist/ToogleTextField.module.css"

function ToogleTextField ({condition,handleClick}){
    return(
        <div className={condition ? style.dark : style.day}>
            <button onClick={handleClick}>{condition ? "hide" : "show"}</button>
            {condition && (
            <div className={style.container}>
                <div className={style.paragraph}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam qui esse expedita deserunt quod suscipit quo eum illum nesciunt consectetur. Dolorum reiciendis incidunt officia consequuntur eveniet libero deserunt, aspernatur nisi. Dolorum animi doloribus obcaecati distinctio. Hic, illo ut. Expedita, vitae optio magnam repellat nulla sapiente porro eum delectus culpa impedit laborum debitis maiores quam, ipsum distinctio voluptate esse sit quis nam eaque unde obcaecati? Atque magnam in dolore perspiciatis officiis blanditiis dolorem perferendis aut aperiam debitis vel quibusdam laboriosam, ut inventore autem sequi cupiditate consequuntur ipsam accusantium error? Ex quisquam ducimus voluptas veniam, sed voluptatibus reiciendis sit deserunt quod corrupti!</p>
                </div>
            </div>
            )}
        </div>
    )
};
export default ToogleTextField;