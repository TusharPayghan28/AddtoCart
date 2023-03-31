import { ProductsService } from './../products.service';
import { Component } from '@angular/core';
import { FormControl , FormGroup ,FormControlName } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {

  hide = true;

  constructor(private http:ProductsService) {}

  paymentForm=new FormGroup({
    name:new FormControl(' '),
    amount:new FormControl(' '),
    upi:new FormControl(' ')
  })



  sendPayment(){
    console.log(this.paymentForm);

  }

  payment(){
     this.http.postPayment(this.paymentForm.value).subscribe(res=>{
      console.log(res);

     })
  }
}
