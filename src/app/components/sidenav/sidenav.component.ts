import { Component } from '@angular/core';
import { DrawerService } from '../../services/drawer.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
 
  constructor(private drawerService: DrawerService) {

  }

  get drawerOpen() : boolean {
    return this.drawerService.drawerState$();
  }

}
