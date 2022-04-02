import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from '../models/users.model';

export const selectUsers = createFeatureSelector<ReadonlyArray<User>>('users');
