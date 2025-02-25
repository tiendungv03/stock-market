import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  standalone: true,
  selector: 'app-create-stock',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-stock.component.html',
  styleUrl: './create-stock.component.scss',
})
export class CreateStockComponent implements OnInit {
  @Output() stockCreated = new EventEmitter<any>();

  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]+$'),
    ]),
    code: new FormControl(''),
    price: new FormControl(),
    previousPrice: new FormControl(0),
    exchange: new FormControl(''),
    favorite: new FormControl(false),
    stockCheckboxe: new FormControl(false),
  });

  ngOnInit() {
    this.profileForm.get('name')?.valueChanges.subscribe((value) => {
      if (value?.trim() !== '') {
        this.handleRandomStockPrice();
      }
    });
  }

  handleRandomStockPrice() {
    this.profileForm.patchValue({
      price: Math.floor(Math.random() * 1000) + 1,
    });
  }

  handleSubmit() {
    if (this.profileForm.valid) {
      this.stockCreated.emit(this.profileForm.value);
      this.profileForm.reset();
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
