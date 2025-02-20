import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ProductList} from '../products';

@Component({
  selector: 'alert',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent {
  @Input() productItem: ProductList | undefined;
  @Output() notify = new EventEmitter();
}
