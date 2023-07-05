import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-invoice-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './invoice-modal.component.html',
  styleUrls: ['./invoice-modal.component.scss'],
})
export class InvoiceModalComponent {
  @Output() invoiceOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  isInvoiceOpen: boolean = false;
  isFormEdited: boolean = false;
  form = this.fb.group({
    billerStreetAddress: [''],
    billerCity: [''],
    billerZipCode: [''],
    billerCountry: [''],
    clientName: [''],
    clientEmail: [''],
    clientStreetAddress: [''],
    clientCity: [''],
    clientZipCode: [''],
    clientCountry: [''],
    invoiceDate: [''],
    paymentDueDate: [''],
    paymentTerms: [''],
    productDescription: [''],
  });

  constructor(private fb: FormBuilder) {}

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.cancelInvoice();
    console.log('esc pressed');
  }

  registerInvoice(): void {
    console.log(this.form.value);
  }

  cancelInvoice(): void {
    this.isInvoiceOpen = false;
    this.invoiceOpen.emit(this.isInvoiceOpen);
  }
}
