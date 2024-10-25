export class langueCourante implements langueCourante{
//attributs
id: number | undefined;
nom: string | undefined;
//constructeur
constructor();//sans arguments
constructor(id: number, nom: string);//avec arguments
constructor(id?: number, nom?:string){//valeurs par defauts
    this.id = id || 0;
    this.nom = nom || "";
}
//fonctions membres
toString(){
    return `langue: ${this.nom}, ID: ${this.id}`;
}
//getters
getNom(){
    return this.nom;
}
getId(){
    return this.id;
}
//setters
setNom(nom: string){
    this.nom = nom;
}
setId(id: number){
    this.id = id;
}

}