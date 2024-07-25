import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

const NAV_URL= environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user= new User();

  constructor( private http : HttpClient) { }


  public registerUser(user : User):Observable<any>
{
  console.log("service",user);
  return this.http.post<any>(`${NAV_URL}/api/users/user/register`,user);
}


login(username: string, password: string): Observable<any> {

  console.log("user service",username,password);
  return this.http.post<any>(`${NAV_URL}/api/users/user/login/${username}/${password}`, { username, password });
}

}
