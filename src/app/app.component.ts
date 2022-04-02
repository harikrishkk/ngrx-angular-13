import { selectUsers } from './state/users.selectors';
import { getAllUsers } from './state/users.actions';
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
  constructor(private usersService: UsersService,
    private store: Store) {

  }
  ngOnInit() {
    this.usersService.getusersFromDB().subscribe(
      data => {
        this.store.dispatch(getAllUsers({ users: data }))
      }
    )
  }
}
