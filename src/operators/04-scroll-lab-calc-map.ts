import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non mollis justo. Morbi justo leo, porta ut convallis et, lobortis vitae erat. Ut bibendum, felis ac vestibulum malesuada, risus turpis scelerisque nulla, vitae aliquet orci enim gravida lorem. Aenean ut risus nec risus tristique tincidunt. Pellentesque tempus est nec nibh hendrerit volutpat. Cras a augue sodales, pretium velit sit amet, ultricies nisl. Mauris in tortor vel velit eleifend porttitor ut sit amet tortor. Aenean rhoncus, enim sed semper aliquet, odio nibh vehicula magna, placerat pellentesque dolor turpis quis justo. Sed urna elit, consequat et euismod a, venenatis blandit purus.
<br/><br/>
Maecenas massa mi, fermentum non metus id, ultrices dignissim nisi. Donec vel quam tempus, porta elit sed, accumsan tellus. Pellentesque et tempor turpis, sit amet fringilla ligula. Phasellus at diam vitae orci cursus commodo in a lorem. Etiam ultricies nunc id dictum fermentum. Nam at aliquam libero. Duis sit amet condimentum justo, eu sagittis est. Curabitur bibendum ornare quam, a molestie enim venenatis ut. Curabitur aliquam eleifend elit at luctus. Suspendisse facilisis, quam suscipit vulputate maximus, lorem lacus convallis urna, nec mattis nulla mi a mi. Nam eleifend, dolor et tempor porta, massa odio iaculis orci, et tincidunt odio tortor sollicitudin risus. Nullam finibus non nulla vitae venenatis. Quisque consequat leo ante, sed viverra ligula efficitur vitae.
<br/><br/>
Vivamus nec nibh eget arcu venenatis sodales vitae a tellus. Vivamus vitae porttitor tortor. Donec ac mollis orci. Donec in est sed libero tempor condimentum. Vestibulum et odio placerat, ornare sem ut, volutpat enim. Morbi malesuada vestibulum leo vitae hendrerit. Phasellus consequat commodo risus et varius. Pellentesque ut turpis ac libero sollicitudin congue. Vivamus ante lectus, tincidunt at dui sed, pretium congue nibh. Aliquam mattis odio elementum, tincidunt magna sed, lacinia velit. Donec lobortis diam non iaculis hendrerit. Ut a orci felis. Vivamus volutpat fermentum justo quis euismod. Nulla finibus dignissim risus eget varius. Donec viverra egestas mauris, non aliquam lectus condimentum a. Phasellus sed augue erat.
<br/><br/>
Integer eu dictum lorem, id interdum sem. Aliquam accumsan, nulla quis pretium vehicula, lectus velit blandit leo, sit amet euismod quam elit et metus. Duis hendrerit vulputate odio et sollicitudin. Duis vestibulum placerat mi, elementum volutpat nisi vestibulum ac. Ut hendrerit posuere augue a interdum. Integer porttitor interdum orci, tincidunt tempor ante consectetur in. Suspendisse sit amet ex nec leo vestibulum venenatis a at tortor. In nec mattis nunc. Aliquam ac ligula quis lorem porttitor fermentum eu faucibus est. Vivamus ornare sit amet ex eu elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<br/><br/>
Curabitur accumsan maximus diam sit amet pretium. Proin non neque ac metus tincidunt molestie vitae quis magna. Integer vulputate, odio sit amet viverra dictum, leo lectus pellentesque dolor, a lobortis tellus lacus ut diam. Sed consequat lacus et sem placerat semper. In consequat in est at rhoncus. Quisque ultricies tempor orci. Aenean nec augue tellus. Curabitur elementum consectetur dictum. Nulla gravida tincidunt pulvinar. Ut a cursus mauris. Duis metus arcu, efficitur ut elit in, convallis euismod massa.`

const body = document.querySelector('body')
body.append(texto)

const progressBar = document.createElement('div')
progressBar.setAttribute('class','progress-bar')
body.append(progressBar)

//funcion que haga el calculo
const calcularPorcentajeScroll = (event)=>{
    //console.log(event);
    
    //Crear constates de un JSON
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement

    return (scrollTop/(scrollHeight-clientHeight))*100
}
//Streams
const scroll$ = fromEvent(document,'scroll')
//scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    //map(event=>calcularPorcentajeScroll(event))
    map(calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje =>{
    progressBar.style.width = `${porcentaje}%`
})
