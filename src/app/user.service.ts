import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/user.model';
import { UserAuth } from 'src/userauth.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


registerUser(user:User)
{

return  this.http.post<User>('http://localhost:1234/users',user);
}


loginUser(userAuth:UserAuth)
{
return  this.http.post<User>('http://localhost:1234/users/login',userAuth);
}

forgotPass(email:string,securityQuestion:string,securityAnswer:string)
{

return this.http.get<User>(`http://localhost:1234/users/forgotpass/${email}/${securityQuestion}/${securityAnswer}`)
}

resetPass(user:User)
{

  return this.http.put('http://localhost:1234/users/resetpass',user);
}


}



