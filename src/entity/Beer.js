export class Beer {

    constructor(type, name){
        this._type = type;
        this._name = name;
    }

    set type (type){
        this._type = type;
    }

    get type(){
        return this._type;
    }

    set name (name){
        this._name = name;
    }

    get name(){
        return this._name;
    }    
}