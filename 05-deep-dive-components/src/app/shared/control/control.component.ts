import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {

  // @HostBinding('class') className = 'control';
  //  @HostListener('click')  onClick() {
  //   console.log('clicked');
  // }
  // @Input({required: true}) label! : string;

  label = input.required<string>();
  private el = inject(ElementRef);

  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  private control = contentChild<ElementRef<HTMLInputElement| HTMLTextAreaElement>>('input');


  constructor() {
    afterRender(()=>{
      console.log('afterRender');
    });

    afterNextRender(()=>{
      console.log('afterNEXTRENDER');
    })
  }

  ngAfterContentInit(): void {
    //...
  }

  onClick() {
    console.log('clicked');
    console.log(this.el);
    console.log(this.control());
  }
}
