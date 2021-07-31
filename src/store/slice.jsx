import { createSlice } from '@reactjs/toolkit'

export const slice = createSlice({
    name: 'slice',
    initialState: {
        collection: [],
    },
    reducers: {
        setCollection: (state, { collection }) => ({ ...state, collection: collection }),
    }
})
export const { setCollection } = slice.actions
export default slice.reducer