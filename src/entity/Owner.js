export class Owner {

    constructor(firstName, lastName, mail){
        this._firstName = firstName;
        this._lastName = lastName;
        this._mail = mail;
    }

    set firstName (firstName){
        this._firstName = firstName;
    }

    get firstName(){
        return this._firstName;
    }

    set lastName (lastName){
        this._lastName = lastName;
    }

    get lastName(){
        return this._lastName;
    }

    set mail (mail){
        this._mail = mail;
    }

    get mail(){
        return this._mail;
    }
}