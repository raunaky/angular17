import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  //converting signals to observables
  clickCount$ = toObservable(this.clickCount);
  
  //converting observable to signals
  // interval = signal(0);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$,{initialValue: 0 });
  
  // doubelInterval = computed(() => this.interval() * 2);

  private destroyRef = inject(DestroyRef);

  //creating a new custom observable
  customInterval$ = new Observable((subscriber)=> {
    let timesExecuted = 0;
   const interval =  setInterval(()=>{
      if(timesExecuted > 5) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('emitting new value...');
      subscriber.next({message: 'New value'});
      timesExecuted++;
    },2000)
  });

  ngOnInit(): void {
   //signal to observable
    const subscription =  this.clickCount$.subscribe({
      next: (val)=>  console.log(`clicked button ${this.clickCount()} times`)

    });

    this.destroyRef.onDestroy(()=>{
          subscription.unsubscribe();
        })
  
//custom observable

this.customInterval$.subscribe({
  next: (value)=> console.log('This is the custom subscription value',value),
  complete: ()=> console.log('COMPLETED')
})

    //create a new observable
    //   const subscription = interval(1000).pipe(
    //     map((value)=> value*2)
    //   ).subscribe({
    //     next: (value) => console.log(value)
    // });
    //   this.destroyRef.onDestroy(()=>{
    //     subscription.unsubscribe();
    //   })

    // working the same functionality with signals

    // setInterval(() => {
    //   this.interval.update((previousInterval) => previousInterval + 1);
    // }, 1000);
  }

  constructor() {
    // effect(() => {
    //   console.log(`clicked button ${this.clickCount()} times`);
    // });

  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}
