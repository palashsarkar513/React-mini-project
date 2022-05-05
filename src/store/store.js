import {configureStore} from "@reduxjs/toolkit"
//import userAuthenticationSlice from "../slice/userAuthenticationSlice";

import CrudeSlice from "../components/Crude/CrudeSlice";

const store = configureStore({
    reducer:{
        user : CrudeSlice
    }
})
console.log(CrudeSlice)
export default store;