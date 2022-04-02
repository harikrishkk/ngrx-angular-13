import { getAllUsers, holdNewUsers } from './users.actions';
import { createReducer, on } from '@ngrx/store';
import { User } from '../models/users.model';

export const initialState: ReadonlyArray<User> = [];

export const usersReducer = createReducer(
  initialState,
  on(getAllUsers, (_state, { users }) => users),
  on(holdNewUsers, (state) => state)
);



