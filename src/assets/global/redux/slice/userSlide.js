import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    data: {
        // perfilComplete: false,
        // // perfilComplete: false,
        // name: "",
        // // membership: "inactiva"
        // // membership: "estrella"
        // // membership: "exposicion",
        // membership: "",
        // membershipName: "",
        // membershipPrice: "0.0",
        // membershipNextPayment: "---",   
        // events: [],     
    }
}

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.data = action.payload
        },
    },
})


export const { addFilter, deleteFilter, addUser } = userSlide.actions
export default userSlide.reducer


