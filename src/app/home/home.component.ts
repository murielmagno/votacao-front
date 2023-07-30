import {Component, ViewChild} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username: string;
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  constructor(private authService: AuthService, private router: Router) {
    this.username = authService.getUsername();
  }

  onLogout(): void {
    this.authService.logout();
    this.sidenav.close();
    this.router.navigate(['/login']);
  }

}
