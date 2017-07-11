import {products} from './data';
import {Product} from './product';

export class ProductService{
    products: Product[] = products;

    getProducts(): Product[]{
        return this.products;
    }

    createProduct(title: string){
        let product = new Product(title);
        this.products.push(product);
    }

    deleteProduct(product: Product){
        console.log('delete');
        let index = this.products.indexOf(product);
        if (index >-1){
            this.products.splice(index, 1);
        }
    }

    toggleProduct(product: Product){
         product.available = !product.available;
    }

}