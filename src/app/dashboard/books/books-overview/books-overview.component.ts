import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CompCommunicationService } from 'src/app/services/comp-communication.service';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.css']
})
export class BooksOverviewComponent implements OnInit, OnDestroy {

  message$!: Observable<string>;

  subscription!: Subscription;

  constructor(private compCommunicationService: CompCommunicationService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.compCommunicationService.message$.subscribe(message => {
        console.log('Message: ', message);
      })
    );

    this.message$ = this.compCommunicationService.message$;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
