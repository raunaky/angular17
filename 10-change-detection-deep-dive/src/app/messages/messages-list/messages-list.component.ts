import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent implements OnInit{

  private messagesService = inject(MessagesService);
  private cdRef = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);


  messages : string[] = [];
  ngOnInit(): void {
    const subscription = this.messagesService.messages$.subscribe((newMessage)=>{
      this.messages = newMessage;
      this.cdRef.markForCheck();
    });

    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    })
  }
  // messages = this.messagesService.allMessages;
  
  // get messages() {
  //   return this.messagesService.allMessages;
  // }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
