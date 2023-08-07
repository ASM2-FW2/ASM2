import { createSlice } from "@reduxjs/toolkit"
import {addCate,remove,updateCate,getAllCate} from '../action/Category'
const initialState ={
    categorys: []
}

const CategorySlice = createSlice({
    name:'categorys',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getAllCate.fulfilled,(state: any, action)=>{
            state.categorys = action.payload
        })
        builder.addCase(addCate.fulfilled,(state: any, action)=>{
            state.categorys.push(action.payload)
        })
        builder.addCase(remove.fulfilled,(state: any, action)=>{
            const id = action.payload
            state.categorys = state.categorys.filter((item: any) => item._id != id)
        })
        builder.addCase(updateCate.fulfilled, (state: any, action) => {
            const Category = action.payload;
            state.categorys = state.categorys.map((item: any) =>
                item._id === Category._id ? Category : item
            );
        });

    }
})
export const categoryReducer = CategorySlice.reducer