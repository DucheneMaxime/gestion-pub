export class OpenHours {

    constructor(start, end){
        this._start = start;
        this._end = end;
    }

    set start (start){
        this._start = start;
    }

    get start(){
        return this._start;
    }

    set end (end){
        this._end = end;
    }

    get end(){
        return this._end;
    }
}