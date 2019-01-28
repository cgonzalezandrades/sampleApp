import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    constructor(private router: Router, private http: HttpClient) {}

    logout() {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }

    login(body) {
        return this.http.post(`http://localhost:8080/users/login`, body);
    }
}
