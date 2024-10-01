import { createSlice } from "@reduxjs/toolkit";
import lang from "./LanguageConstants";
import { config } from "tailwind-scrollbar-hide";

const ConfigSlice=createSlice({
    name:"config",
    initialState:{
        lang:"en",
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.lang=action.payload;
        }
    }
})

export const {changeLanguage}=ConfigSlice.actions;
export default ConfigSlice.reducer;