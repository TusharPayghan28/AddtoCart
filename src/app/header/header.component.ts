import { ProductsService } from './../products.service';
import { Component , OnInit} from '@angular/core';
import { FormControl,NgModel } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  // public search: any = '';
  // query='';
  cartCount=0
  public searchTerm ! :string
  constructor(private productservice:ProductsService) {}

  ngOnInit(): void {

    this.productservice.cartCount.subscribe(res=>{
        this.cartCount=res
      console.log(this.cartCount);

    })
  }

  search(event:any){
    this.productservice.getSearchString(event.target.value)
    //  console.log(head);

   }

   tShirts(data:any){
    this.productservice.getSearchString(data)
    console.log(data);

   }


   ring(data:any){
    this.productservice.getSearchString(data)
    console.log(data);
   }

}
