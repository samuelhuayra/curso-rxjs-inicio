import { fromEvent } from "rxjs";
import { tap, auditTime, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document,'click')

click$.pipe(
    map(({x})=>x),
    tap(val=>console.log('Tap:',val)),
    //Devuelve el ultimo valor del ultimo valor
    //pero contando el tiempo del valor anterior
    auditTime(2000)
)
.subscribe(console.log)

