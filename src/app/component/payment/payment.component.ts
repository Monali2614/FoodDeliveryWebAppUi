import { Component } from '@angular/core';
import { TransactionService } from 'src/app/service/transaction.service';


declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  
  constructor(private transactionService: TransactionService) { }

  makePayment(amount: number) {
    this.transactionService.createTransaction(amount).subscribe(
      (transactionDetails) => {
        this.payWithRazorpay(transactionDetails);
      },
      (error) => {
        console.error('Error creating transaction', error);
      }
    );
  }

  payWithRazorpay(transactionDetails: any) {
    const options = {
      key: transactionDetails.key,
      amount: transactionDetails.amount,
      currency: transactionDetails.currency,
      order_id: transactionDetails.orderId,
      handler: (response: any) => {
        alert(`Payment successful. Razorpay payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Your Name",
        email: "your.email@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }
}
