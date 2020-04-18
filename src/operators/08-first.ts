import { fromEvent } from "rxjs";
import { take, first, tap, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document,'click')

click$.pipe(
    // take(1)
    tap<MouseEvent>(console.log),
    //map(event=>({clientY :event.clientY, clientX: event.clientX}))
    map(({clientX,clientY})=>({clientX,clientY})),
    // tap(()=>console.log('tap')),
    first<any>(event=>event.clientY>=150)
)
.subscribe({
    next:value=>console.log('next: ',value),
    complete:()=>console.log('complete')
})