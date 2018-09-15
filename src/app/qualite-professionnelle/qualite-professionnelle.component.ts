import { Component, OnInit } from '@angular/core';
import { QualiteProfessionnelle } from '../qualite-professionnelle';
import { Stat } from '../stat';

@Component({
  selector: 'app-qualite-professionnelle',
  templateUrl: './qualite-professionnelle.component.html',
  styleUrls: ['./qualite-professionnelle.component.css']
})
export class QualiteProfessionnelleComponent implements OnInit {
  private test : QualiteProfessionnelle;
  constructor() {
    this.test = new QualiteProfessionnelle("Qualité professionnelle",new Array(new Stat("tutu",2),new Stat("toto",3)));
   console.log(this.test.stats);
  }
  ngOnInit() {
  }
}
