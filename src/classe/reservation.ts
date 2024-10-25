export class reservation implements reservation{
//attributs
id: number | undefined;
dateDebut: Date | undefined;
dateFin: Date | undefined;
immatriculation: string | undefined;
marque: string | undefined;
model: string | undefined;
//constructeur
constructor();
constructor(id: number,dateDebut: Date,dateFin: Date, immatriculation: string,marque: string, model: string);
constructor(id?: number,dateDebut?: Date,dateFin?: Date, immatriculation?: string,marque?: string, model?: string){
    this.id = id;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.immatriculation = immatriculation;
    this.marque = marque;
    this.model = model;
}
//methode
toString(){
    return ` ${this.id} ${this.dateDebut} ${this.dateFin} ${this.immatriculation} ${this.marque} ${this.model}`;
}
//getter
getId(){
    return this.id;
}
getDateDebut(){
    return this.dateDebut;
}
getDateFin(){
    return this.dateFin;
}
getImmatriculation(){
    return this.immatriculation;
}
getMarque(){
    return this.marque;
}
getModel(){
    return this.model;
}
//setter
setId(id: number){
    this.id = id;
}
setDateDebut(dateDebut: Date){
    this.dateDebut = dateDebut;
}
setDateFin(dateFin: Date){
    this.dateFin = dateFin;
}
setImmatriculation(immatriculation: string){
    this.immatriculation = immatriculation;
}
setMarque(marque: string){
    this.marque = marque;
}
setModel(model: string){
    this.model = model;
}
}