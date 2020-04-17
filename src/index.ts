import { Observable, Subscriber } from "rxjs";

//const obs$ = Observable.create()
const obs$ = new Observable<String>( subs => {
    subs.next('Hola')
    subs.next('Mundo')

    subs.next('Hola')
    subs.next('Mundo')

    subs.complete()
    
    subs.next('Hola')
    subs.next('Mundo')
});

obs$.subscribe(console.log)
