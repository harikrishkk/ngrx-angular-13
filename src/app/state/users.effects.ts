import { UsersService } from './../users.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from "rxjs";

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Users API] Get All Users Request Init'),
      mergeMap(() => this.usersService.getusersFromDB().pipe(
        map(users => ({
          type: '[Users API] Add All Users from DB',
          users: users
        }))
      )
      )
    )
  })
  constructor(private actions$: Actions, private usersService: UsersService) {

  }
}
