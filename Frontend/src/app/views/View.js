export default class View{
    constructor(element){
        this._element = element
    }

    _template(){
        throw new Error('Template deve ser implementado nas classes filhas.')
    }
}