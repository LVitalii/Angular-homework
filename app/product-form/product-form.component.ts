import {Component} from "@angular/core";
import {ProductService} from '../shared/product.service';

@Component ({
    moduleId: module.id,
    selector: 'product-form',
    templateUrl: 'product-form.component.html',
    styleUrls: ['product-form.component.css']

})

export class ProductFormComponent{
    title: string = '';

    constructor (private productService: ProductService){}

    onSubmit(){
        this.productService.createProduct(this.title);
    }
}