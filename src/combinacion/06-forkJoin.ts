import { of, interval, forkJoin } from "rxjs";
import { take, delay } from "rxjs/operators";


const numeros$  = of(1,2,3,4)
const interval$ = interval(1000).pipe(take(3))
const letras$   = of('a','c','c').pipe(delay(3500))

// forkJoin(numeros$,interval$,letras$).subscribe(console.log)

// forkJoin(numeros$,interval$,letras$)
// .subscribe(resp=>{
//     console.log('numeros',resp[0]);
//     console.log('intervalo',resp[1]);
//     console.log('letras',resp[2]);
// })

// forkJoin({numeros$,interval$,letras$}) //Mandar como objeto
// .subscribe(resp=>{
//     //{numeros$: 4, interval$: 2, letras$: "c"}
//     console.log(resp);
// })

forkJoin({num: numeros$,
    int: interval$,
    let: letras$}) //Mandar como objeto
.subscribe(resp=>{
    //{num: 4, int: 2, let: "c"}
    console.log(resp);
})