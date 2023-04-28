import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    closeCarPage: true,
    sales: false,
}

export const configure = createSlice({
    name: 'control',
    initialState,
    reducers: {
        setcloseCarPage: (state, action) => {
            state.closeCarPage = action.payload;
        }, setSales: (state, action) => {
            state.sales = action.payload;
        },
    }
})

export const { setcloseCarPage,setSales } = configure.actions

export default configure.reducer
