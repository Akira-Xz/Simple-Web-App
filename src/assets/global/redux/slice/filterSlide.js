import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    data: []
}

export const filterSlide = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        //   increment: (state) => {
        //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //     // doesn't actually mutate the state because it uses the Immer library,
        //     // which detects changes to a "draft state" and produces a brand new
        //     // immutable state based off those changes
        //     state.value += 1
        //   },
        //   decrement: (state) => {
        //     state.value -= 1
        //   },
        addFilter: (state, action) => {
            state.data.push(action.payload)
        },
        deleteFilter: (state, action) => {
            const newItems = state.data.filter((e) => e.id !== action.payload)
            state.data = newItems
        }        
    },
})


export const { addFilter, deleteFilter } = filterSlide.actions
export default filterSlide.reducer


