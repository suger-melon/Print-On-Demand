import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slice/product.slice'

const reducer = {
    product: productReducer
    // auth: 
}

const store = configureStore({
    reducer: reducer,
    devTools: true
})

export default store