import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import { UsersService } from './../users.service';
import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from "rxjs";
import { addUserToNetwork } from './users.actions';
import { selectNetworks } from './users.selectors';

@Injectable()
export class NotificationEffects {
  notifyUsers$ = createEffect(() => this.actions$.pipe(
    ofType(addUserToNetwork),
    concatLatestFrom(action => this.store.select(selectNetworks)),
    tap(([action, networks]) => {
      const user = networks.find(n => n.id === +action.userId)
      console.log(user.first_name + " is added to your network successfully!!")
    })
  ),
    { dispatch: false })
  constructor(private actions$: Actions,
    private store: Store<AppState>) {

  }
}
