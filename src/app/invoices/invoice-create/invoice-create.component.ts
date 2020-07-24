import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Invoice } from '../invoice.model';

interface MoneyType {
    value: string,
    viewValue: string
}

@Component({
    selector: 'app-invoice-create',
    templateUrl: './invoice-create.component.html',
    styleUrls: ["./invoice-create.component.css"]
})

export class InvoiceCreateComponent {

    selectedMoneyType: string;
    moneyTypes: MoneyType[] = [
        { value: 'HUF', viewValue: 'HUF' },
        { value: 'EUR', viewValue: 'EUR' },
        { value: 'USD', viewValue: 'USD' }
    ];

    selectedStatus: string;
    statuses: string[] = ['Performed', "Not performed"];

    @Output() invoiceCreated = new EventEmitter<Invoice>();

    onAddInvoice(form: NgForm) {

        if (form.invalid) {
            return;
        }

        const invoice: Invoice = {
            id: Math.floor(Math.random() * 100),
            name: form.value.invoiceName,
            moneyValue: form.value.moneyValue,
            moneyType: form.value.moneyType,
            status: form.value.status
        };

        this.invoiceCreated.emit(invoice);
        form.resetForm();
    }

    resetFormData(form: NgForm) {
        if (form.invalid) {
            return;
        }

        form.resetForm();
    }

}
