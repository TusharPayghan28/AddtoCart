import { Component , OnInit} from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit{
  product: any | undefined;

  constructor(private services:ProductsService) {}

  ngOnInit(): void {

    this.services.getProduct().subscribe(data=>{
     this.product=data;

    });

   }


   tShirts(data:any){
    // this.productservice.getSearchString(data)
    // console.log(data);

   }


}
