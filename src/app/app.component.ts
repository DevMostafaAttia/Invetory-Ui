import { Component } from '@angular/core';
import { getTreeControlFunctionsMissingError } from '@angular/cdk/tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes = [];
  constructor() {
    this.routes.push(
      { name: 'Product', routeUrl: 'product', icon: 'thumb-up' },
      { name: 'Category', routeUrl: 'category' },
      { name: 'Customer', routeUrl: 'customer' },
      { name: 'Create Orders', routeUrl: 'add-order' },
      { name: 'Orders', routeUrl: 'orders' })
  }
}
