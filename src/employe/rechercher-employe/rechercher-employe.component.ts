import { Component, OnInit } from '@angular/core';
import { EmployeService, Employe } from '../../service/employe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'freeLance-rechercher-employe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rechercher-employe.component.html',
  styleUrls: ['./rechercher-employe.component.css']
})
export class RechercherEmployeComponent implements OnInit{
  employes: Employe[] = [];
  allEmployes: Employe[] = [];

  constructor(private employeService: EmployeService) { }

  ngOnInit() {
    this.employeService.getEmployes().subscribe(data => {
      this.employes = data;
      this.allEmployes = data; // Garder une référence à tous les employés
    });
  }

  onSearch(term: string) {
    this.employes = this.allEmployes.filter(e => e.nom?.toLowerCase().includes(term.toLowerCase()));
  }

  // Ajoutez cette méthode
  handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.onSearch(input.value);
  }

  editEmploye(employe: Employe) {
    // Redirigez vers le formulaire de création avec les données de l'employé pour modifier
    // Vous pouvez aussi implémenter un service pour passer les données
  }

  deleteEmploye(id?: number) {
    if (id) {
      this.employeService.deleteEmploye(id).subscribe(() => {
        this.employes = this.employes.filter(e => e.id !== id);
        alert('Employé supprimé avec succès!');
      });
    }
  }
}

