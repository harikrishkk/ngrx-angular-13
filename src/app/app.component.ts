import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-learn';
  constructor(private usersService: UsersService) {

  }
  ngOnInit() {
    this.usersService.getusersFromDB().subscribe(
      data => console.log(data)
    )
  }
}
