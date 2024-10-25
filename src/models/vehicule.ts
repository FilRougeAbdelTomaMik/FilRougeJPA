import {categorie} from './enums/categorie';
import {motorisation} from './enums/motorisation';
import {statut} from './enums/statut';
import {type} from './enums/type';


export interface vehicule{

    id: number,
    marque: string,
    model: string,
    immatriculation: string,
    categorie: string,
    urlFoto: string,
    motorisation: string,
    co2: number,
    places: number
}