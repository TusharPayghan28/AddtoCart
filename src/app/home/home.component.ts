// import { ProductsService } from './../products.service';
import { AddproductService } from './../addproduct.service';
import { Component , OnInit} from '@angular/core';
import { ProductsService } from '../products.service';
import { MatDialog , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
   //product:{id:number,title:string,price:number,description:string,category:string,image:string}[]=[];

   searchKey:string=" ";
   product:any;
  ProductsService: any;
  constructor(private services:ProductsService,public dialog: MatDialog) {}
  public search: any = '';
  searchString=''
  msgTrue:any
 title='';

 query='';
  ngOnInit(): void {

   this.services.getProduct().subscribe(data=>{
    this.product=data;
    console.log(this.product);
    this.services.search.subscribe(res=>{
      this.searchString=res
      console.log(this.searchString);

    })
   });
  this.services.getCartCount()
  }

  addData(products:any){
    this.services.addProduct(products).subscribe(res=>{
      this.services.getCartCount()
    })

  }




  openDialog(prod:any) {
    this.dialog.open(DialogComponent,{
      data:{
        id:prod.id,
        title:prod.title,
        price:prod.price,
        description:prod.description,
        category:prod.category,
        image:prod.image,
        quantity:prod.quentity,
        totalPrice:prod.totalPrice

      }
    }

    );


}

}
