import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment.prod';


const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  
  public registerUser(user : User):Observable<any>
  {
  console.log("service",user);
  return this.http.post<any>(`${NAV_URL}api/users/user/register`,user);}


 login(username: string, password: string): Observable<User> {
  const url = `${NAV_URL}api/users/user/login/${username}/${password}`;
  return this.http.post<User>(url, {});
}
}
