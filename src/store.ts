import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

interface NewsState {
    value: 'list' | 'tiles'
}

const initialState: NewsState = {
    value: 'list',
}

export const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        changeView: (state, action: PayloadAction<NewsState['value']>) => {
            state.value = action.payload
        },
    },
})

export const { changeView } = viewSlice.actions

export const selectView = (state: RootState) => state.view

const store = configureStore({
    reducer: {
        view: viewSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
