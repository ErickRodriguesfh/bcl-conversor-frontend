import { Component } from '@angular/core';
import { DrawerService } from '../../services/drawer.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private drawerService: DrawerService) {

  }

  toggleDrawer() {
    this.drawerService.toggleDrawer();
  }

}
