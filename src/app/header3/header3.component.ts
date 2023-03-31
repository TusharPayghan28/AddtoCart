import { ProductsService } from './../products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header3',
  templateUrl: './header3.component.html',
  styleUrls: ['./header3.component.css']
})
export class Header3Component {

  constructor(private http:ProductsService) {}


  tShirts(data:any){
    this.http.getSearchString(data)
    console.log(data);

   }

}
