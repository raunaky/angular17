import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent,ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit{

 @ViewChild('form') private form? : ElementRef<HTMLFormElement>;

// private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

// @Output() add = new EventEmitter();
enteredTitle = '';
enteredText = '';
add = output<{title: string, text : string}>()

 constructor() {

 }
  ngOnInit(): void {
    console.log('On INIT');
    console.group(this.form?.nativeElement);
    
  }
  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.group(this.form?.nativeElement);

  }

  onSubmit(titleInput: string, textInput: string) {
    console.log('new ticket is submitted.',titleInput)
    console.dir(titleInput);
    const enteredTitle = titleInput;
    console.log('Entered Title: ',enteredTitle);
    console.log('text ',textInput);

    this.add.emit({title: enteredTitle, text: this.enteredText});
    
    this.form?.nativeElement.reset();
  }
}
