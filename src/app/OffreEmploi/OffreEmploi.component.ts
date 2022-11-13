import { Component, OnInit } from '@angular/core';
import { Emploi } from 'core/Emploi';
@Component({
  selector: 'app-OffreEmploi',
  templateUrl: './OffreEmploi.component.html',
  styleUrls: ['./OffreEmploi.component.css']
})
export class EmploiComponent implements OnInit {
  title:string="welcome to products page!"
  EmploiList!:Emploi[];
  constructor() { }

  ngOnInit(): void {
    this.EmploiList=[
      {reference:"123AZ",titre:"ing",entreprise:"vermeg",etat:true},
      {reference:"azerty",titre:"trader",entreprise:"ey",etat:false},
      {reference:"qsdfgh",titre:"med",entreprise:"amen",etat:false}
      ];
  }
/**
 * let som = 0;
 let calculer(){

    for(let i=0;i<this.EmploiList.length;i++)
    {
    if(this.EmploiList[i].etat==true)
    {
      som++;
    }
    }

}
 */
  


}