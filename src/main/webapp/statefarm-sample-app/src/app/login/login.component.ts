import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public errorMessage: string;
    public hidePassword = true;
    public error: string;
    constructor(
        private router: Router,
        private authService: AuthService,
        private formBuilder: FormBuilder
    ) {}

    public ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    public login() {
        const body = this.loginForm.value;
        body.id = null;
        body.firstName = null;
        body.lastName = null;
        this.authService.login(body).subscribe(
            (response: any) => {
                this.authService.loggedIn.next(true);
                this.router.navigate(['/tickets']);
            },
            (error: any) => {
                console.log(error);
                this.error = 'Username or password invalid or create new account';
            }
        );
    }

    public signup() {
        this.router.navigate(['/signup']);
    }
}
