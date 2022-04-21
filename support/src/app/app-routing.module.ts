import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTicketComponent } from './component/create-ticket/create-ticket.component';
import { ListTicketsComponent } from './component/list-tickets/list-tickets.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'create-ticket',component:CreateTicketComponent},
  {path:'list-ticket',component:ListTicketsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
