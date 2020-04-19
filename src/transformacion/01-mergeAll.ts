import { fromEvent, Observable, interval } from "rxjs"
import { debounceTime, map, pluck, mergeAll } from "rxjs/operators"
import { ajax } from "rxjs/ajax"
import { GithubUser } from "../interfaces/github-user.interface"
import { GithubUsers } from "../interfaces/github-users.interface"

const body = document.querySelector('body')
const textInput = document.createElement('input')
const orderList = document.createElement('ol')

body.append(textInput,orderList)

//helpers
const mostrarUsuarios = (usuarios:GithubUser[])=>{
    orderList.innerHTML=''
    for (const usuario of usuarios) {
        const li = document.createElement('li')
        const img = document.createElement('img')
        img.src = usuario.avatar_url

        const anchor = document.createElement('a')
        anchor.href = usuario.html_url
        anchor.text = 'ver página'
        anchor.target = '_blank'

        li.append(img)
        li.append(usuario.login+' ')
        li.append(anchor)

        orderList.append(li)
    }
}

//Streams
const input$ = fromEvent<KeyboardEvent>(textInput,'keyup')

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent,string>('target','value'),
    //Ej: map devuelve observables 
    map<string,Observable<GithubUsers>>(texto=>
        ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
    ),
    //Entonces mergeAll va a suntar todos los observables
    mergeAll<GithubUsers>(), //???
    pluck<GithubUsers,GithubUser[]>('items')
).subscribe(mostrarUsuarios)

//Crear interfaces de un json
//https://app.quicktype.io/

//ejemplo de RxJS
const clicks = fromEvent(document, 'click');
//map devuelve observables
const higherOrder = clicks.pipe(map((ev) => interval(1000)));
//Merge all va a unir esos observables en 1
const firstOrder = higherOrder.pipe(mergeAll());

firstOrder.subscribe(x => console.log(x));