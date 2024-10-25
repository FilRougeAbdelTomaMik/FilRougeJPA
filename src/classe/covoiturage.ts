import { employe } from '../models/employe';
import { vehicule } from '../models/vehicule';
import { adresse } from '../models/adresse';


export class covoiturage implements covoiturage{
    //attributs
    id: number | undefined;
    adresseDepart: adresse | undefined;
    adresseArrivee: adresse | undefined;
    dateDepart: Date | undefined ;
    dateArrivee: Date | undefined ;
    organisateur: employe | undefined;
    passager: employe[] | undefined;
    vehicule: vehicule | undefined;

    //constructeur
    constructor();
    constructor(id: number, adresseDepart: adresse, adresseArrivee: adresse, dateDepart: Date, dateArrivee: Date, organisateur: employe, passager: employe[], vehicule: vehicule);
    constructor(id?: number, adresseDepart?: adresse, adresseArrivee?: adresse, dateDepart?: Date, dateArrivee?: Date, organisateur?: employe, passager?: employe[], vehicule?: vehicule){
        this.id = id;
        this.adresseDepart = adresseDepart;
        this.adresseArrivee = adresseArrivee;
        this.dateDepart = dateDepart;
        this.dateArrivee = dateArrivee;
        this.organisateur = organisateur;
        this.passager = passager;
        this.vehicule = vehicule;
    }
    //methode ++ ajouter addPassager/deletePassager
    toString(){
        return `${this.id} ${this.adresseDepart} ${this.adresseArrivee} ${this.dateDepart} ${this.dateArrivee} ${this.organisateur} ${this.passager} ${this.vehicule} `;
    }    
    //getters
    getId(){
        return this.id;
    }
    getAdresseDepart(){
        return this.adresseDepart;
    }
    getAdresseArrivee(){
        return this.adresseArrivee;
    }
    getDateDepart(){
        return this.dateDepart;
    }
    getDateArrivee(){
        return this.dateArrivee;
    }
    getOrganisateur(){
        return this.organisateur;
    }
    getPassager(){
        return this.passager;
    }
    getVehicule(){
        return this.vehicule;
    }
    //setters
    setId(id: number){
        this.id = id;
    }
    setAdresseDepart(adresseDepart: adresse){
        this.adresseDepart = adresseDepart;
    }
    setAdresseArrivee(adresseArrivee: adresse){
        this.adresseArrivee = adresseArrivee;
    }
    setDateDepart(dateDepart: Date){
        this.dateDepart = dateDepart;
    }
    setDateArrivee(dateArrivee: Date){
        this.dateArrivee =  dateArrivee;
    }
    setOrganisateur(organisateur: employe){
        this.organisateur = organisateur;
    }
    setPassager(passager: employe[]){
        this.passager = passager;
    }
    setVehicule(vehicule: vehicule){
        this.vehicule = vehicule;
    }
}