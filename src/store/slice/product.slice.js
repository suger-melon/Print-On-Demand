import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../../services/product.services";

// Thunk for API operations
export const fetchProducts = createAsyncThunk("product/fetchAll", async (_, { rejectWithValue }) => {
    try {
        const response = await ProductService.getAll()
        return response.data
    } catch(error) {
        return rejectWithValue(error.response?.data || "Something went wrong")
    }
})

export const fetchProduct = createAsyncThunk("product/fetchOne", async (id, { rejectWithValue }) => {
    try {
        const response = await ProductService.getOne(id)
        return response.data
    } catch(error) {
        return rejectWithValue(error.response?.data || "Something went wrong")
    }
})

export const createProduct = createAsyncThunk("product/create", async (data, { rejectWithValue }) => {
    try {
        const response = await ProductService.create(data)
        return response.data
    } catch(error) {
        return rejectWithValue(error.response?.data || "Something went wrong")
    }
})

export const updateProduct = createAsyncThunk("product/update", async ({id, data}, { rejectWithValue }) => {
    try {
        const response = await ProductService.update(id, data)
        return response.data
    } catch(error) {
        return rejectWithValue(error.response?.data || "Something went wrong")
    }
})

export const deleteProduct = createAsyncThunk("product/delete", async (id, { rejectWithValue }) => {
    try {
        const response = await ProductService.remove(id)
        return response
    } catch(error) {
        return rejectWithValue(error.response?.data || "Something went wrong")
    }
})

const initialState = {
    products: [],
    status: "idle", // idle | loading | success || failed
    error: null
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "fulfilled",
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "rejected",
                state.error = action.payload
            })
            .addCase(fetchProduct.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = "fulfilled",
                state.products = action.payload
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = "rejected",
                state.error = action.payload
            })
            .addCase(createProduct.pending, (state) => {
                state.status = "loading"
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.status = "fulfilled",
                state.products.push(action.payload)
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.status = "rejected",
                state.error = action.payload
            })
            .addCase(updateProduct.pending, (state) => {
                state.status = "loading"
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.status = "fulfilled";
                const index = state.products.findIndex(p => p.id === action.payload.id);
                if(index !== -1) {
                    state.products[index] = action.payload
                }
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.status = "rejected",
                state.error = action.payload
            })
            .addCase(deleteProduct.pending, (state) => {
                state.status = "loading"
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.products = state.products.filter(p => p.id !== action.payload)
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.status = "rejected",
                state.error = action.payload
            })
    }
})

export default productSlice.reducer