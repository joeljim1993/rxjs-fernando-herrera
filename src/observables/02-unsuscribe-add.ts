import { Observable, Observer, } from 'rxjs'

const observer:Observer<number> = {
    next    : value => console.log('siguiente [next]:', value   ),
    error   : error => console.warn('error [Obs]',error ),
    complete: ()=> console.info("completadoooo")
    
    
}


const intervalo$ = new Observable<number>(subscribe =>{

let numero:number = 0;
const interval = setInterval(()=>{
subscribe.next( numero++ )

},1000);

setTimeout(()=>{

    subscribe.complete();

},5000)

return ()=> {
    clearInterval( interval );
    console.log("intervalo destruido ");
    
}

})
// en este caso se puede apreciar la fuga de memoria 
const subs  = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
const subs3 = intervalo$.subscribe( observer );

// observables en cadena 
subs.add( subs2 );
subs.add( subs3);

setTimeout(()=>{
    subs.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log("Completado timeout");
    
} ,10000)