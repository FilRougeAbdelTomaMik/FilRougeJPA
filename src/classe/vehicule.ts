export class vehicule implements vehicule{
    //Attributs
    id: number | undefined;
    marque: string | undefined;
    model: string | undefined;
    immatriculation: string | undefined;
    categorie: string | undefined;
    urlFoto: string | undefined;
    motorisation: string | undefined;
    co2: number | undefined;
    places: number| undefined;
    //constructeur
    constructor();
    constructor(id: number,marque: string, model: string,immatriculation: string,categorie: string,urlFoto: string,motorisation: string,co2: number,places: number);
    constructor(id?: number,marque?: string, model?: string,immatriculation?: string,categorie?: string,urlFoto?: string,motorisation?: string,co2?: number,places?: number){
        this.id = id;
        this.marque = marque;
        this.model = model;
        this.immatriculation = immatriculation;
        this.categorie = categorie;
        this.urlFoto  = urlFoto;
        this.motorisation = motorisation;
        this.co2 = co2;
        this.places = places;
    }
    //methode
    toString(){
        return ` ${this.id} ${this.marque} ${this.model} ${this.immatriculation} ${this.categorie} ${this.urlFoto} ${this.motorisation} ${this.co2} ${this.places}`;
    }
    //geters
    getId(){
        return this.id;
    }
    getMarque(){
        return this.marque;
    }
    getModel(){
        return this.model;
    }
    getImmatriculation(){
        return this.immatriculation;
    }
    getCategorie(){
        return this.categorie;
    }
    getUrlFoto(){
        return this.urlFoto;
    }
    getMotorisation(){
        return this.motorisation;
    }
    getCo2(){
        return this.co2;
    }
    getPlaces(){
        return this.places;
    }
    //setters
    setId(id: number){
        this.id = id;
    }
    setMarque(marque: string){
        this.marque = marque;
    }
    setModel(model: string){
        this.model = model;
    }
    setImmatriculation(immatriculation: string){
        this.immatriculation = immatriculation;
    }
    setCategorie(categorie: string){
        this.categorie = categorie;
    }
    setUrlFoto(urlFoto: string){
        this.urlFoto = urlFoto;
    }
    setMotorisation(motorisation: string){
        this.motorisation =  motorisation;
    }
    setCo2(co2: number){
        this.co2 = co2;
    }
    setPlaces(places: number){
        this.places = places;
    }
}