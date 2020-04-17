import { fromEvent, Observer } from "rxjs";

/**
 * Eventos de DOM
 * 
 */
const srcl1$ = fromEvent<MouseEvent>(document,'click')
const srcl2$ = fromEvent<KeyboardEvent>(document,'keyup')

const observer:Observer<any> = {
    next : (val)=> console.log('next',val),
    error: (err)=> console.warn('err',err),
    complete: ()=> console.info('completed')
}

/* srcl1$.subscribe((ev)=>{
    console.log(ev.x,ev.y) 
}) */
srcl1$.subscribe(({x,y})=>{
    console.log(x,y) 
})

srcl2$.subscribe((event)=>{
    console.log(event.key);
})