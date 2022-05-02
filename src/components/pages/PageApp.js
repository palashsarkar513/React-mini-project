import Editors from "./Editors"
import{Routes,Route} from "react-router-dom"
import Home from "./Home";
import EditorClone from "./EditorClone"

function PageApp (){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/editors" element={<Editors/>}/>
                <Route path="/editorclone/:id" element={<EditorClone/>}/>
            </Routes>
        </div>
    )
}
export default PageApp;