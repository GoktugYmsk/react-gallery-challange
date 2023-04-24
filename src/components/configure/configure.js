import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    closeCarPage: true,
}

export const configure = createSlice({
    name: 'control',
    initialState,
    reducers: {
        setcloseCarPage: (state, action) => {
            state.closeCarPage = action.payload;
        },
    }
})

export const { setcloseCarPage } = configure.actions

export default configure.reducer
