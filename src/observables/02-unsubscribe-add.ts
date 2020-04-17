import { Observable, Subscriber, Observer } from "rxjs";

const observer:Observer<any>={
    next: value=> console.log('next: ',value),
    error: error=> console.warn('error: ',error),
    complete: ()=>console.log('completed')
}

const interval$ = new Observable<number> (subs=>{
    //Contador 1 2 3 4 5...
    let val:number = 0
    const interval = setInterval(()=>{
        val++;
        subs.next(val)
        console.log(val);
    },1000)

    setTimeout(()=>{
        subs.complete()
    },2500)

    return ()=>{
        clearInterval(interval)
        console.log('Intervalo destruido');
    }
})
const subs1 = interval$.subscribe(observer)
const subs2 = interval$.subscribe(observer)
const subs3 = interval$.subscribe(observer)

//Observables en cadena
subs1.add(subs2)
    .add(subs3)

setTimeout(()=>{
    //terminar observables en cadena
    subs1.unsubscribe()
    /* subs2.unsubscribe()
    subs3.unsubscribe() */
    console.log('completado timeout');
},6000)