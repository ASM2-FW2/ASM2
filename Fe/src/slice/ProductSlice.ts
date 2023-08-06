import { createSlice } from "@reduxjs/toolkit"
import { addProduct, deleteProduct, getAllProduct, updateProduct } from "../action/Product"

const initialState = {
    products: []
}

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProduct.fulfilled, (state: any, action) => {
            state.products = action.payload
        })
        builder.addCase(addProduct.fulfilled, (state: any, action) => {
            state.products.push(action.payload)
        })
        builder.addCase(deleteProduct.fulfilled, (state: any, action) => {
            const id = action.payload
            state.products = state.products.filter((item: any) => item._id != id)
        })
        builder.addCase(updateProduct.fulfilled, (state: any, action) => {
            const product = action.payload;
            console.log(product);
            state.products = state.products.map((item: any) =>
                item._id === product._id ? product : item
            );
        });

    }
})

export const productReducer = ProductSlice.reducer