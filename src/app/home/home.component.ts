import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUsersInit, removeUseFromNetwork } from '../state/users.actions';
import { usersFeature } from '../state/users.reducer';
import { selectNetworks } from '../state/users.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading$ = this.store.select(usersFeature.selectLoading);
  networks$ = this.store.select(selectNetworks);

  constructor(private store: Store) { }

  removeUserFromNetwork(id: number) {
    const userId = `${id}`;
    this.store.dispatch(removeUseFromNetwork({ userId }))
  }
  ngOnInit() {
    this.store.dispatch(getUsersInit())
  }

}
