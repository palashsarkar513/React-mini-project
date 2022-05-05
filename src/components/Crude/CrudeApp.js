import {Routes,Route} from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Edit from "./Edit"
import CrudNav from "./CrudNav"

export default function CrudeApp(){
    return (
        <div>
            <CrudNav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/edit/:id" element={<Edit/>}/>
            </Routes>
        </div>
    )
}