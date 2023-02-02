import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { menuItems } from './menu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  menuItems: MenuItem[] = menuItems;

}
