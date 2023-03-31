import { ProductsService } from './../products.service';
import { AddproductService } from './../addproduct.service';
import { Component , OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterFormComponent } from '../register-form/register-form.component';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent implements OnInit{

  //products:{id:number,title:string,price:number,description:string,category:string,image:string}[]=[];
  subtotel:number | undefined;
  msgTrue:any;
  products:any;
  pImage:any;
  searchString=''
  constructor(private addCart:ProductsService,public dialog: MatDialog) {}

  ngOnInit(): void {
   this.products = this.addCart.getAddProduct().subscribe(data=>{
    this.products = data
    console.log(this.products);
    this.addCart.getCartCount()

    this.addCart.search.subscribe(res=>{
      this.searchString=res
      console.log(this.searchString);

    })
   })


   this.pImage= this.addCart.getProduct().subscribe(item=>{
    this.pImage=item
})

  }


  deleteProduct(id:number){
    this.addCart.deleteData(id).subscribe(data=>{
      // this.msgTrue = true;
     this.addCart.getCartCount()

    });
    location.reload();
    // this.deleteProduct
  }


  sub(data:any){
    if(data.quantity>1)
    data.quantity--
    data.totalPrice=data.quantity*data.price
    this.addCart.updateCartData(data).subscribe(res=>{
      // this.subtotel+=data.totalPrice
      // console.log(this.subtotel);
    })
  }

  add(data:any){

     data.quantity++
     data.totalPrice=data.quantity*data.price
     this.addCart.updateCartData(data).subscribe(res=>{

     });
  }

  remove(){
    this.addCart.remove().subscribe(res=>{
      this.msgTrue=true;
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(RegisterFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  

}
