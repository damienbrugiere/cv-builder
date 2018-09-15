import { Stat } from "./stat";

export class QualiteProfessionnelle {
    private _title:string;
    public stats:Array<Stat>;

    constructor(title:string,stats:Array<Stat>){
        this._title=title;
        this.stats = stats;
    }

    public get title():string{return this._title;}
}
