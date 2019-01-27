import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { MaterialModule } from './material-modules/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TicketMasterComponent } from './ticket/master/master.component';
import { TicketDetailComponent } from './ticket/detail/detail.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TableDataComponent } from './table-data/table-data.component';

@NgModule({
    declarations: [AppComponent, LoginComponent, TicketMasterComponent, TicketDetailComponent, ToolbarComponent, TableDataComponent],
    imports: [HttpClientModule, MaterialModule, BrowserAnimationsModule, BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
    providers: [AuthGuard, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {}
