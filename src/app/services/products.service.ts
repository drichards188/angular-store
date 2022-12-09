import {Injectable} from '@angular/core';
import {CartProduct} from "../cartProduct";
import {Observable} from "rxjs";
import {Product} from "../product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {


  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:4200/assets/data.json');
  }

}
