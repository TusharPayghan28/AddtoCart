import { PaymentFormComponent } from './../payment-form/payment-form.component';
import { ProductsService } from './../products.service';
import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, FormControlName, NgModel } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  hide = true;

  constructor(private http:ProductsService,public dialog: MatDialog) {}

  ngOnInit():void{

  }

  registerForm=new FormGroup({
    name:new FormControl(' '),
    phone:new FormControl(' '),
    email:new FormControl(' '),
    password:new FormControl(' '),
    address:new FormControl(' ')
  })

  submitForm(){
   console.log(this.registerForm.value);
  }

  addForm(){
    this.http.postRegister(this.registerForm.value).subscribe(res=>{
      // console.log(res);
    })

    const dialogRef = this.dialog.open(PaymentFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}
