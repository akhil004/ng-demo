/**
 * 
 */
export class StripePaymentModel {

    paymentToken: string;
    chargeUniqueId: string;
    chargeAmount: number;
    description: string;
    receiptEmail: string;
    status: string;
    failure_message: string;
    chargeToatlAmountRefunded: number;
    applicationFee: number;
    balanceTransaction: string;
    currency: string;
    refundUniqueId: string;
    refundAmount: number;
    refundReason: string;
}