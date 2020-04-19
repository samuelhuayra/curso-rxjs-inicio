import { fromEvent, asyncScheduler } from "rxjs";
import { debounceTime, pluck, distinctUntilChanged, throttleTime } from "rxjs/operators";


const click$ = fromEvent(document,'click')

click$.pipe(
    //retorna el primer valor y despues de 3 seg retorna otro valor
    throttleTime(3000)
).subscribe(console.log)

const input = document.createElement('input')
document.querySelector('body').append(input)

const input$ = fromEvent(input,'keyup')

input$.pipe(
    //retorna el primer valor y despues de 1 seg retorna otro valor
    throttleTime(1000,asyncScheduler,{
        leading:true, //primer valor
        trailing:true //Ultimo valor
    }),
    pluck('target','value'),
    //Para que no busque el mismo valor
    distinctUntilChanged()
)
.subscribe(console.log)