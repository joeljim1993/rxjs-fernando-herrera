import { Observable, Observer, Subject, of, } from 'rxjs'


// const obs$ = of(1,2,3,4,5,6,7,8,9,10);
// const obs$ = of([1,2,3,4,5,6,7,8,9,10]);

// usando el operador express envia cada uno de los argumentos de manera independiente 
// const obs$2 = of(...[1,2,3,4,5,6,7,8,9,10]);

// de esta manera igual seguiria desglosando el observable 
// usa el tipo generico <T>
// const obs$2 = of<any>(...[1,2,3,4,5,6,7,8,9,10],2,3,4,5);

const obs$2 = of<number[]>(1,2,3,4,5,6,7,8);






console.log('inicio del obs');

obs$2.subscribe( 
    next => console.log("next",next),
    ()=> console.log("fin del observable")
    
    
);