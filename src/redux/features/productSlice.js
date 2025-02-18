import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    products: [],
}
const baseUrl = "https://fakestoreapi.com/products"
export const getProduct = createAsyncThunk(
    "products/getProduct",
    async () =>{
        const res = await axios(baseUrl)
        return res.data
    }
)

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (productId) => {
        await axios.delete(`${baseUrl}/${productId}`)
        return productId;
    }
)
export const addProduct = createAsyncThunk(
    "products/addProduct",
    async (product) => {
        const res = await axios.post(baseUrl, product)
        return res.data;
    }
)
export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async (product) => {
        const res = await axios.put(`${baseUrl}/${product.id}`, product)
        return res.data;
    }
)

const productSlice = createSlice(
    {
        name: "products",
        initialState,
        reducers: {},
        extraReducers: (builder)=>{
            builder.addCase(getProduct.fulfilled , (state,action)=>{
                state.products = action.payload;
            })
            builder.addCase(deleteProduct.fulfilled, (state, action)=>{
                state.products = state.products.filter(product=>product.id!== action.payload)
            })
            builder.addCase(addProduct.fulfilled, (state, action)=>{
                state.products.push(action.payload)
            })
        },  
    }
)

export const { extraReducers } = productSlice.actions;
export default productSlice.reducer;