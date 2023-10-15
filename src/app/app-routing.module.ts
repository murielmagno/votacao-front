import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./utils/AuthGuard";
import {RegisterComponent} from "./register/register.component";
import {VotationDetailComponent} from "./votation-detail/votation-detail.component";
import {PautaComponent} from "./pauta/pauta.component";
import {AppMenuComponent} from "./app-menu/app-menu.component";
import {ReportComponent} from "./report/report.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: '',
    component: AppMenuComponent,
    children: [
      {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
      {path: 'votations/:id', component: VotationDetailComponent, canActivate: [AuthGuard]},
      {path: 'pauta', component: PautaComponent, canActivate: [AuthGuard]},
      {path: 'relatorio', component: ReportComponent, canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
