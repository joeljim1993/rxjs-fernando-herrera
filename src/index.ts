import { fromEvent, map, tap,interval, take, reduce } from "rxjs";



const numbers = [1,2,3,4,5];

const totalReducer = ( acumulador:number,valorActual:number)=> {
    return acumulador + valorActual;
}
// number en Js
const total = numbers.reduce( totalReducer ,0 );

console.log("total arr", total );


// reduce( funcion callback,numero inicial) si no se especifica el inicial por defecto es "0"

interval(1000).pipe(
    take(3),
    tap( console.log),
    reduce( totalReducer)

)
.subscribe({
    next:val => console.log("next",val),
    complete : () => console.log("complete ")
    
})
