import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";


const numeros$ = of<number|string>(1,1,1,3,3,3,2,2,5,'2',3,1)

numeros$.pipe(
    distinct()
)
.subscribe(console.log)

interface Personaje{
    nombre: string;
}

const personajes: Personaje[] =[
    {nombre:'a'},
    {nombre:'b'},
    {nombre:'c'},
    {nombre:'d'},
    {nombre:'e'},
    {nombre:'a'},
    {nombre:'b'},
    {nombre:'c'},
    {nombre:'d'},
    {nombre:'e'}
]
from(personajes).pipe(
    distinct(p=>p.nombre)
)
.subscribe(console.log)