import { Component, Input, OnInit, OnChanges } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StockService } from '../services/stock.service';
import { Stock } from '../model/stock';

@Component({
  selector: 'app-update-stock-service',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-stock-service.component.html',
  styleUrl: './update-stock-service.component.scss',
})
export class UpdateStockServiceComponent implements OnChanges {
  @Input() itemIndex!: Stock;

  updateForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.nullValidator]),
    price: new FormControl<number | null>(null),
    previousPrice: new FormControl<number | null>(null),
    exchange: new FormControl('', [Validators.required]),
    favorite: new FormControl(false),
  });

  constructor(private stockService: StockService) {}

  // ngOnInit() {
  //   this.stocks = this.stockService.getStocks();

  //   console.log(this.codeIndex);
  //   this.getDataItem(this.codeIndex);
  // }

  ngOnChanges() {
    if (this.itemIndex) {
      this.updateForm.patchValue({
        name: this.itemIndex.name,
        code: this.itemIndex.code,
        price: this.itemIndex.price,
        previousPrice: this.itemIndex.previousPrice,
        exchange: this.itemIndex.exchange,
        favorite: this.itemIndex.favorite,
      });
    }
  }
  onSubmitUpdate() {
    let formValue = this.updateForm.value;
    let newStock = new Stock(
      formValue.name!,
      formValue.code!,
      formValue.price!,
      formValue.previousPrice!,
      formValue.exchange!,
      formValue.favorite!
    );
    console.log(newStock);
    this.stockService.updateStock(newStock);
    this.updateForm.reset();
  }

  // getDataItem(code: string) {
  //   this.stocks.forEach((x) => {
  //     if (x.code === code) {
  //       this.updateForm.setValue(x);
  //     }
  //   });
  // }
}
