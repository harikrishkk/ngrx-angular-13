
import { getAllUsers, getUsersInit } from './users.actions';
import { createReducer, createFeature, on } from '@ngrx/store';
import { User } from '../models/users.model';

interface AppUsers {
  users: User[];
  loaded: boolean;
  loading: boolean;
}

const initialState: AppUsers = {
  users: [],
  loaded: false,
  loading: false
}

export const usersFeature = createFeature({
  name: 'users',
  reducer: createReducer(
    initialState,
    on(getUsersInit, (state) => ({
      ...state,
      loading: true,
      loaded: false
    })),
    on(getAllUsers, (state, { users }) => ({
      ...state,
      loading: false,
      loaded: true,
      users: users
    })),
  )
})

export const {
  reducer,
  selectUsersState, // feature selector
  selectUsers,
  selectLoading,
  selectLoaded
} = usersFeature
