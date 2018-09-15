export class Contact {
    private title:string;
    private adress:string;
    private adressCode:string;
    private mail:string;
    private phone:string;
    private age:string;
    private permis:string;
    private city:string;

    constructor(title:string,adress:string,adressCode:string,city:string,mail:string,phone:string,age:number,permis:string){
        this.title = title;
        this.adress=adress;
        this.adressCode=adressCode;
        this.mail=mail;
        this.phone=phone;
        this.age=age+" ans";
        this.permis=permis;
        this.city=city;
    }
}
