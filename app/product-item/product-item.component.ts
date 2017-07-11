import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../shared/product';

@Component({
    moduleId: module.id,
    selector: 'product-item',
    templateUrl: 'product-item.component.html',
    styleUrls: ['product-item.component.css']
})

export class ProductItemComponent{
    @Input() product: Product;
    @Output() delete = new EventEmitter();
    @Output() toggle = new EventEmitter();

    onToggle() {
        this.toggle.emit(this.product);
    }

    onDelete(){
        this.delete.emit(this.product);
    }
}

