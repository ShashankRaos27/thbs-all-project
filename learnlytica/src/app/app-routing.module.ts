import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CourseComponent } from './components/course/course.component';
import { DetailProfileComponent } from './components/detail-profile/detail-profile.component';
import { HomeComponent } from './components/home/home.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { ServicesComponent } from './components/services/services.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  { path: 'course', component:ListCourseComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:pid', component: DetailProfileComponent },
  { path: 'list-contact', component: ListContactComponent},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'reactive',component:ReactiveComponent},
  {path:'template-form',component:TemplateFormComponent},
  {path:'contact-form',component:ContactFormComponent},
  {path:'**', component:NotFoundComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }