export class adresse implements adresse{
    //attributs
    id: number;
    numero: number;
    rue: string;
    codePostal: number;
    ville: string;
    //constructeur
    constructor();//sans arguments
    constructor(id:number, numero: number,rue:string,codePostal: number, ville: string)
    constructor(id?:number, numero?: number, rue?:string, codePostal?: number, ville?: string){
        this.id = id || 0;
        this.numero = numero || 0;
        this.rue = rue || "";
        this.codePostal = codePostal || 0;
        this.ville = ville || "";
    }
    //methode
    toString(){
        return `Id: ${this.id}: ${this.numero} ${this.rue} ${this.codePostal} ${this.ville}`;
    }
    //getters
    getId(){
        return this.id;
    }
    getNumero(){
        return this.numero;
    }
    getRue(){
        return this.rue;
    }
    getCodePostal(){
        return this.codePostal;
    }
    getVille(){
        return this.ville;
    }
    //setters
    setId(id: number){
        this.id = id;
    }
    setnumero(numero: number){
        this.id = numero;
    }
    setRue(rue: string){
        this.rue = rue;
    }
    setCodePostal(codePostal: number){
        this.id = codePostal;
    }
    setVille(ville: string){
        this.ville = ville;
    }
}