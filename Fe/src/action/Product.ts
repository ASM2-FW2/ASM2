import { createAsyncThunk } from "@reduxjs/toolkit"
import { instance } from "../api/instance"
export const getAllProduct = createAsyncThunk("product/getallproduct", async () => {
    const data = await instance.get("/products")
    return data
})
export const getOne = createAsyncThunk("product/getOneproduct", async (id: any) => {
    const data = await instance.get("/products/"+{id})
    return data
})
export const addProduct = createAsyncThunk("product/addproduct", async (product: any) => {
    const data = await instance.post("/products", product)
    return data
})
export const deleteProduct = createAsyncThunk("product/deleteproduct", async (id: any) => {
    await instance.delete(`/products/${id}`)
    return id
})
export const updateProduct = createAsyncThunk("product/updateproduct", async (product: any) => {
    const data = await instance.put(`/products/${product._id}`, product)
    return data
})