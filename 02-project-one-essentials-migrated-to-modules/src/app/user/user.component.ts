import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { type User } from './user.model';

// type User = {
//   id: string,
//   avatar: string,
//   name: string
// };



@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
@Input({required: true}) user!: User;
@Input({required: true}) selected!: Boolean;

  @Output() select = new EventEmitter<string>();

  // select = output<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();

  //  imagePath = computed(()=> {

  //     return 'assets/users/' + this.avatar();
  //   });

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
