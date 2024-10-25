import { adresse } from './adresse';
import { employe } from './employe';
import { vehicule } from './vehicule';


export interface covoiturage{
    id: number,
    adresseDepart: adresse,
    adresseArrive: adresse,
    dateDepart: Date,
    dateArrivee: Date,
    organisateur: employe,
    passager: employe[];
    vehicule: vehicule;

}