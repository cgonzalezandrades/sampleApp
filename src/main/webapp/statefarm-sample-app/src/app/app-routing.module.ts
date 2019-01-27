import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ClaimMasterComponent } from './claim/master/master.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: '', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'tickets', component: ClaimMasterComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
