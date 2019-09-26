import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FilledFormsComponent } from './filled-forms/filled-forms.component';
import { SingleFilledFormComponent } from './single-filled-form/single-filled-form.component';

const routes: Routes = [];
@NgModule({
    imports: [ RouterModule.forRoot([
        { path: '', component: HomeComponent },
        { path: 'cf/:id', component: ContactFormComponent },
        { path: 'lf', component: FilledFormsComponent },
        { path: 'sf', component: SingleFilledFormComponent },
        { path: '**', redirectTo: '' }
      ]),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
