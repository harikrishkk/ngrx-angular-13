import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { selectUserDetails } from '../state/users.selectors';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user$ = this.store.select(selectUserDetails);
  constructor(private store: Store) { }

  ngOnInit() {

  }

}
