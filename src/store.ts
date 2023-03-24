import { configureStore, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

interface NewsState {
  view: 'list' | 'tiles';
  // Add more properties here if needed
}

const initialState: NewsState = {
  view: 'list',
};

const reducer = (state = initialState, action: PayloadAction<'list' | 'tiles'>) => {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return {
        ...state,
        view: action.payload,
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;