import { Observable, Subscriber, Observer, Subject } from "rxjs";

//Resp
const observer:Observer<any>={
    next: value=> console.log('next: ',value),
    error: error=> console.warn('error: ',error),
    complete: ()=>console.log('completed')
}

//Observer
const interval$ = new Observable<number> (subs=>{
    //Intervalos no se destruyen si no se limpian
    const interval = setInterval(()=>{
        subs.next(Math.random())
    },1000)
    //Return solo se ejecuta en el unsubscribe
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
//Observer convert to Subject [New Instance] 2
const subscription = interval$.subscribe(subject$)
//Subscripciones al subject
const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)

setTimeout(() => {
    //Complete Subject [Metodos del nuevo Subject [Obs]]
    subject$.next(10)
    subject$.complete()

    //Observer Unsubcription
    subscription.unsubscribe()
}, 3500);