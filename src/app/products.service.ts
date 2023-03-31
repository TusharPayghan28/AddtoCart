import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // public search=new BehaviorSubject<string>("");
  public search =new Subject<any>
  public cartCount=new Subject<any>
  constructor(private httpClient:HttpClient) { }


  getSearchString(searchString:any){
         this.search.next(searchString)
   }


   cartProductList:any
   getCartCount(){
    this.httpClient.get(`http://localhost:3000/cart`).subscribe(res=>{
     this.cartProductList=res
     console.log(this.cartProductList)
     let count=this.cartProductList.length
      this.cartCount.next(count)


    })
   }
  getProduct(){
     return this.httpClient.get('http://localhost:3000/product')

  }

  addProduct(products:any){
    console.log(products);

    return this.httpClient.post(`http://localhost:3000/cart/`,products)

  }

  getAddProduct(){
    return this.httpClient.get('http://localhost:3000/cart')
  }

  callingFromTemplate(){
    console.log('calling Template Directly')
  }
  updateCartData(data:any){
    return this.httpClient.put(`http://localhost:3000/cart/${data.id}`,data)
  }

  deleteData(id:number){
    const deleteFormData='http://localhost:3000/cart/' + id;
   return this.httpClient.delete(deleteFormData);

 }

//  h1="1"

 remove(){
  // const removeData='http://localhost:3000/cart' ;
  return this.httpClient.delete('http://localhost:3000/cart?id=1,2')

 }

 postRegister(data:any){
  return this.httpClient.post(`http://localhost:3000/profile/`,data)
  console.log(data);

}

postPayment(pay:any){
  return this.httpClient.post(`http://localhost:3000/payment/`,pay)
}
}



