import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
    id: "1",
    name : "Merry William",
    email : "merry@mail.com"
    },
    {
    id: "2",
    name : "Jhon Doe",
    email : "jhon@mail.com"
    },
]

const CrudeSlice = createSlice({
    name:"CrudeSlice",
    initialState,
    reducers : {
        user : (state,action)=>{
            state.push(action.payload)
        },
        editUser : (state,action)=>{
            const {id,name,email} = action.payload;
            const exid = state.find(user => user.id === id);
            console.log(exid)
            if(exid){
                exid.name = name;
                exid.email = email
            }
        },
        deleteUser : (state,action)=>{
            const {id} = action.payload;
            const exid = state.find(user => user.id === id);
            if(exid){
                return(
                    state.filter(user => user.id !== id)
                )
            }
        }
    }
})
export const  {user,editUser,deleteUser} = CrudeSlice.actions;
export default CrudeSlice.reducer;