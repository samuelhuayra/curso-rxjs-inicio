import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

//const url = 'http://api.github.com/users?per_page=5'
const url = 'https://httpbin.org/delay/1xxx'


const atraparError = (err:AjaxError)=>{
    console.warn('error en:',err.message);
    return of({
        ok:false,
        usuarios:[]
    })
}

// const obs$ = ajax.getJSON(url).pipe(
//     catchError(atraparError)
// )
// const obs2$ = ajax(url).pipe(
//     catchError(atraparError)
// )

const obs$ = ajax.getJSON(url).pipe(
    catchError(atraparError)
)
const obs2$ = ajax(url).pipe()

obs$.subscribe({
    next: val=> console.log('next:',val),
    error:err=>console.log('error en subs:',err),
    complete:()=>console.log('complete')
})

//obs2$.subscribe(data=>console.log('ajax:',data))