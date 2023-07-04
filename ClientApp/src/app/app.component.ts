import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { InvoiceModalComponent } from './components/invoice-modal/invoice-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    HomeComponent,
    NavMenuComponent,
    InvoiceModalComponent
  ]
})
export class AppComponent {
  @Input() isInvoiceOpen: boolean = false;

  onOpenInvoice(invoiceState: boolean): void {
    this.isInvoiceOpen = invoiceState ;
  }

  onClosedInvoice(invoiceState: boolean): void {
    this.isInvoiceOpen = invoiceState;
  }
}
