import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';
import { ContactComponent } from './contact/contact.component';
import { QualiteProfessionnelleComponent } from './qualite-professionnelle/qualite-professionnelle.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    ContactComponent,
    QualiteProfessionnelleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
