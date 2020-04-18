import { interval, from } from "rxjs";
import { take, scan, tap, reduce, map } from "rxjs/operators";


const numbers = [1, 2, 3, 4, 5]

// const totalAcumulador = (acumulador:number,valorActual:number)=>{
//     return acumulador + valorActual;
// }
const totalAcumulador = (acumulador, valorActual) => acumulador + valorActual

//Reduce Solo retorna 1 el ultimo
from(numbers).pipe(
    reduce(totalAcumulador, 0)
)
    .subscribe(val => console.log('reduce:', val))

//Scan retorna cada sumatoria
from(numbers).pipe(
    scan(totalAcumulador, 0)
)
    .subscribe(val => console.log('scan:', val))

//Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}
const user: Usuario[] = [
    {
        id: 'fher',
        autenticado: false,
        token: null
    },
    {
        id: 'fher',
        autenticado: true,
        token: 'ADB'
    },
    {
        id: 'fher',
        autenticado: true,
        token: 'ADB123'
    }
]

const state$ = from(user).pipe(
    scan<Usuario>((acc,cur)=>{
        //operadores spret
        return{...acc,...cur}
    },{edad:33})
)

const id$ = state$.pipe(
    map((state=>state.id))
)
id$.subscribe(console.log)