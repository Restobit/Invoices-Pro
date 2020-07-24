import { Component } from '@angular/core';


@Component({
    selector: 'app-invoice-merged',
    templateUrl: './invoice-merged.component.html',
    styleUrls: ['./invoice-merged.component.css']
})

export class MergedFunctionsComponent {
    storedInvoices = [];

    onInvoicesAdded(invoice) {
        this.storedInvoices.push(invoice);
    }
}