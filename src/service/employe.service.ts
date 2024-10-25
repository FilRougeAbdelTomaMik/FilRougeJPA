import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Adresse {
  rue: string;
  ville: string;
  codePostal: string;
}

export interface Employe {
  id?: number;
  nom?: string;
  prenom?: string;
  genre?: string;
  naissance?: Date;
  adresse?: Adresse;
  statut?: boolean;
  tel?: string;
  mail?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private apiUrl = 'http://localhost:3000/employes'; // URL de votre API

  constructor(private http: HttpClient) { }

  createEmploye(employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.apiUrl, employe);
  }

  getEmployes(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.apiUrl);
  }

  updateEmploye(employe: Employe): Observable<Employe> {
    return this.http.put<Employe>(`${this.apiUrl}/${employe.id}`, employe);
  }

  deleteEmploye(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
