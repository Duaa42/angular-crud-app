import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:3000/users";
  constructor(private http:HttpClient) { }
  getUsers():Observable<User[]>{ 
    return this.http.get<User[]>(this.url);
  }

  SaveUser(user:User):Observable<User>{
    return this.http.post<User>(this.url,user);
  }
  DeleteUser(id:string):Observable<User>{
    return this.http.delete<User>(this.url+'/'+id);
  }

  DeleUser(id:string):Observable<User>{
    return this.http.delete<User>(this.url+'/'+id);
  }

  SelectUser(id:string):Observable<User>{
    return this.http.get<User>(this.url +'/'+ id)

  }

  UpdateUser(user:User):Observable<User>{
    return this.http.put<User>(this.url +'/'+ user.id,user)

  }
}
