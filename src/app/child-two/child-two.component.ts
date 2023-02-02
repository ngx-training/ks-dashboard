import { Component, Input } from '@angular/core';
import { User } from '../first/user';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent {

  @Input() user!: User;

}
