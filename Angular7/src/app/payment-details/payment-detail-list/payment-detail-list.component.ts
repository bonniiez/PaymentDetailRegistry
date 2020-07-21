import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: [
  ]
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service: PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(pd: PaymentDetail) {
    this.service.formData = Object.assign({}, pd)
    // this.service.formData={
    //   PMid: pd.PMid,
    //   CardOwnerName: pd.CardOwnerName,
    //   CardNumber: pd.CardNumber,
    //   ExpirationDate: pd.ExpirationDate,
    //   CVV: pd.CVV
    // }
  }

  deleteRecord(PMid: number) {
    this.confirmDelete(PMid);
  }

  confirmDelete(PMid: number) {
    if (confirm("Are you sure you want to delete" + this.service.formData.CardOwnerName)) {
      console.log("confirmed delete");
      this.service.deletePaymentDetails(PMid).subscribe(
        res => {
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Payment Detail Register');
        },
        err => {
          console.log("error deleting record");
        }
      );
    }
  }

}
