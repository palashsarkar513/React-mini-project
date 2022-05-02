import IsAuth from "../RoutesData/IsAuth";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}){
    const isAuth = IsAuth()
    return isAuth ? children : <Navigate to="/signup" />
}