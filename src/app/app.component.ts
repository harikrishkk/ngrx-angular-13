
import { getAllUsers, getUsersInit, removeUseFromNetwork } from './state/users.actions';
import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Store } from '@ngrx/store';
import { usersFeature } from './state/users.reducer';
import { selectNetworks } from './state/users.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading$ = this.store.select(usersFeature.selectLoading);
  networks$ = this.store.select(selectNetworks);

  constructor(private usersService: UsersService,
    private store: Store) {
  }


  removeUserFromNetwork(id: number) {
    const userId = `${id}`;
    this.store.dispatch(removeUseFromNetwork({ userId }))
  }
  ngOnInit() {
    this.store.dispatch(getUsersInit())
  }
}
