import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private contact:Contact;
  constructor() {
    this.contact = new Contact("Contact","5 avenue de la république", "63100","Clermont-ferrand","damien.brugiere@hotmail.fr","07 50 46 61 03",26,"Permis B");
   }

  ngOnInit() {
  }

}
