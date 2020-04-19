import { interval, fromEvent } from "rxjs";
import { sample } from "rxjs/operators";

const interval$ = interval(1000)
const click$ = fromEvent(document,'click')

interval$.pipe(
    //Devuelve el ultimo valor del primer obs
    //cuando el segundo obs envia un valor
    sample(click$)
)
.subscribe(console.log)