import {adresse} from './adresse';

export interface employe{
    id: number,
    nom: string,
    prenom: string,
    genre: string,
    naissance: Date,
    adresse: adresse,
    statut: boolean,
    tel: string,
    mail: string,
    password: string;
}