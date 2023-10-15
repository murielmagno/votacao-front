import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {AuthService} from "../utils/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent {

  username: string;
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  constructor(private authService: AuthService, private router: Router) {
    this.username = authService.getUsername();
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
