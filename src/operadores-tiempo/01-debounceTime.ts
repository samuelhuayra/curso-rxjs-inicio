import { fromEvent } from "rxjs";
import { debounceTime, pluck, distinctUntilChanged } from "rxjs/operators";


const click$ = fromEvent(document,'click')

click$.pipe(
    //Ultimo evento despues de 3 seg
    debounceTime(3000)
)//.subscribe(console.log)

const input = document.createElement('input')
document.querySelector('body').append(input)

const input$ = fromEvent(input,'keyup')

input$.pipe(
    //Esperar a que descanse
    debounceTime(1000),
    pluck('target','value'),
    //Para que no busque el mismo valor
    distinctUntilChanged()
)
.subscribe(console.log)