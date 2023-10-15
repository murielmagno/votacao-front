import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ModalErrorComponent } from './modal-error/modal-error.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AppRoutingModule} from "./app-routing.module";
import {AuthGuard} from "./utils/AuthGuard";
import { RegisterComponent } from './register/register.component';
import {VotationsModule} from "./votations/votations.module";
import { VotationDetailComponent } from './votation-detail/votation-detail.component';
import { PautaComponent } from './pauta/pauta.component';
import { ReportComponent } from './report/report.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ModalErrorComponent,
    RegisterComponent,
    VotationDetailComponent,
    PautaComponent,
    ReportComponent,
    AppMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    AppRoutingModule,
    VotationsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
