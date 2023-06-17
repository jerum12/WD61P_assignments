import React from 'react';
import CustomNavbar from "./Navbar";
import Footer from "./Footer";

function Returns(props) {
    return (

        <div>
            <CustomNavbar/>

            <div className="container text-start" style={{padding: "5%"}}>
                <div>
                    <b>Returns and Exchange</b>
                </div>
                <br/>
                <div style={{padding: "0 3%"}}>
                    <p>
                        At Pet Shop PH, we take pride in providing exceptional customer service and ensuring
                        your satisfaction. Our dedicated team is always here to listen and address any concerns you may
                        have. We believe in open and honest communication, making it easy for you to reach out to us
                        with any issues you encounter.
                    </p>
                    <p>
                        If for any reason you encounter a problem with a product that we have delivered to you, we
                        encourage you to get in touch with us. Our friendly and knowledgeable Customer Service
                        Supervisor is ready to assist you promptly. Simply send us an email at <a style={{
                        textDecoration: "none",
                        color: "#0e4d92",
                        fontSize: "13px"
                    }} href="mailto:petwarehouseph@gmail.com"> petwarehouseph@gmail.com</a>,
                        providing us with all the necessary details about the issue you are facing. We value your
                        feedback and will make every effort to resolve the matter to your satisfaction.
                    </p>
                    <p>
                        We understand the importance of keeping our customers happy, and your experience with us is of
                        utmost importance. Rest assured that we will give your concern the attention it deserves and
                        provide you with a timely response. Our goal is to ensure that you have a positive and enjoyable
                        shopping experience with us.
                    </p>
                    <p>
                        Thank you for choosing Pet Shop PH. We appreciate your trust in our products and
                        services, and we look forward to serving you with excellence.
                    </p>
                    <p>
                        Best Regards,
                    </p>
                    <p>
                        Pet Shop PH
                    </p>
                </div>
                <br/>
                <div>
                    <b>RETURN AND EXCHANGE POLICY</b>
                </div>
                <br/>
                <div style={{padding: "0 3%"}}>
                    <p>
                        All items sold at Pet Warehouse go through our quality control procedures. We inspect every item
                        before it is shipped, and all goods are shipped fully insured in case of loss or damage.
                    </p>
                    <p>
                        However, there are times when items are damaged, defective, or incorrectly shipped. If this is
                        the case for you, we will gladly replace them. If you have a need to return goods to us for
                        whatever reason please email <a style={{
                        textDecoration: "none",
                        color: "#0e4d92",
                        fontSize: "13px"
                    }} href="mailto:petwarehouseph@gmail.com"> petwarehouseph@gmail.com</a> outlining the reason for
                        return and request
                        your Returns Merchandise Authorization (RMA) number within 7 days of order receipt, and return
                        your unwanted items within 14 days of receiving your RMA number for an exchange for the same
                        item in a different size or any product that we carry. (Based on stock availability).
                    </p>
                    <p>
                        We recommend that you insure the return shipment as you are under a duty to take reasonable care
                        of the goods and will be liable for damage to them until we receive them at our operations
                        center. In case of dispute, we also recommend you retain proof of sending.
                    </p>
                    <p>
                        If the items shipped are defective or different from the ones you ordered, we will be
                        shouldering the cost of all shipping fees incurred. If you refuse the order or you want to
                        change it due to preference, you will be charged for all shipping, delivery and storage
                        incurred. All returned merchandise must be unopened and in original condition.
                    </p>
                    <p>
                        All merchandise must be returned in the condition they were received and in original packaging.
                    </p>
                </div>
            </div>

            <Footer/>
        </div>

    );
}

export default Returns;