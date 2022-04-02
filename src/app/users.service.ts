import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getusersFromDB(): Observable<any> {
    return this.http.get('https://reqres.in/api/users').pipe(
      map((res:any) => res.data)
    );
  }
}
