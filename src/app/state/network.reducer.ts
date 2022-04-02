import { createReducer, on } from '@ngrx/store';
import { addUserToNetwork, removeUseFromNetwork } from './users.actions';

export const initialState: ReadonlyArray<string> = [];

export const networkReducer = createReducer(
  initialState,
  on(removeUseFromNetwork, (state, { userId }) => state.filter((id) => id !== userId)),
  on(addUserToNetwork, (state, { userId }) => {
    if (state.indexOf(userId) > -1) return state;

    return [...state, userId];
  })
);
