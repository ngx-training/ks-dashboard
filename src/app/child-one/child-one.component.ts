import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../first/user';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterViewChecked, AfterViewInit, AfterContentChecked {

  @Input() user!: User;
  @Output() userChange: EventEmitter<User> = new EventEmitter<User>();

  notifyUser(): void {
    const newUser: User = {
      name: 'Anton test',
      email: 'test@example.com'
    };
    this.userChange.emit(newUser);
  }

  ngOnInit(): void {
    console.log('ChildOne: OnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ChildOne: OnChanges', changes);
  }

  ngOnDestroy(): void {
    console.log('ChildOne: OnDestroy');
  }

  ngAfterViewInit(): void {
    console.log('ChildOne: AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ChildOne: AfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('ChildOne: AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ChildOne: AfterContentChecked');
  }

}
