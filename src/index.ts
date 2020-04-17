import { Observable, Subscriber, Observer } from "rxjs";

const observer:Observer<any>={
    next: value=> console.log('next: ',value),
    error: error=> console.warn('error: ',error),
    complete: ()=>console.log('completed')
}

const interval$ = new Observable<number> (subs=>{
    let val:number = 0
    const interval = setInterval(()=>{
        val++;
        subs.next(val)
        console.log(val);
    },1000)
    return ()=>{
        clearInterval(interval)
        console.log('Intervalo destruido');
    }
})
const subs1 = interval$.subscribe()
const subs2 = interval$.subscribe()
const subs3 = interval$.subscribe()
setTimeout(()=>{
subs1.unsubscribe()
subs2.unsubscribe()
subs3.unsubscribe()
console.log('completado timeout');
},3000)