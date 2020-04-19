import { ajax, AjaxError } from "rxjs/ajax";
import { map, pluck, catchError } from "rxjs/operators";
import { of } from "rxjs";

const url = 'http://api.github.com/users?per_page=5'

const manejaErrores = (response:Response)=>{
    if(!response.ok){
        throw new Error(response.statusText)
    }
    return response
}

const atraparError = (err:AjaxError)=>{
    console.warn('error en:',err.message);
    return of([])
}
/**
 * Usando Fetch
 */

// const fetchPromesa = fetch(url)

// fetchPromesa
//     .then((res)=>
//         res.json() //.then(console.log) Este then lo podemos colocar abajo
//     )
//     .then(data=>console.log('data',data))//otra manera de colocar then pero no tiene que tener {} 
//     .catch(err=>console.warn('error en usuarios',err))

// fetchPromesa
//     .then(manejaErrores)
//     .then((res)=>res.json())
//     .then(data=>console.log('data',data))
//     .catch(err=>console.warn('error en usuarios',err))

/**
 * Usando Ajax de RxJs
 */

 ajax(url).pipe(
     pluck('response'),
     //catchError(err=>{console.warn('error en: ',err); return of([])})
     catchError(atraparError)
 )
 .subscribe(users=>console.log('users:',users))
