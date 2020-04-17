import { Observable, Subscriber, Observer } from "rxjs";

//Method 1
const observer:Observer<any>={
    next: value=> console.log('Siguiente [next]: ',value),
    error: error=> console.warn('Error [obs]: ',error),
    complete: ()=>console.log('Complete [obs]')
}

//Method 2
//const obs$ = Observable.create()
const obs$ = new Observable<String>( subs => {
    subs.next('Hola')
    subs.next('Mundo')

    subs.next('Hola')
    subs.next('Mundo')

    //forzar error
    /* const a = undefined
    a.nombre = 'Samuel' */


    subs.complete()
    
    subs.next('Hola')
    subs.next('Mundo')
});

//Method 1
obs$.subscribe(observer);

//Method 2
/* obs$.subscribe(
    valor=> console.log('next: ',valor),
    error=> console.warn('error: ',error),
    ()=>console.log('Complete')
) */
