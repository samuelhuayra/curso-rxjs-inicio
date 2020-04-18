import { interval, fromEvent } from "rxjs";
import { takeUntil, skip, tap } from "rxjs/operators";


const button = document.createElement('button')
button.innerHTML='Detener Timer'

document.querySelector('body').append(button)


const counter$ = interval(1000)
//const clickBtn$ = fromEvent(button,'click')
const clickBtn$ = fromEvent(button,'click').pipe(
    tap(()=>console.log('tap antes de skip')),
    skip(1),
    tap(()=>console.log('tap despues de skip')),
)

counter$.pipe(
    
    //TakeUntil: Hasta que otro observable emita su primer valor
    takeUntil(clickBtn$)
)
.subscribe({
    next:value=>console.log('next: ',value),
    complete:()=>console.log('complete')
})
