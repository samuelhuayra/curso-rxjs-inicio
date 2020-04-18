import { of, from } from "rxjs";
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

interface Personaje{
    nombre: string;
}

const personajes: Personaje[] =[
    {nombre:'a'},
    {nombre:'a'},
    {nombre:'b'},
    {nombre:'c'},
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
    distinctUntilKeyChanged('nombre')
)
.subscribe(console.log)