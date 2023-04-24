import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    
}

export const configure = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setPassword: (state, acticon) => {
            state.password = acticon.payload;
        },
    }
})


export const { setPassword } = configure.actions

export default configure.reducer