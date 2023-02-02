import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../first/user';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent {

  @Input() user!: User;
  @Output() userChange: EventEmitter<User> = new EventEmitter<User>();

  notifyUser(): void {
    const newUser: User = {
      name: 'Anton test',
      email: 'test@example.com'
    };
    this.userChange.emit(newUser);
  }

}
