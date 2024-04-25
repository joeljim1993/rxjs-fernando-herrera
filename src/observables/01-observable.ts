import { Observable, Observer, } from 'rxjs'

const observer:Observer<any> = {
    next    : value => console.log('siguiente [next]:',value),
    error   : error => console.warn('error [Obs]',error ),
    complete: ()=> console.info("completadoooo")
    
    
}


// const obs$= Observable.create();


const obs$=  new Observable<string>( subs =>{
    subs.next('hola joel');
    subs.next('hola mundo ');
    subs.next('hola joel');
    subs.next('hola mundo ');

    // forzar un error 
    const a = undefined;
    a.nombre = 'jimenez'



    subs.complete();
    
    subs.next('hola mundo xxx2');

});



obs$.subscribe( observer)



// obs$.subscribe( {
//     next: valor => console.log('next: ', valor),
//     error: error => console.error('error', error ),
//     complete :()=> console.warn('Completado')
    
// });
