import {configureStore} from "@reduxjs/toolkit"
import userAuthenticationSlice from "../slice/userAuthenticationSlice";

const store = configureStore({
    reducer:{
        user : userAuthenticationSlice
    }
})
export default store;