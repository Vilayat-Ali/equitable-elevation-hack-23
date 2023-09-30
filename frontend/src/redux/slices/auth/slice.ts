// lib
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAuth {
    user: {
        username: string;
        email: string;
    },
    token: string,
    isAuthenticated: boolean,
}

const initialState: IAuth = {
    user: {
        username: "",
        email: "",
    },
    token: "",
    isAuthenticated: false,
};

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<Partial<IAuth>>) => {
            state = {...state, ...action.payload};
        },
        logUserOut: (state) => {
            state.isAuthenticated = false;
        }
    }
});

export const {setUser, logUserOut} = userSlice.actions;
export default userSlice.reducer;