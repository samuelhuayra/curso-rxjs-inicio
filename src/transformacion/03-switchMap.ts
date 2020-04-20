import { fromEvent, Observable, interval } from "rxjs"
import { debounceTime, map, pluck, mergeAll, mergeMap, switchMap } from "rxjs/operators"
import { ajax } from "rxjs/ajax"
import { GithubUser } from "./interfaces/github-user.interface"
import { GithubUsers } from "./interfaces/github-users.interface"

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
    
    mergeMap<string,Observable<GithubUsers>>(texto=>
        ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
    ),
    pluck<GithubUsers,GithubUser[]>('items')
)//.subscribe(mostrarUsuarios)

const url = 'https://httpbin.org/delay/1?arg='

input$.pipe(
    pluck('target','value'),
    //[se subscribe a 1 observable y solo el ultimo sigue activo]
    //Y cancela todas las anteriores incluso la peticion ajax
    switchMap(text=> ajax.getJSON(url+text))
).subscribe(console.log)