import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routes';
import { langueCourante } from '../classe/langueCourante';
import { LanguageService } from '../service/languageService';

@Component({
  selector: 'freeLance-root',
  standalone: true,
  imports: [RouterOutlet, NgbModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent implements OnInit,OnDestroy{

  title = 'Covoit2';
  //tableau des vehicules+lien de l'image
  
  vehicles = [
    //{ name: 'Vehicule 1', image: 'https://cdn.pixabay.com/photo/2023/05/03/16/11/alfa-romeo-7968027_960_720.jpg'},
    { image: 'https://cdn.pixabay.com/photo/2023/05/03/16/11/alfa-romeo-7968027_960_720.jpg', name: 'vehicule 1'},
    { image: 'https://www.blablastore.fr/_i/131565/p%7B710%7D-26695/3509/96/photos-gratuites-de-asphalte-automobile-citadin.jpeg', name: 'vehicule 2' },
    { image: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg', name: 'vehicule 3' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlTi6tTb3ctA83Ek29kyt0uyD8MnMtNIegQ&s', name: 'vehicule 4' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-K1fRFr9YG1G_HSIhhsRkPCjergO1pN3MQ&s', name: 'vehicule 5' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3w8k-Yk3-HxnI5FUuiiwFAFu1ovzLbpYkpQ&s', name: 'vehicule 6' },
  ];
  
  interval: any | undefined;
  nbFoto = 0; //index de l'image
  
  langue: langueCourante = new langueCourante();

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    clearInterval(this.interval); // Nettoyer l'intervalle lors de la destruction du composant
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.nbFoto = (this.nbFoto + 1) % this.vehicles.length; // Passe à l'image suivante
    }, 5000); // Changer d'image toutes les 5 secondes
    console.log("Foto: "+this.nbFoto+" inter: "+this.interval+"\n "+this.vehicles[this.nbFoto].image);
  }

  //
  constructor(private languageService: LanguageService){
    console.log("nb: "+this.nbFoto);
  }
 

  //methode de selection de la langue
    // Logique pour changer la langue
    changeLanguage(lang: string) {
      this.languageService.selectLanguage(lang);
    }
  
    get currentLanguage() {
      return this.languageService.getlangue();
    }

    nbPlus(){
      this.nbFoto++;
      console.log("nbfoto: "+this.nbFoto);
    }
   nbMoins(){
    this.nbFoto--;
    console.log("nbfoto: "+this.nbFoto);
   }
}
