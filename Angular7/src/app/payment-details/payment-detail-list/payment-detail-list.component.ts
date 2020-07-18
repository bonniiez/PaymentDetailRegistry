import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: [
  ]
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service:PaymentDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(pd: PaymentDetail){
    console.log("detail list pd", pd);
    this.service.formData = Object.assign({}, pd)
    // this.service.formData={
    //   PMid: pd.PMid,
    //   CardOwnerName: pd.CardOwnerName,
    //   CardNumber: pd.CardNumber,
    //   ExpirationDate: pd.ExpirationDate,
    //   CVV: pd.CVV
    // }
    } 

}
