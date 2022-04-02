import { createAction, props } from '@ngrx/store';
import { User } from '../models/users.model';

export const addUserToNetwork = createAction(
  '[Users List] Add User to Network',
  props<{ userId: string }>()
);

export const holdNewUsers = createAction(
  '[Users List] Hold new users from adding'
);

export const removeUseFromNetwork = createAction(
  '[Users Network] Remove User from Network',
  props<{ userId: string }>()
);

export const getAllUsers = createAction(
  '[Users API] Add All Users from DB',
  props<{ users: ReadonlyArray<User> }>()
);
