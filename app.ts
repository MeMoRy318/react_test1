// 1) створити інтерфейс на основі цього объекта:

// {
//     "mission_name": "Starlink-15 (v1.0)",
//     "launch_date_local": "2020-10-24T11:31:00-04:00",
//     "launch_site": {
//     "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
// },
//     "links": {
//     "article_link": null,
//         "video_link": "https://youtu/J442-ti-Dhg"
// },
//     "rocket": {
//     "rocket_name": "Falcon 9",
//         "first_stage": {
//         "cores": [
//             {
//                 "flight": 7,
//                 "core": {
//                     "reuse_count": 6,
//                     "status": "unknown"
//                 }
//             }
//         ]
//     },
//     "second_stage": {
//         "payloads": [
//             {
//                 "payload_type": "Satellite",
//                 "payload_mass_kg": 15400,
//                 "payload_mass_lbs": 33951.2
//             }
//         ]
//     }
// }
// }



interface Imission {
    mission_name: string,
    launch_date_local: string,
    launch_site:{
        site_name_long: string,
    },
    links: {
        article_link: null,
        video_link: string
    },
    rocket: {
        rocket_name: string,
        first_stage: {
            cores: [
                { flight:number,
                    core: {
                        reuse_count: string
                        status: boolean
                    }
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type:string,
                    payload_mass_kg: number,
                    payload_mass_lbs: number
                }
            ]
        }
    }
}

const mision:Imission = {
    mission_name: "string",
    launch_date_local: "string",
    launch_site:{
        site_name_long: "string",
    },
    links: {
        article_link: null,
        video_link: "string"
    },
    rocket: {
        rocket_name: "string",
        first_stage: {
            cores: [
                { flight:1,
                    core: {
                        reuse_count: "string",
                        status: true
                    }
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type:'string',
                    payload_mass_kg: 1,
                    payload_mass_lbs: 1
                }
            ]
        }
    }
}


interface Ilaunch_site {
    site_name_long: string,
}

interface Ilinks {
    article_link: null,
    video_link: string
}

interface Icore {
    reuse_count: string
    status: boolean
}

interface Iflight {
    flight:number,
    core:Icore
}

interface Ifirst_stage {
    cores:Iflight[]
}

interface Ipayloads {
    payload_type:string,
    payload_mass_kg: number,
    payload_mass_lbs: number
}

interface Isecond_stage {
    payloads:Ipayloads[]
}

interface Irocket {
    rocket_name:string
    first_stage:Ifirst_stage
    second_stage:Isecond_stage
}

interface Imission1 {
    mission_name: string,
    launch_date_local: string,
    launch_site:Ilaunch_site,
    links: Ilinks,
    rocket:Irocket

}


const mission1:Imission1 = {  mission_name: "string",
    launch_date_local: "string",
    launch_site:{
        site_name_long: "string",
    },
    links: {
        article_link: null,
        video_link: "string"
    },
    rocket: {
        rocket_name: "string",
        first_stage: {
            cores: [
                { flight:1,
                    core: {
                        reuse_count: "string",
                        status: true
                    }
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type:'string',
                    payload_mass_kg: 1,
                    payload_mass_lbs: 1
                }
            ]
        }
    }}

// 2) протипізувати функції:

// interface Iuser {
//     name:string,
//     age:number,
//     gender:string
// }
//
// interface Ifunction extends Iuser{
//     sum: (a: number, b: number) => number,
//     showSum:(a:number,b:number)=>void,
//     incAge?:(inc:number)=>number,
//     incAge2?:()=>number,
//
// }
//
// const asd:Ifunction = {
//     name:"string",
//     age:19,
//     gender:"string",
//     sum:(a, b)=>{
//         return a+b
//     },
//     showSum:(a, b)=>{
//         console.log(a+b)
//     },
//     incAge:( inc)=>{
//         return this.age + inc
//     }
//
// }
// console.log(asd.incAge(21));
// asd.showSum(2,2)
// console.log(asd.sum(2, 2));
//
// const max:Iuser ={
//     name:"string",
//     age:12,
//     gender:"string"
// }
//
// class Rectangle implements Iuser,Ifunction {
//     age: number;
//     gender: string;
//     name: string;
//
//     incAge2():number{
//         return this.age
//     }
//
//     showSum(a: number, b: number): void {
//     }
//
//     sum(a: number, b: number): number {
//         return 0;
//     }
//
// }

interface Iuserinterface {
    name:String,
    age:number,
    gender:string
}

const user:Iuserinterface = {
    name:"string",
    age:18,
    gender:"string"
}

const sum = (a:number,b:number):number=>{
    return a+b
}
const showSum = (a:number,b:number):void =>{
    console.log(a + b);
}

const incAge = (user:Iuserinterface, inc:number):object=>{
    user.age+=inc
    return user
}

console.log(sum(11,11))
showSum(21,10)
console.log(incAge(user, 12));

