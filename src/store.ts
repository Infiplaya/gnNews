import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

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

export const createStore = () =>
    configureStore({
        reducer: {
            view: viewSlice.reducer,
        },
    })
export const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
