import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { StockService } from '../../HttpClient-service/stock.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-stock-bai8',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create-stock-bai8.component.html',
  styleUrl: './create-stock-bai8.component.scss',
})
export class CreateStockBai8Component {
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

  constructor(private stockService: StockService, private router: Router) {}

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
  }

  handleRandomStockPrice() {
    this.profileForm.patchValue({
      price: Math.floor(Math.random() * 1000) + 1,
    });
  }

  handleSubmit() {
    if (this.profileForm.valid) {
      if (this.profileForm.get('stockCheckboxe')?.value) {
        // this.stockCreated.emit(this.profileForm.value);
        // this.profileForm.reset();
        let formValue = this.profileForm.value;
        console.log(formValue);
        this.stockService.post(formValue).subscribe((data) => {
          console.log('Stock Created', data);
        });

        // this.stockService.loadNext(formValue);
        this.profileForm.reset();
        this.router.navigate(['/stocks/list']);
      } else {
        alert('Please check the checkbox before submitting.');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
