import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';




@Component({
  selector: 'app-root',
  standalone: false,
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
