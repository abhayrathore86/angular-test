import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilledFormsComponent } from './filled-forms/filled-forms.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SingleFilledFormComponent } from './single-filled-form/single-filled-form.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpServiceService } from './http-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FilledFormsComponent,
    ContactFormComponent,
    SingleFilledFormComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ HttpServiceService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
