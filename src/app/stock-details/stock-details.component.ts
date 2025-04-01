import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../HttpClient-service/stock.service';

@Component({
  selector: 'app-stock-details',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './stock-details.component.html',
  styleUrl: './stock-details.component.scss',
})
export class StockDetailsComponent {
  stocks: [] = [];
  stockForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // const stockId = this.route.snapshot.paramMap.get('id');
    const stockCode = this.route.snapshot.paramMap.get('code');

    if (stockCode) {
      this.stockService.getStocks().subscribe((data) => {
        this.stocks = data;
        console.log('data item ', stockCode, data);

        const stock = this.stocks.find((s: any) => s.code === stockCode);
        if (stock) {
          this.initializeForm(stock);
        }
      });
    }
  }

  initializeForm(stock: any) {
    this.stockForm = this.fb.group({
      name: [stock.name, Validators.required],
      code: [stock.code, Validators.required],
      price: [stock.price, Validators.required],
      previousPrice: [stock.previousPrice, Validators.required],
      exchange: [stock.exchange, Validators.required],
      favorite: [stock.favorite],
    });
  }
}
