import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StockService } from '../../../services/HttpClient-service-stock.service';
import { StockItemApiComponent } from '../../stock/stock-item-api/stock-item-api.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-update-stock-bai8',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './update-stock-bai8.component.html',
  styleUrl: './update-stock-bai8.component.scss',
})
export class UpdateStockBai8Component {
  @Input() itemIndex!: any;
  @Output() dialogClosed = new EventEmitter<void>();

  updateForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.nullValidator]),
    price: new FormControl<number | null>(null),
    previousPrice: new FormControl<number | null>(null),
    exchange: new FormControl('', [Validators.required]),
    favorite: new FormControl(false),
  });

  constructor(private stockService: StockService, private router: Router) {}

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
    let newStock = {
      id: this.itemIndex.id,
      name: formValue.name,
      code: formValue.code,
      price: formValue.price,
      previousPrice: formValue.previousPrice,
      exchange: formValue.exchange,
      favorite: formValue.favorite,
    };
    // console.log('Stock Updated', newStock);
    this.stockService.put(newStock).subscribe((data) => {
      console.log('Stock Updated put', data);
    });

    this.closeDialog();
  }

  closeDialog() {
    this.dialogClosed.emit();
  }
}
