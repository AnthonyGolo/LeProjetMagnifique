import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass']
})
export class ReactiveFormComponent implements OnInit {

  currentForm: FormGroup;
  candidates: FormArray;
  @Output() formData = new EventEmitter<object>();
  @Output() plusAppearance = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private router: Router) {
    this.currentForm = this.fb.group({
      vacancy: ['', [Validators.required, Validators.minLength(4)]],
      deadline: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      candidates: this.fb.array([ this.createCandidate() ])
    }); 
  }

  ngOnInit() {
  }

  createCandidate(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      age: ['', [Validators.required, Validators.maxLength(3)]],
      experience: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  addCandidate(): void {
    this.candidates = this.currentForm.get('candidates') as FormArray;
    this.candidates.push(this.createCandidate());
  }

  onSubmit() {
    let fullForm = this.currentForm.value;
    fullForm.searchString = addSearchString(fullForm);
    this.formData.emit(fullForm);
    this.plusAppearance.emit(false);
  }
}

function addSearchString(form: object) {
  let s = '';
  for (let f of Object.values(form)) {
    if (typeof f === 'object') {
      s += addSearchString(f);
    } else {
      s += ' ';
      s += f.toString();
    }
  }
  while(s.charAt(0) === ' ') {
    s = s.substr(1);
  }
  return s;
}