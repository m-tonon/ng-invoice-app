import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-modal.component.html',
  styleUrls: ['./invoice-modal.component.scss']
})
export class InvoiceModalComponent {
  @Output() invoiceOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  isInvoiceOpen: boolean = false;
  
  cancelInvoice(): void {
    this.isInvoiceOpen = false;
    this.invoiceOpen.emit(this.isInvoiceOpen);
    // clear form
  }
}
