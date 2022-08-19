import { configureStore } from "@reduxjs/toolkit";
import { countryApi } from "../services/countryApi";

export default configureStore({
    reducer: {
        [countryApi.reducerPath]: countryApi.reducer
    }
})