import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    Users:[],
}


const UserReducer = createSlice({
    name:"Users",
    initialState,
    reducers:{
        GetAll : (state,{payload}) =>{
            state.Users= payload
        },

        Add : (state,{payload}) =>{
            state.Users.push(payload)
        },
        Delete : (state,{payload})=>{
            state.Users = state.Users.filter((item)=>item._id !== payload)
            // console.log(payload)
          
        }

    }
})

export const {GetAll,Add,Delete}=UserReducer.actions
export default UserReducer.reducer