/**
 * Created by samuel on 16-8-4.
 */


export default class Template{



    constructor(){

        this.name = '';
        this.version = '';
        this.github = '';
        this.npm = '';
        this.desc = '';
        this.keys = [];



    }

    get name(){
        return this.name;
    }

    set name(name){
        this.name = name;
    }

    get version(){
        return this.version;
    }

    set version(version){
        this.version = version;
    }




}