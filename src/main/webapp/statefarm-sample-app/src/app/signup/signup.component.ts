import { SignupService } from './signup.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import {
    FormControl,
    Validators,
    FormGroup,
    FormBuilder,
    FormGroupDirective,
    NgForm
} from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    public signupForm: FormGroup;
    public errorMessage: string;
    public hidePassword = true;
    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private signupService: SignupService
    ) {}

    public ngOnInit() {
        this.signupForm = this.formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    public createAccount() {
        console.log(this.signupForm.value);
        this.signupService.postUser(this.signupForm.value).subscribe(
            (response: any) => {
                this.router.navigate(['/login']);
            },
            (error: any) => {
                console.log(error);
            }
        );
    }
}
