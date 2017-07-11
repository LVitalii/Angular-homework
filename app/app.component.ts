import {Component} from '@angular/core';
import {Product} from './shared/product';
import {products} from './shared/data';


@Component({
    moduleId: module.id,
    selector: 'app', 
    templateUrl: 'app.component.html',    
    styleUrls: ['app.component.css']
   
})

export class AppComponent{
    title: string = 'Vitalii\'s shop';
}