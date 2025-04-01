import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  NgForm,
} from '@angular/forms';
import { Stock } from '../../../model/stock';
@Component({
  standalone: true,
  selector: 'app-create-stock',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-stock.component.html',
  styleUrl: './create-stock.component.scss',
})
export class CreateStockComponent implements OnInit {
  // @Output() stockCreated = new EventEmitter<any>();
  public stockList = {};

  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z ]+$'),
    ]),
    code: new FormControl('', Validators.required),
    price: new FormControl(0, [Validators.pattern('^[0-9]+$')]),
    previousPrice: new FormControl(0),
    exchange: new FormControl('', Validators.required),
    favorite: new FormControl(false),
    stockCheckboxe: new FormControl(false, Validators.required),
  });

  constructor() {}

  ngOnInit() {
    this.profileForm.get('name')?.valueChanges.subscribe((value) => {
      if (value?.trim() !== '') {
        this.handleRandomStockPrice();
      }
    });

    this.profileForm.get('price')?.valueChanges.subscribe((value) => {
      if (value) {
        this.profileForm.patchValue({
          previousPrice: value,
        });
      }
    });

    this.loadStockServer();
    this.patchStockForm();
  }

  handleRandomStockPrice() {
    this.profileForm.patchValue({
      price: Math.floor(Math.random() * 1000) + 1,
    });
  }

  handleSubmit() {
    if (this.profileForm.valid) {
      if (this.profileForm.get('stockCheckboxe')?.value) {
        this.stockList = this.profileForm.value;
        this.profileForm.reset();
      } else {
        alert('Please check the checkbox before submitting.');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  }

  loadStockServer() {
    const stockData = {
      name: 'Bitcoin',
      code: 'BTC',
    };
    // this.profileForm.setValue(stockData);
    this.stockList = stockData;
  }

  patchStockForm() {
    if (this.stockList) {
      this.profileForm.patchValue({
        price: 80000,
        previousPrice: 920000,
        exchange: 'Binance',
        favorite: true,
      });
    }
  }
}
