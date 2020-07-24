
import { Component } from '@angular/core';

@Component({
    selector: 'app-module-list',
    templateUrl: 'module-list.component.html',
    styleUrls: ["./module-list.component.css"]
})

export class ModuleListComponent {
    constructor() { }
    modules = [
        { route: "/", content: "Home" },
        { route: "/create", content: "Invoices" },
        { route: "/login", content: "Login" },
        { route: "/signup", content: "Signup" },
        { route: "#", content: "Module5" },
        { route: "#", content: "Module6" },
        { route: "#", content: "Module7" },
        { route: "#", content: "Module8" }
    ];

}
