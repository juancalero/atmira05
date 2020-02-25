import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //uri = '/users';
  uri = 'http://localhost:8080/users';
  
  uri2 = 'http://localhost:8080/users/add';


  constructor(private http: HttpClient) { }


  getUsers() {
    return this
           .http
           .get(`${this.uri}`);
  }

  
  addUser() {
    return this
           .http
           .get(`${this.uri2}`);
  }
  
  /*crearUser(user: User) {
    return this
           .http
           .post(`${this.uri}/`+user);
  }*/
  
}
