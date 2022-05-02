import style from "./Sidebar assets/SidebarTextField.module.css"

function SidebarTextfield ({condition,handleClick,showSidebar}){
    return(
        <div>
            <div className={style.container}>
            <a href="#" onClick={showSidebar}>show</a>
                {condition && (
                    <div className={style.sidebar}>
                        <div className={style.sidebar_header}>
                            sidebar header
                            <br />
                            <a href="#" onClick={handleClick}>hide</a>
                        </div>
                        
                        <ul>
                            <li>
                                <a href="#">
                                    home
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    about
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    contact
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
};
export default SidebarTextfield