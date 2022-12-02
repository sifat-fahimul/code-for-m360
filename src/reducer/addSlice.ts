import {createSlice} from '@reduxjs/toolkit'
    const initialState:any=[{age:3}]

const addSlice=createSlice({
    name:'add',
    initialState,
    reducers:{
        added(state,action){
            state.push(action.payload)
        }
    }
})

export const {added}=addSlice.actions;

export default addSlice.reducer;

