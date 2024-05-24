import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sem turpis, euismod in placerat quis, gravida non diam. Vivamus dictum ex nulla, sed dapibus tortor iaculis et. Pellentesque a magna eros. Mauris in sagittis massa. Aliquam erat volutpat. Nullam tempor egestas erat ut varius. Mauris hendrerit eleifend vehicula.
<br/>
<br/>
Quisque cursus vel mauris in finibus. Vivamus eget fermentum orci, in venenatis ipsum. In hac habitasse platea dictumst. Donec placerat nulla vel lacus euismod, ac ullamcorper risus venenatis. Nunc tincidunt sem sed efficitur interdum. Fusce convallis purus id sagittis consectetur. Donec ultrices luctus ex, eget tincidunt eros. Duis bibendum at lacus ut posuere. Donec felis est, pharetra eget ultricies non, elementum quis arcu.
<br/>
<br/>
Nunc libero quam, ultrices vel aliquet porta, fringilla sed leo. Etiam quis scelerisque est. Nam congue molestie eros at feugiat. Etiam laoreet, mauris sed gravida tincidunt, libero odio facilisis enim, a dictum nisl lorem vel lorem. Vestibulum quis justo a nunc aliquet fringilla vitae vel augue. Vivamus non porttitor metus. Ut quis nunc blandit, sagittis felis sed, pretium lacus. Curabitur ullamcorper arcu nunc, placerat ultrices ex auctor at. Etiam elementum est a neque ornare, ut scelerisque velit venenatis. Mauris maximus, velit interdum tempor maximus, quam enim luctus est, at imperdiet orci tortor a nibh. Vestibulum sit amet ullamcorper nisl, a varius arcu. Nullam nec facilisis erat. Vivamus tempus risus elementum, cursus sem ut, dictum enim. Pellentesque in feugiat purus. Nunc pellentesque tempor lorem vel molestie. Integer facilisis tellus at nisi interdum venenatis.
<br/>
<br/>
Sed at porttitor risus. Phasellus tristique vel justo a egestas. Cras eget lacus sit amet tellus scelerisque hendrerit ut nec massa. Integer in tortor in odio dictum laoreet. Ut ut sapien iaculis, sollicitudin eros vitae, ullamcorper enim. Nam non felis quis magna lobortis sodales ac id mauris. Aenean vitae sapien et ante porta lacinia. Nam id ante commodo, molestie odio id, molestie justo. Nullam interdum imperdiet metus, ac placerat risus porta sit amet. Aenean feugiat tempor ipsum vel ornare. Morbi cursus cursus ex. Phasellus ut luctus neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum justo tellus, tincidunt a ligula a, eleifend lobortis lacus. Vestibulum interdum sapien orci, nec vestibulum turpis vulputate eget.
<br/>
<br/>
Duis et interdum enim. Nunc ac orci felis. Maecenas finibus viverra tellus vitae euismod. Integer nec massa velit. Mauris facilisis tortor metus, a laoreet lectus facilisis vel. Mauris quis pellentesque turpis, sed consequat diam. Nunc efficitur leo a tortor maximus dapibus. In egestas sem lacus.
<br/>
<br/>
Generated 5 paragraphs, 407 words, 2730 bytes of Lorem Ipsum
<br/>
<br/>
`;

const body = document.querySelector('body');
body.append(texto );


const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);

// funcion que haga el calculo 
const calcularPorcentajeScroll= (event)=>{
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    }= event.target.documentElement; 

    console.log("scrollTop",scrollTop,"scrollHeight",scrollHeight,"clientHeight",clientHeight);
    let calculo = (scrollTop /(scrollHeight - clientHeight))*100;

    console.log("calculo",calculo);
    
    return calculo;
}

// Streams
const scroll$ = fromEvent(document,'scroll');

scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map(event => calcularPorcentajeScroll(event)),
    tap( data => console.log("en el pipe ", data))
);

progress$.subscribe( porcentaje =>{
    console.log("progressBar",progressBar);
    
    progressBar.style.width = `${porcentaje}%`
} )


/**
 * clientHeigth
 * clientTop 
 * 
 */