import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { CreateTicketComponent } from './component/create-ticket/create-ticket.component';
import { ListTicketsComponent } from './component/list-tickets/list-tickets.component';
import { HeaderComponent } from './component/header/header.component';
import { MainContainerComponent } from './component/main-container/main-container.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateTicketComponent,
    ListTicketsComponent,
    HeaderComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
