import { selectUsers, selectNetworks } from './state/users.selectors';
import { addUserToNetwork, getAllUsers, removeUseFromNetwork } from './state/users.actions';
import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users$ = this.store.select(selectUsers);
  networks$ = this.store.select(selectNetworks);

  constructor(private usersService: UsersService,
    private store: Store) {
  }

  addUserToNetwork(id: number) {
    const userId = `${id}`;
    this.store.dispatch(addUserToNetwork({ userId }))
  }
  removeUserFromNetwork(id: number) {
    const userId = `${id}`;
    this.store.dispatch(removeUseFromNetwork({ userId }))
  }
  ngOnInit() {
    this.usersService.getusersFromDB().subscribe(
      data => {
        this.store.dispatch(getAllUsers({ users: data }))
      }
    )
  }
}
