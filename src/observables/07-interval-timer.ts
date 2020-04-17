import { interval,timer } from "rxjs";

const observer = {
    next : (val:any) => console.log('next: ',val),
    complete: ()=> console.log('Complete')
}

const today = new Date();
today.setSeconds(today.getSeconds()+5)

const interval$ = interval(1000)

//const timer$ = interval(2000)
//const timer$ = timer(2000,1000) //interval despues de 2 seg
const timer$ = timer(today)

console.log('Inicio');
//interval$.subscribe(observer)
timer$.subscribe(observer)
console.log('Fin');