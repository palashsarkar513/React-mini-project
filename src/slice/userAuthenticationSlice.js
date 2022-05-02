import {createSlice} from "@reduxjs/toolkit"

let initialState = [
    {
        id: "1",
        name : "baby",
        email : "baby@mail.com"
    },
    {
        id: "2",
        name : "gaddu",
        email : "gaddu@mail.com"
    }
]
const userAuthenticationSlice = createSlice({
    name : "userAuthenticationSlice",
    initialState,
    reducers:{
        user : (state,action)=>{
            state.push(action.payload)
        },
        editUser:(state,action)=>{
            const {id,name,email} = action.payload;
            const exid = state.find(user => user.id === id);
            if(exid){
                exid.name= name;
                exid.email = email;
            }

        },
        deleteUser:(state,action)=>{
            const {id} =action.payload;
            const exid = state.find(user=> user.id === id);
            if(exid){
                return(
                    state.filter(user=>user.id !== id)
                )
            }
        }
    }
});
export default userAuthenticationSlice.reducer;
export const {user,editUser,deleteUser} = userAuthenticationSlice.actions; 