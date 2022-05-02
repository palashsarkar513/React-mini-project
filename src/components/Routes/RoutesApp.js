import Home from "./Route Pages/Home"
import DashBoard from "./Route Pages/DashBoard"
import SignUp from "./Route Pages/SignUp";
import Nest1 from "./Route Pages/Nest1";
import Navbar from "./Navbar";
import PrivateRoute from "./Route Pages/PrivateRoute";

import {Routes,Route} from "react-router-dom";

function RoutesApp (){
    return(
        <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<PrivateRoute> <DashBoard/> </PrivateRoute> }/>
            <Route path="/dashboard/:id" element={<Nest1/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        </div>
    )
};
export default RoutesApp