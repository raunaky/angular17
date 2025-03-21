import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor ,NgIf} from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId? : string;
  selectedUserName = '';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    console.log(`Selected user is clicked with id ${id}`);
    const [user] = this.users.filter((item) => item.id === id);
    this.selectedUserName = user.name;
    this.selectedUserId = id;
  }
}
