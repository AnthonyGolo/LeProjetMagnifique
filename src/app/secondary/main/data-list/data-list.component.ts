import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Sort} from '@angular/material/sort';
import { BehaviorSubject } from 'rxjs';

export interface Candidate {
  name: string;
  age: number;
  experience: number;
  searchString: string;
}

export interface Entry {
  vacancy: string;
  deadline: string;
  candidates: Array<Candidate>;
}

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.sass']
})
export class DataListComponent implements OnInit, OnDestroy {

  @Input('data') set data(data: Entry) {
    this.data$.next(data);
  };
  data$ = new BehaviorSubject<Entry>(<Entry>{});
  sortedData: Array<Entry> = [];
  searchString: string;

  constructor() { 
  }

  ngOnInit() {
    this.data$.subscribe((data) => {
      if (data.vacancy) {
        this.sortedData.push(data);
      }
    })
  }

  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'vacancy': return compare(a.vacancy, b.vacancy, isAsc);
        case 'deadline': return compare(a.deadline, b.deadline, isAsc);
        case 'name': return compare(a.candidates[0].name, b.candidates[0].name, isAsc);
        case 'age': return compare(a.candidates[0].age, b.candidates[0].age, isAsc);
        case 'experience': return compare(a.candidates[0].experience, b.candidates[0].experience, isAsc);
        default: return 0;
      }
    });
  }

  doFilter(input) {
    this.searchString = input;
  }
  
  ngOnDestroy() {
    this.data$.unsubscribe();
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}