import {Component, OnInit} from '@angular/core';
import {Product} from '../shared/product';
import {ProductService}  from '../shared/product.service';

@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent  implements OnInit{
    products: Product[];

    constructor(private productService: ProductService){
        this.products = [];
    }

    ngOnInit(){
        this.products = this.productService.getProducts();
    }

    toggle(product: Product){
       this.productService.toggleProduct(product);
    }

    delete(product: Product){
        this.productService.deleteProduct(product);
    }
}