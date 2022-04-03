
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { usersFeature } from '../state/users.reducer';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(usersFeature)
  ],
  exports: [UserListComponent]
})
export class UsersModule { }
