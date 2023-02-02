import { Component, OnInit } from '@angular/core';

interface User {
  name: string,
  email: string,
  birthdate?: Date | string;
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  user!: User;
  userList: User[] = [];

  isActive: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.user = {
        name: 'Gregor Doroschenko',
        email: 'gregor@example.com',
        birthdate: new Date()
      };
    }, 5000);

    this.userList = [
      {
        name: 'Max Musterman',
        email: 'max@example.com',
        birthdate: new Date()
      },
      {
        name: 'Maria Musterman',
        email: 'maria@example.com',
        birthdate: new Date()
      },
      {
        name: 'Jana Musterman',
        email: 'jana@example.com'
      }
    ];
  }

  displayInfo(user: User): void {
    this.user = user;
  }

  showMore(): void {
    this.isActive = !this.isActive;
  }

}
