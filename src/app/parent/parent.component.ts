import { Component, OnInit } from '@angular/core';
import { User } from '../first/user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  user!: User;

  newUser!: User;

  isActive: boolean = true;

  ngOnInit(): void {
    this.user = {
      name: 'Gregor Doroschenko',
      email: 'gregor@example.com'
    };

    setTimeout(() => {
      this.isActive = false;
    }, 7000);
  }

}
