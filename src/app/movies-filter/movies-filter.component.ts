import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css'],
})
export class MoviesFilterComponent implements OnInit {
  searchForm: FormGroup;
  @Output() searchEvent = new EventEmitter();
  constructor() {
    this.searchForm = new FormGroup({
      search: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    if (this.searchForm.valid) {
      this.searchEvent.emit(this.searchForm.value);
    }
  }
}
