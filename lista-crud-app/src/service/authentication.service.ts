import { Injectable } from '@angular/core';  
@Injectable({  
  providedIn: 'root'  
})  
export class AuthenticationService {  
  login(username: string, password: string) {  
    if (username == "admin" && password == "admin") {  
      localStorage.setItem('currentUser', "loggedin");  
      return true;  
    }  
  }  
  logout() {  
    localStorage.removeItem('currentUser');  
  }  
  public get loggedIn(): boolean {  
    return (localStorage.getItem('currentUser') !== null);  
  }  
}  