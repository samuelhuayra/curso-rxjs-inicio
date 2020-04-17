import { asyncScheduler } from "rxjs";

/* setTimeout(() => {}, 3000);
setInterval(() => {}, 3000); */

const saludar =()=> console.log('Hola Mundo');
const saludar2 =({name,apellido})=> console.log(`Hola Mundo ${name} ${apellido}`);

//Timeout
//asyncScheduler.schedule(saludar2,2000,{name:'Samuel',apellido:'Huayra'})

//Interval
const subs = asyncScheduler.schedule(function(state){
    console.log('state',state);

    this.schedule(state+1,1000)
},1000,0)

asyncScheduler.schedule(()=>{subs.unsubscribe()},6000)
