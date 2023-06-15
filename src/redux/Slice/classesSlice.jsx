import { createSlice } from "@reduxjs/toolkit";

const initialState = [] 

const classesSlice = createSlice({
    name:'onlineClass',
    initialState,
    reducers:{
        addOnlineClass:(state, action) => {
            return [...state, action.payload]
        },
        updateOnlineClass:(state, action) => {
            return  state = action.payload
        },
        deleteOnlineClass: (state, action) => {
            return state.filter((data) => data.onlineClassId !== action.payload)
        }
    }
})

export const {addOnlineClass, updateOnlineClass, deleteOnlineClass} = classesSlice.actions;

export default classesSlice.reducer; 