import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'contact', component: ContactComponent}


];

@NgModule ({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],

  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent
  
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}