import { of, interval, fromEvent } from "rxjs";
import { mergeMap, take, map, takeUntil } from "rxjs/operators";

const letras$ = of('a','b','c')

letras$.pipe(
    //Es como obtener el resultado de los observables [subcribe(val)]
    //[se subscribe a todos los observable y todos siguen activos]
    mergeMap( (letra)=>interval(1000).pipe(
        map(i => letra+i),
        take(3)
    ))
)
// .subscribe({
//     next:val=> console.log('next: ',val),
//     complete:()=>console.log('completed')
// })

const mouseDown$ = fromEvent(document,'mousedown')
const mouseUp$ = fromEvent(document,'mouseup')
const interval$ = interval()

mouseDown$.pipe(
    mergeMap(()=>
    //Obtenemos el producto de la subscripcion del obs
    interval$.pipe(
        takeUntil(mouseUp$)
    ))
)
.subscribe(console.log)
