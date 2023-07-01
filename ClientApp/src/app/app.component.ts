import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  title = 'app';
}
