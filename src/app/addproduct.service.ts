import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {
  getAddProduct() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  addProduct:{id:number,title:string,price:number,description:string,category:string,image:string}[]=[]

  addCard(data:{id:number,title:string,price:number,description:string,category:string,image:string}){
    this.addProduct.push(data);
    console.log('addproduct '+this.addProduct);

  }
}
