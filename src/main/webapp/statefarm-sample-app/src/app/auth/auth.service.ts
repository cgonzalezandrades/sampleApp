import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
    public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    constructor(private router: Router) {}

    login() {
        this.loggedIn.next(true);
        this.router.navigate(['/tickets']);
    }

    logout() {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }
}
