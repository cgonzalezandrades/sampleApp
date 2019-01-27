import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

export class PasswordErrorMatcher implements ErrorStateMatcher {
    public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

        return invalidCtrl || invalidParent;
    }
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public errorMessage: string;
    public hidePassword = true;
    constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) {}

    public ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    public login() {
        console.log('login');
        this.authService.login();
    }
}
