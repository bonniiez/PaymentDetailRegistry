import { PaymentDetailService } from './../../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: [
  ]
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service:PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    
    this.service.formData={
    PMid : 0,
    CardOwnerName: '',
    CardNumber:'',
    ExpirationDate:'',
    CVV:''
    }
  }

  onSubmit(form:NgForm){
    this.service.postPaymentDetail(form.value).subscribe(
      res =>{
        console.log("response"+ res.toString);
        this.resetForm(form)
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
      },
      err=>{
        console.log(err)
      }
    )

  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  log(x:string){
console.log(x);
  }

}
