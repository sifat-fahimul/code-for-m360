import {createSlice} from '@reduxjs/toolkit'
    const initialState:any=[]

const addSlice=createSlice({
    name:'add',
    initialState,
    reducers:{
        added(state,action){
           action.payload
        }
    }
})

export const {added}=addSlice.actions;

export default addSlice.reducer;

