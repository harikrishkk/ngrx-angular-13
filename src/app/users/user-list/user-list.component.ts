import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addUserToNetwork } from 'src/app/state/users.actions';
import { usersFeature } from 'src/app/state/users.reducer';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$ = this.store.select(usersFeature.selectUsers);
  constructor(private store: Store) { }

  ngOnInit() {
  }

  addUserToNetwork(id: number) {
    const userId = `${id}`;
    this.store.dispatch(addUserToNetwork({ userId }))
  }

}
