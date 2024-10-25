import { EmployeService, Employe } from '../../service/employe.service';
import { NgModule, Component} from '@angular/core';
import { AppComponent } from '../../app/app.component';
import { RechercherEmployeComponent } from '../rechercher-employe/rechercher-employe.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule, // Ajoutez FormsModule ici
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
/*
@Component({
  selector: 'app-employee-create',
  templateUrl: './creer-employe.component.html',
  styleUrls: ['./creer-employe.component.css']
})
*/
export class CreerEmployeComponent {
  //employe: Employe = {};
  employe: Employe = {
    id: undefined,
    nom: '',
    prenom: '',
    genre: '',
    naissance: new Date(),
    adresse: { rue: '', ville: '', codePostal: '' },
    statut: true,
    tel: '',
    mail: '',
    password: ''
  };

  constructor(private employeService: EmployeService) { }

  onSubmit() {
    this.employeService.createEmploye(this.employe).subscribe(() => {
      alert('Employé créé avec succès!');
      this.employe = {}; // Réinitialiser le formulaire
    });
  }
}


