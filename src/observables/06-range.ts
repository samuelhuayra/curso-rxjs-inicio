import { range,of, asyncScheduler } from "rxjs";

//const src$ = of(...[1,2,3,4,5])
//const src$ = range(-5,10)  //Sincrono
const src$ = range(-5,10,asyncScheduler) //Asincrono 
console.log('Inicio')
src$.subscribe(console.log)
console.log('Fin')