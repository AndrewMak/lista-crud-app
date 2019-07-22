import { Injectable } from '@angular/core';  
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';  
@Injectable({ providedIn: 'root' })  
export class AuthGuard implements CanActivate {  
    constructor(private _router: Router) { }  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  
        if (localStorage.getItem('currentUser')) {  
            return true;  
        }  
        this._router.navigate(['']);  
        return false;  
    }  
}  