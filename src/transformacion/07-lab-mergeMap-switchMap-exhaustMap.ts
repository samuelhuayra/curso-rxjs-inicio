import { fromEvent, of } from "rxjs"
import { tap, pluck, map, mergeMap, catchError, switchMap, exhaustMap } from "rxjs/operators"
import { ajax } from "rxjs/ajax"

//Helper
const requestHttpLogin = (userPass) => 
    ajax.post('https://reqres.in/api/login?delay=1',userPass).pipe(
        pluck('response','token'),
        catchError(err=>{console.warn('AJAX error'); return of('no token')})
    )


// creando un from
const from = document.createElement('form')
const inputEmail = document.createElement('input')
const inputPass = document.createElement('input')
const submitBtn = document.createElement('button')

//Conf
inputEmail.type='email'
inputEmail.placeholder = 'Email'
inputEmail.value = 'eve.holt@reqres.in'

inputPass.type='password'
inputPass.placeholder = 'Password'
inputPass.value = 'cityslicka'

submitBtn.innerHTML='Ingresar'

from.append(inputEmail,inputPass,submitBtn)
document.querySelector('body').append(from)

//Streams Observables
const submitForm$ = fromEvent(from,'submit')
    .pipe(
        tap(ev => ev.preventDefault()//Cancela el refresh de la pagina al enviar el form
        ),
        map(ev =>({
            email:ev.target[0].value,
            password:ev.target[1].value
        })),
        //mergeMap(requestHttpLogin) //Varios observables activos
        //switchMap(requestHttpLogin) //El ultimo es activo y los anteriores se cancela
        exhaustMap(requestHttpLogin) //Expera a que se complete el anterior resien ejecutara el otro
        //mergeMap(userPass=>  requestHttpLogin(userPass))
    )

submitForm$.subscribe(token=>{
    console.log(token);
})


//Request con login ej
//https://reqres.in/
/**
 {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
 */