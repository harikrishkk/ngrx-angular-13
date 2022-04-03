import { createSelector, createFeatureSelector } from '@ngrx/store';
import { usersFeature } from './users.reducer';

export const selectAllNetwork = createFeatureSelector<
  ReadonlyArray<string>
>('network');

export const selectNetworks = createSelector(
  usersFeature.selectUsers,
  selectAllNetwork,
  (users, network) => {
    return network.map((id) => users.find((user) => user.id === +id));
  }
);
