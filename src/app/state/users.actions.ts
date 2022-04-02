import { createAction, props } from '@ngrx/store';
import { User } from '../models/users.model';

export const addUserToNetwork = createAction(
  '[Users List] Add User to Network',
  props<{ userId: string }>()
);

export const removeUserToNetwork = createAction(
  '[Users Network] Remove User from Network',
  props<{ userId: string }>()
);

export const getAllUsers = createAction(
  '[Users API] Add All Users from DB',
  props<{ users: ReadonlyArray<User> }>()
);
