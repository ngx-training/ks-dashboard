import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CompCommunicationService } from '../services/comp-communication.service';
import { menuItems } from './menu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  menuItems: MenuItem[] = menuItems;

  constructor(private compCommunicationService: CompCommunicationService) {}

  sendMessage(): void {
    this.compCommunicationService.sendMessage('Nachricht vom Dashboard');
  }

}
