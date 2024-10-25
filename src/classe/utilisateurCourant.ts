import { adresse } from './adresse';

export class utilisateurCourant implements utilisateurCourant{
    //attributs
    id: number | undefined;
    nom: string | undefined;
    prenom: string | undefined;
    mail: string | undefined;
    password: string | undefined;
    statut: boolean | undefined;
    //constructeur
    constructor();
    constructor(id: number, nom: string, prenom: string, mail:string, password: string, statut: boolean);
    constructor(id?: number, nom?: string, prenom?: string, mail?:string, password?: string, statut?: boolean){
        this.id = id ||  0;
        this.nom = nom || "";
        this.mail = mail || "";
        this.password = password || "";
        this.statut = statut || false;
    }
    //methode
    toString(){
        return `Id: ${this.id} ${this.nom} ${this.prenom} ${this.mail} ${this.password}`;
    }
    //getters
    getId(){
        return this.id;
    }
    getNom(){
        return this.nom;
    }
    getPrenom(){
        return this.prenom;
    }
    getMail(){
        return this.mail;
    }
    getPassword(){
        return this.password;
    }
    getStatut(){
        return this.statut;
    }
    //setters
    setId(id: number){
        this.id = id;
    }
    setNom(nom: string){
        this.nom = nom;
    }
    setPrenom(prenom: string){
        this.prenom = prenom;
    }
    setMail(mail: string){
        this.mail = mail;
    }
    setPassword(password: string){
        this.password = password;
    }
    setStatut(statut: boolean){
        this.statut = statut;
    }
}