import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginDataService } from '../login-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass']
})
export class ErrorComponent implements OnInit, OnDestroy {

  errorStatus;
  errorMessage;
  subscriptionStatus: Subscription;
  subscriptionMessage: Subscription;

  constructor(private data: LoginDataService) {
    this.subscriptionMessage = this.data.getErrorMessage().subscribe( x => this.errorMessage = x );
    this.subscriptionStatus = this.data.getErrorStatus().subscribe( x => this.errorStatus = x );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptionMessage.unsubscribe();
    this.subscriptionStatus.unsubscribe();
  }

}
