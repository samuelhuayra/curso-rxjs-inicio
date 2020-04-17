import { of } from "rxjs";

//const obs$ = of(1,2,3,4,5,6)
//const obs$ = of<number>(...[1,2,3,4,5,6],7,8) //Spred para separar array
const obs$ = of<any>([1,2],{a:1,b:2},()=>{},true,Promise.resolve(true)) //Spred para separar array
console.log('Inicio del Obs$');
obs$.subscribe(
    next=> console.log('next: ',next),
    null,
    ()=>console.log('terminamos la secuencia')
)
console.log('Fin del Obs$');
/** OF es sincrono
 * Inicio del Obs$
 * index.ts:6 next:  1
 * index.ts:6 next:  2
 * index.ts:6 next:  3
 * index.ts:6 next:  4
 * index.ts:6 next:  5
 * index.ts:6 next:  6
 * index.ts:6 terminamos la secuencia
 * index.ts:7 Fin del Obs$
 **/