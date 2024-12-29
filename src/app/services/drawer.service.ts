import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private drawerState = signal<boolean>(false);

  get drawerState$() {
    return this.drawerState.asReadonly();
  }

  toggleDrawer() {
    this.drawerState.update(state => !state)
  }

  constructor() { }
}
