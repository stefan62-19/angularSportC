import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthorComponent } from './author/author.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { SadrzajComponent } from './sadrzaj/sadrzaj.component';
import { SportsComponent } from './sports/sports.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
import { TrainerCrudComponent } from './trainer-crud/trainer-crud.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/SadrzajComponent', pathMatch: 'full' },
  {
    path:``,
    component:SadrzajComponent
  },
  {
    path:`trainer-crud`,
    component:TrainerCrudComponent
  },
  {
    path:`about-us`,
    component:AboutUsComponent
  },
  {
    path:`author`,
    component:AuthorComponent
  },
  {
    path:`history`,
    component:HistoryComponent
  }
  ,
  {
    path:`sports`,
    component:SportsComponent
  }
  ,
  {
    path:`sports#f`,
    component:SportsComponent
  }
  ,
  {
    path:`contact`,
    component:ContactComponent
  },
  { path: 'sign', component: SignInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  
  { path: 'verify-email-address', component: VerifyEmailComponent },
  {
    path:`**`,
    component:NotFoundComponent
  },
  

];

@NgModule({
  imports: 
  [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(routes,{
      anchorScrolling: 'enabled'
    }),
    BrowserModule,
    BrowserAnimationsModule,
    //BactToTopComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
