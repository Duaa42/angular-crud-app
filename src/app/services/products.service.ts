import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) {
    console.log('products service');
  }
  getProductList(){
    const url = 'https://dummyjson.com/products';
    return this.http.get(url);
  }
  getProductData(){
    return[
      {name:'mobile',brand:'smasung',price:20000},
      {name:'laptop',brand:'dell',price:200000},
      {name:'car',brand:'honda',price:400000},
      {name:'washing machine',brand:'hier',price:20000}
    ];
}

}
