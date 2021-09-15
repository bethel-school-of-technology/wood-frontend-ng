import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = "http://localhost:8080/api/user"
  constructor(private http:HttpClient) { }

  createUser(newUser: User) : Observable <User> {
    return this.http.post<User>(`${this.baseUrl}/register`,newUser)
  }
  getUser(getUser: User) : Observable <User>{
    return this.http.post<User>(`${this.baseUrl}/login`,getUser)
  }

}
