import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1'

// ajax.post(url,
//     //Body
//     {
//         id: 1,
//         name: 'Samuel'
//     }, 
//     //Header
//     {
//         'mi-Token': 'ABC123'
//     }
// ).subscribe(console.log)

// ajax.put(url,
//     //Body
//     {
//         id: 1,
//         name: 'Samuel'
//     }, 
//     //Header
//     {
//         'mi-Token': 'ABC123'
//     }
// ).subscribe(console.log)

//otra manera
ajax({
    url,
    method:'POST',
    //method:'PUT',
    //method:'DELETE',
    headers:{
        'mi-Token': 'ABC123'
    },
    body:{
        id: 1,
        name: 'Samuel'
    }
}).subscribe(console.log)