import React from 'react';
import CustomNavbar from "./Navbar";
import Footer from "./Footer";

function Payment(props) {
    return (
        <div>
            <CustomNavbar/>

            <div style={{paddingTop: "5%", paddingBottom: "5%", paddingLeft: "10%", paddingRight: "10%"}}>
                <div className="container">
                    <h3>PAYMENT INSTRUCTIONS</h3>
                </div>
                <br/>
                <div className="text-start">
                    <div>
                        <h5>1. HOW TO PAY VIA CASH ON DELIVERY</h5>
                    </div>
                    <div>
                        <ol type="1">
                            <li>Select Cash on Delivery on the payment options. Please make sure the delivery address is
                                within the serviceable area. Cash on Delivery is available only in selected areas.
                            </li>
                            <li>You will be directed to Order Summary page. Please check the important note below. If
                                you are done, click “Confirm my order”.
                            </li>
                            <li>This is a confirmation that your order is now complete. Please check the invoice on your
                                email.
                            </li>
                        </ol>
                    </div>
                    <br/>
                    <div>
                        <h5>2. HOW TO PAY VIA PAYMAYA (ALL VISA/MASTERCARD CREDIT AND DEBIT CARDS)</h5>
                    </div>
                    <div>
                        <ol type={"1"}>
                            <li>Select PayMaya on the payment options. Selecting PayMaya will automatically direct you
                                to the PayMaya Checkout page.
                            </li>
                            <li>Check if amount indicated is correct, and then enter your card details. Click to confirm
                                the payment.
                            </li>
                            <li>Wait for the site to process your payment. Do not close the window at this time. Wait
                                for the page to redirect you back to site.
                            </li>
                            <li>Check your email for your PayMaya receipt and invoice. There is no need to email it to
                                us as we automatically receive PayMaya notifications once a payment has been made to our
                                account.
                            </li>
                        </ol>
                    </div>
                    <br/>
                    <div>
                        <h5>3. HOW TO PAY VIA DRAGONPAY</h5>
                    </div>
                    <div>
                        <p>DragonPay allows you to pay through the following:</p>
                        <ol type={"1"}>
                            <li>Major Banks (BDO, BPI, Chinabank, Metrobank, RCBC, Unionbank, UCPB and Landbank) -
                                online and over the counter payments.
                            </li>
                            <li>SM Bills Payment Center</li>
                            <li>Robinsons Business Center</li>
                            <li>LBC</li>
                            <li>Bayad Center</li>
                            <li>M Lhuillier</li>
                            <li>GCash</li>
                        </ol>
                        <p>Follow these steps to pay using DragonPay:</p>
                        <ol type={"1"}>
                            <li>Select DragonPay on the payment options.</li>
                            <li>Click “I confirm my order” for order confirmation.</li>
                            <li>You will be directed to the DragonPay page. Select your preferred fund source from the
                                drop-down menu.
                            </li>
                            <li>Take note of the DragonPay generated reference number. Input your email address to
                                receive payment instructions or simply click on the link provided. Please note
                                instructions for each Fund Source may differ depending on the bank policy.
                            </li>
                            <li>Check your email for the selected fund source-specific instructions and complete your
                                payment accordingly. Please make sure all steps have been followed, otherwise, payment
                                may be rendered invalid.
                            </li>
                            <li>Pay to your selected bank. Please make sure to take note the Bank, DragonPay Reference
                                number, Account Number, Account Name and Amount. When deposit is completed, go to the
                                provided link from the instruction, and fill up the details within the same day to
                                validate.
                            </li>
                            <li>Once your payment has been confirmed, you will receive payment confirmation from
                                DragonPay. This can take up to 24 hours. There is no need to email it to us as we
                                automatically receive DragonPay notifications once a payment has been successfully
                                confirmed to our account.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default Payment;