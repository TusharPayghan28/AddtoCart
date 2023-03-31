import { NgModel } from '@angular/forms';
import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from '../products.service';


import {MatDialog} from '@angular/material/dialog';


export interface DialogData {
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  quantity:string,
  totalPrice:number


}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,private services:ProductsService) {}

  Ddata:any

  ngOnInit(): void {
    console.log(this.data);

    this.Ddata=this.data;
    console.log(this.Ddata);



  }



  addData(products:any){
    this.services.addProduct(products).subscribe(res=>{
      this.services.getCartCount()
    })

  }

  cancel(){
    location.reload();
  }
}
