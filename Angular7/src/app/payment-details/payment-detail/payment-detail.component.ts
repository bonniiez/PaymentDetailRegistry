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
  //  var input = (<HTMLInputElement>document.getElementById('PMid')).value;
  //   console.log("input",typeof(input));

  //   var numberPMid = Number(input);
  //   console.log("integer ", numberPMid);
    
  //   if (numberPMid != 0){
  //     this.service.updatePaymentDetails(numberPMid,form.value);
  //     this.resetForm(form);
  //     this.service.refreshList();
  //         this.toastr.success('updated successfully', 'Payment Detail Register');
  //     console.log("updated payment details!")
  //   } 
  console.log("form.value.PMid: " +form.value.PMid);

  if (form.value.PMid ==0){
    this.insertRecord(form);
  }else {
    this.updateRecord(form);
  }
    
    

  }

 insertRecord(form: NgForm ){
  this.service.postPaymentDetail(form.value).subscribe(
    res =>{
      this.resetForm(form)
      this.toastr.success('Submitted successfully', 'Payment Detail Register');
    },
    err=>{
      console.log(err)
    }
  )
 }

 updateRecord(form: NgForm ){
  this.service.updatePaymentDetails().subscribe(
    res =>{
      this.resetForm(form)
      this.toastr.success('Updated successfully', 'Payment Detail Register');
      this.service.refreshList();
    },
    err=>{
      console.log(err)
    }
  )
 }

  log(x:string){
console.log(x);
  }

}
