import { interval, fromEvent } from "rxjs";
import { take, switchMap, concatMap, exhaustMap } from "rxjs/operators";


const interval$ = interval(500).pipe(take(3))
const click$ = fromEvent(document,'click')

click$.pipe(
    //concatMap(()=> interval$)
    //Solo acepta 1 subscripcion activa,si hay otra las ignora
    //una vez que este complete recien aceptara una nueva subscripcion
    exhaustMap(()=> interval$)
).subscribe(console.log)