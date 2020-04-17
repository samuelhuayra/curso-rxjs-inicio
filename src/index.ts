import { Observable, Subscriber, Observer, Subject } from "rxjs";

const observer:Observer<any>={
    next: value=> console.log('next: ',value),
    error: error=> console.warn('error: ',error),
    complete: ()=>console.log('completed')
}

const interval$ = new Observable<number> (subs=>{
    const interval = setInterval(()=>{
        subs.next(Math.random())
    },5000)
    return ()=>{
        clearInterval(interval)
        console.log('Intervalo destruido');
    }
})

//Son diferentes por que el observable ejecuta 2 veces
/* const subs1 = interval$.subscribe(rnd => console.log('subs1',rnd))
const subs2 = interval$.subscribe(rnd => console.log('subs2',rnd)) */

/**
 *  ==========SUBJECT==========
 * 1 Casteo multiple
 * 2 Tambien es un observer
 * 3 Next error y complete
 * */
const subject$ = new Subject()
interval$.subscribe(subject$)
const subs1 = subject$.subscribe(rnd => console.log('subs1',rnd))
const subs2 = subject$.subscribe(rnd => console.log('subs2',rnd))

