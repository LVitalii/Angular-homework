import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ProductFormComponent} from './product-form/product-form.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {ProductService} from './shared/product.service';

@NgModule({
    imports:[BrowserModule, FormsModule],
    declarations:[
        AppComponent,
        ProductFormComponent,
        ProductListComponent,
        ProductItemComponent
    ],
    providers: [ProductService],
    bootstrap:[AppComponent]
})

export class AppModule{}