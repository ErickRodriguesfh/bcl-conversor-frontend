import { Routes } from '@angular/router';
import { TicketListComponent } from './features/ticket/components/ticket-list/ticket-list.component';
import { CreateUserComponent } from './features/user/components/create-user/create-user.component';

export const routes: Routes = [
    {path: 'ticket-list', component: TicketListComponent},
    {path: 'create-user', component: CreateUserComponent}
];
