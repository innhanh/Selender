import { createSlice } from "@reduxjs/toolkit";

const AuthenSlice = createSlice({
    name: "authen",
    initialState: {
        Admin: []
    },
    reducers: {
        loginAdminSuccess: (state, actions) => {
            state.Admin = actions.payload;
        },
    }
});
export const {
    loginAdminSuccess
} = AuthenSlice.actions;

export default AuthenSlice;