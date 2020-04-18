import { range } from "rxjs";
import { tap, map } from "rxjs/operators";


const numeros$ = range(1,5)

numeros$.pipe(
    tap(x=> {
        console.log('antes',x)
        return 100;
    }),
    map(val => val*10),
    tap({
        next: valor=>console.log('despues',valor),
        complete:()=>console.log('Se termino todo') //Ojo se ejecuta cuando termina el map
    }),
)
.subscribe(val=>console.log('sub',val))