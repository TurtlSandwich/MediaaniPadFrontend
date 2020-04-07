import { Component, OnInit } from "@angular/core";
import { Product } from '../models/product.model';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.html']
})

export class ProductsComponent implements OnInit{
    ngOnInit(){
        console.log('Product component is working');
    }
}