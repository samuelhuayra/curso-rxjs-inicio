import { of,from } from "rxjs";

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const observer = {
    next : (val:any) => console.log('next: ',val),
    complete: ()=> console.log('complete')
}
// const src$ = from([1,2,3,4,5])
//const src$ = of(...[1,2,3,4,5])
// const src$ = from('Samuel')
// const src$ = from<Promise<Response>>(fetch('https://api.github.com/users/klerith'))

// src$.subscribe(async (resp)=>{
//     console.log(resp);
//     const dataResp = await resp.json()
//     console.log(dataResp);
// })

// src$.subscribe(observer)

//Funciones generadoras
const myGenerator = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
const myIterator = myGenerator();

// for (let id of myIterator) {
//     console.log('Id',id);
// }

from(myIterator).subscribe(observer)