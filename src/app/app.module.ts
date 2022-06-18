import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrvaKomponentaComponent } from './prva-komponenta/prva-komponenta.component';
import { SadrzajComponent } from './sadrzaj/sadrzaj.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MapsComponent } from './maps/maps.component';
import { AuthorComponent } from './author/author.component';
import { HistoryComponent } from './history/history.component';
import { SportsComponent } from './sports/sports.component';
import { SortFilterComponent } from './sort-filter/sort-filter.component';
import { ContactComponent } from './contact/contact.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import {AngularFireModule}from '@angular/fire/compat'
import{AngularFireDatabaseModule}from '@angular/fire/compat/database'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {environment}from '../environments/environment' 
import{AngularFirestoreModule}from '@angular/fire/compat/firestore'
import { TrainerCrudComponent } from './trainer-crud/trainer-crud.component';
import{CrudService}from './services/crud.service'
import { AuthService } from './services/auth.service';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
@NgModule({
  declarations: [
    AppComponent,
    PrvaKomponentaComponent,
    SadrzajComponent,
    FooterComponent,
    AboutUsComponent,
    MapsComponent,
    AuthorComponent,
    HistoryComponent,
    SportsComponent,
    SortFilterComponent,
    ContactComponent,
    FilterPipe, 
    BackToTopComponent, NotFoundComponent,
    TrainerCrudComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent
     // -> added filter pipe to use it inside the component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule

  ],
  providers: [CrudService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
