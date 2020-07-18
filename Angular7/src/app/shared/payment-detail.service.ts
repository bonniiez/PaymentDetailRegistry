import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootURL = 'https://localhost:5001/api'
  list:PaymentDetail[];
  

  constructor(private http:HttpClient) { }

  postPaymentDetail(formData: PaymentDetail){
    return this.http.post(this.rootURL+'/PaymentDetail', formData)
  }

  refreshList(){
    return this.http.get(this.rootURL + '/PaymentDetail')
    .toPromise() // convert observable to promise
    .then(
      res=>{
        
        this.list = res as PaymentDetail[]
        console.log(this.list)
      },
      err=>[
        console.log(err)
      ]
    )
  }

  updatePaymentDetails(){
    // console.log("formData.PMid" + this.formData.PMid); // formData.PMid gives undefined, need this in front 
    return this.http.put(this.rootURL + '/PaymentDetail/'+this.formData.PMid, this.formData);
  }
}
