import { createAsyncThunk } from "@reduxjs/toolkit"
import { instance } from "../api/instance"
export const getAllCate = createAsyncThunk("getAllCate", async () => {
    const data = await instance.get("/categorys")
    return data
})
export const remove = createAsyncThunk("deleteCate", async (id: any) => {
    const data = await instance.delete("/categorys/"+id)
    return data
})
export const updateCate = createAsyncThunk("updateCate", async (category: any) => {
    const data = await instance.put(`/categorys/${category._id}`, category)
    return data
})
export const addCate = createAsyncThunk("addCate", async (category: any) => {
    const data = await instance.post("/categorys", category)
    return data
})
