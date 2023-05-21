import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    closeCarPage: true,
    sales: false,
    rightBar: true,
    closeLoginPopup: true,
}

export const configure = createSlice({
    name: 'control',
    initialState,
    reducers: {
        setcloseCarPage: (state, action) => {
            state.closeCarPage = action.payload;
        }, setSales: (state, action) => {
            state.sales = action.payload;
        }, setRightBar: (state, action) => {
            state.rightBar = action.payload;
        },
        setCloseLoginPopup: (state, action) => {
            state.closeLoginPopup = action.payload;
        },
    }
})

export const { setcloseCarPage, setSales,setRightBar,setCloseLoginPopup } = configure.actions

export default configure.reducer
