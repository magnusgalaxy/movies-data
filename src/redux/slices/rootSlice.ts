import { createSlice } from "@reduxjs/toolkit";

const initialState: RootSliceType = {
    loader: false,
}

export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        reset: () => initialState,
        setLoader: (state, action) => {
            if (Number.isNaN(action.payload)) return;
            state.loader = action.payload;
        }
    }
})

export const RootActions = rootSlice.actions;

export default rootSlice.reducer;

interface RootSliceType {
    loader: boolean
}