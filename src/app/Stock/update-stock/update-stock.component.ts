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
import { StockService } from '../../services/HttpClient-service-stock.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  standalone: false,
  selector: 'app-update-stock',
  // imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './update-stock.component.html',
  styleUrl: './update-stock.component.css',
})
export class UpdateStockComponent {
  @Input() itemIndex!: any;
  @Output() dialogClosed = new EventEmitter<void>();
  @Output() updated = new EventEmitter<any>();

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
    const formValue = this.updateForm.getRawValue();
    const newStock = { _id: this.itemIndex._id, ...formValue };

    this.stockService.put(newStock._id, newStock).subscribe({
      next: (data) => {
        this.updated.emit(data); // báo lên cha/ông
        this.closeDialog();
      },
      error: (e) => console.error(e),
    });
  }

  closeDialog() {
    this.dialogClosed.emit();
  }
}
