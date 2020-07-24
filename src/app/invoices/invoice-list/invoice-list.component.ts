import { Component, Input } from '@angular/core';
import { Invoice } from '../invoice.model';
@Component({
    selector: 'app-invoice-list',
    templateUrl: './invoice-list.component.html',
    styleUrls: ['./invoice-list.component.css']
})

export class InvoiceListComponent {
    @Input() invoices: Invoice[] = [];

}