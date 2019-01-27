import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ClaimMasterComponent } from './claim/master/master.component';
import { TicketDetailComponent } from './claim/detail/detail.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: '', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'tickets', component: ClaimMasterComponent, canActivate: [AuthGuard] },
    { path: 'tickets/detail', component: TicketDetailComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
