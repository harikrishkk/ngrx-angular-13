import { createSelector, createFeatureSelector } from '@ngrx/store';
import { usersFeature } from './users.reducer';
import { selectRouteParams } from './router.selector';
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

export const selectUserDetails = createSelector(
  usersFeature.selectUsers,
  selectRouteParams,
  (users, routeParams) => {
    return users.find(u => u.id === +routeParams.id)
  }
)
