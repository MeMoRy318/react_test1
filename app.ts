//================================================CMD==================================================================

// tsc app.ts Компеляция
// node app.js Запустити js
// npm init
// tsc -v

// ============================================function================================================================
import axios from "axios";
import {usersServices} from "./services/users.services";


//==============================================import==================================================================

const a = (arr:string[])=>{
   return  arr.push("asd")
};
const b = (arr:number[]):number=>{
    return arr.push(21)
};
const c = (a:string,b:string):string|number=>{
    return a + b
};
const d = (a:number , b:number):number|string|boolean=>{
    return a + b
};
const av = (arr:string[]):void => {
    console.log(arr)
};
const bv = (arr:number[],number:number):void =>{
   const x = arr.push(number)
    console.log(x)
};

// =============================================Object=================================================================
const users:{name:string,age:number,status:boolean} = {age:21,name:"vasya",status:true};

interface Iuser {
    name:string,
    age:number,
    status:boolean,
    adres:{
        syty:string,
        haus:number,
    }
}

interface Iadres {
    syty:string,
    hause:number

}

interface Iuser2<t> {
    name:string,
    age:number,
    status:boolean,
    data:t,
    adres:Iadres,
}

const user3:Partial<Iadres>={syty:"asd"}


const user:Iuser = {age:21,name:"vasya",status:true,adres:{syty:"lviv",haus:1}}

const user2:Iuser2<number[]> = {age:21,name:"vasya",data:[1,2,3,4,5],status:true,adres:{hause:1,syty:"lviv"}}

//==============================================Class==================================================================

class Class {

    constructor(private id: number, public name: string, protected age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }


}

const userCllas = new Class(21,"vasya",19)

interface IshapeAction {

    area:()=>number;
    perimeter:()=>number;
    
}

interface Igreeting {
    hello:()=> void;
    
}

class Rectangle implements IshapeAction,Igreeting{
    constructor(private a:number,private b:number) {
    }

    area(): number {
        return this.a*this.b;
    }

    hello(): void {
        console.log("hello")
    }

    perimeter(): number {
        return this.a+this.b;
    }
    
}

const rectangle = new Rectangle(15,15)

console.log(rectangle.area());
console.log(rectangle.hello());
console.log(rectangle.perimeter());

class Tritangle implements IshapeAction{
    constructor(private a:number,private b:number,private c:number) {
    }
    area(): number {
        return this.a*this.b+this.c;
    }

    perimeter(): number {
        return this.a*this.b/this.c;
    }

}

const shapes:IshapeAction[] = [new Tritangle(12,12,10),new Rectangle(12,12) ]
shapes[0].area()
shapes[0].perimeter()
shapes[1].area()
shapes[1].perimeter()

//===========================================axios======================================================================
usersServices.getAll().then(({data}) => console.log(data))
usersServices.getById(2).then(({data})=>data)






