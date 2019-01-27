import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './../auth/auth.service';
@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    isLoggedIn$: Observable<boolean>;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.isLoggedIn$ = this.authService.isLoggedIn;
    }
}
