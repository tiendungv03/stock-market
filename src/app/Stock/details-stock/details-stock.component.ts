import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../../services/HttpClient-service-stock.service';

@Component({
  standalone: false,
  selector: 'app-details-stock',
  // imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './details-stock.component.html',
  styleUrl: './details-stock.component.css',
})
export class DetailsStockComponent {
  // stocks: [] = [];
  // stockForm!: FormGroup;

  stockForm!: FormGroup;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    const stockCode = this.route.snapshot.paramMap.get('code');
    console.log('Stock code from route:', stockCode);
    if (!stockCode) {
      this.notFound = true;
      return;
    }

    // nếu service có getStockByCode
    this.stockService.getStockByCode(stockCode).subscribe({
      next: (res: any) => {
        const stock = res?.data ?? null;
        if (!stock) {
          this.notFound = true;
          return;
        }
        console.log('Fetched stock details:', stock);
        this.initializeForm(stock);
      },
      error: () => (this.notFound = true),
    });
  }

  private initializeForm(stock: any) {
    this.stockForm = this.fb.group({
      name: [{ value: stock.name, disabled: true }, Validators.required],
      code: [{ value: stock.code, disabled: true }, Validators.required],
      price: [{ value: stock.price, disabled: true }, Validators.required],
      previousPrice: [
        { value: stock.previousPrice, disabled: true },
        Validators.required,
      ],
      exchange: [
        { value: stock.exchange, disabled: true },
        Validators.required,
      ],
      favorite: [{ value: stock.favorite, disabled: true }],
    });
  }
}
