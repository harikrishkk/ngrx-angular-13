import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from '../models/users.model';

export const selectUsers = createFeatureSelector<ReadonlyArray<User>>('users');

export const selectAllNetwork = createFeatureSelector<
  ReadonlyArray<string>
>('network');

export const selectNetworks = createSelector(
  selectUsers,
  selectAllNetwork,
  (users, network) => {
    return network.map((id) => users.find((user) => user.id === +id));
  }
);
