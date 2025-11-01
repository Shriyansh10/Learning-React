import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.status = true;
            state.user = action.payload;
        },
        setIsLoggedOff: (state) =>{
            state.status = false;
            state.user = null;
        }
    }
})

export const { setIsLoggedIn , setIsLoggedOff } = authSlice.actions;

export default authSlice.reducer;