import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompCommunicationService {

  message$: BehaviorSubject<string> = new BehaviorSubject<string>('Init message');

  constructor() { }

  sendMessage(message: string): void {
    this.message$.next(message);
  }
}
