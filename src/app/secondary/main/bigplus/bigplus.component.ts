import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bigplus',
  templateUrl: './bigplus.component.html',
  styleUrls: ['./bigplus.component.sass']
})
export class BigplusComponent implements OnInit {

  @Output() formAppearance = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showForm() {
    this.formAppearance.emit(true);
  }

}
