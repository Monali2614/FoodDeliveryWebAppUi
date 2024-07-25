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
      name: 'Zomato',
      description: 'Payment of online shopping',
      handler: (response: any) => {
        // alert(`Payment successful. Razorpay payment ID: ${response.razorpay_payment_id}`);
        alert("Payment Succesfully")
        // alert(`Payment successful. Razorpay Order ID: ${response.razorpay_order_id}`);
        // alert(`Payment successful. Razorpay Signature: ${response.razorpay_signature}`);
        console.log("Payment successful");
      },
      prefill: {
        name: "Monali Gawargur",
        email: "monalig1426@gmail.com",
        contact: "9970567579"
      },
      theme: {
        color: "#3399cc"
      },
      method: {
        netbanking: true,
        card: true,
        upi: true,
        wallet: true,
        paylater: true
      },
      modal: {
        ondismiss: function() {
          alert("Payment popup closed");
        }
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }
}