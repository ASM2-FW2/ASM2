import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { productReducer } from "../slice/ProductSlice";
import { categoryReducer } from "../slice/CategorySlice";


const store = configureStore({
    reducer: {
        products: productReducer,
        categorys: categoryReducer
    }
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export default store;