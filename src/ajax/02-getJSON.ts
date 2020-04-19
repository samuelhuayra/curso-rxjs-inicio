import { ajax } from "rxjs/ajax";

//const url = 'http://api.github.com/users?per_page=5'
const url = 'https://httpbin.org/delay/1'

const obs$ = ajax.getJSON(url,{
    'Content-Type':'application/json',
    'Mi-token':'ABC123'
})

obs$.subscribe(console.log)