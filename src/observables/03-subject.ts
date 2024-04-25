import { Observable, Observer, Subject, } from 'rxjs'

/**
 *  todo: cuando la data es producidad por el observable en si mismo , es considerado un "Cold Observable  ". 
 * todo: pero cuando la data es producida FUERA del observable es llamado "Hot Observable "

 *  */
const observer:Observer<number> = {
    next    : value => console.log('siguiente [next]:', value   ),
    error   : error => console.warn('error [Obs]',error ),
    complete: ()=> console.info("completadoooo")
    
    
}

const intervalo$ = new Observable<number>( subs => {


  const intervalId = setInterval( ()=>subs.next( Math.random() ) ,1000);

    return ()=> {
        clearInterval( intervalId );
        console.log("Destruido ");
        
    }
   
    


});

/**
 * 1-casteo multiple, se envia el mismo valor a tantos como quieran escuchar 
 * 2-tambien es un observer
 * 3- tambien se puede manejar el next, error y complete 
 */

const subject$ = new Subject<number>();
const subscription =  intervalo$.subscribe( subject$);


const subs1 = subject$.subscribe(  observer );
const subs2 = subject$.subscribe(  observer );


  setTimeout(()=>{

   subject$.next(10);
   subject$.complete();

   subscription.unsubscribe();

  },3500)