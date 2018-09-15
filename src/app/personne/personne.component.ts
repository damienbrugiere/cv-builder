import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  private personne: Personne;
  constructor() { 
    this.personne = new Personne("Damien","Brugière","Concepteur/Développeur");
  }

  ngOnInit() {
  }

}
