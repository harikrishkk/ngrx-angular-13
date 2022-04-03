import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getusersFromDB(): Observable<User[]> {
    return this.http.get('https://reqres.in/api/users?delay=3').pipe(
      map((res: any) => res.data)
    );
  }
}
