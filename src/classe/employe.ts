import { adresse} from './adresse';

export class employe implements employe{
//attributs
id: number | undefined;
nom: string | undefined;
prenom: string | undefined;
genre: string | undefined;
naissance: Date | undefined;
adresse: adresse | undefined;
statut: boolean | undefined;
tel: string | undefined;
mail: string | undefined;
password: string | undefined
//constructeurs
constructor();
constructor(id: number, nom: string, prenom: string,genre: string,naissance: Date,adresse: adresse, statut: boolean,tel: string,mail: string, password: string);
constructor(id?: number, nom?: string, prenom?: string,genre?: string,naissance?: Date,adresse?: adresse, statut?: boolean,tel?: string,mail?: string, password?: string){
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.genre = genre;
    this.naissance = naissance;
    this.adresse = adresse;
    this.statut = statut;
    this.tel = tel;
    this.mail = mail;
    this.password = password
}
//methode
toString(){
    return ` ${this.id} ${this.nom} ${this.prenom} ${this.genre} ${this.naissance} ${this.adresse} ${this.statut} ${this.tel} ${this.mail} ${this.password}` 
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
getGenre(){
    return this.genre;
}
getNaissance(){
    return this.naissance;
}
getAdresse(){
    return this.adresse;
}
getStatut(){
    return this.statut;
}
getTel(){
    return this.tel;
}
getMail(){
    return this.mail;
}
getPassword(){
    return this.password;
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
setGenre(genre: string){
    this.genre = genre;
}
setNaissance(naissance: Date){
    this.naissance = naissance;
}
setAdresse(adresse: adresse){
    this.adresse = adresse;
}
setStatut(statut: boolean){
    this.statut = statut;
}
setTel(tel: string){
    this.tel = tel;
}
setMail(mail: string){
    this.mail = mail;
}
setPassword(password: string){
    this.password = password;
}
}