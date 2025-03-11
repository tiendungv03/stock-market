import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-create-stock-bai-th3',
  templateUrl: './create-stock-bai-th3.component.html',
  styleUrls: ['./create-stock-bai-th3.component.scss'],
})
export class CreateStockBaiTH3Component {
  stockCreate = {
    name: '',
    code: '',
    price: 0,
    exchange: '',
    favorite: false,
  };

  confirmed = false;

  createStock(form: any) {
    if (form.valid && this.confirmed) {
      console.log('Stock Created:', this.stockCreate);
    } else {
      console.log('Form invalid or not confirmed');
    }
  }
}
