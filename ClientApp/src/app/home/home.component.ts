import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule
  ]
})
export class HomeComponent {
  @Output() invoiceOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  isInvoiceOpen: boolean = false;
  
  openInvoice(): void {
    this.isInvoiceOpen = true;
    this.invoiceOpen.emit(this.isInvoiceOpen);
  }
}
