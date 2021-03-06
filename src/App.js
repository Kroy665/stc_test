// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
// import axios from "axios";

function App() {
    const createOTPurl =
        "https://Test.B2B.stcpay.com.sa/B2B.DirectPayment.WebApi/DirectPayment/V4/DirectPaymentAuthorize";
    const [postData, setPostData] = useState({
        BranchID: "string",
        TellerID: "string",
        DeviceID: "string",
        RefNum: "123457",
        BillNumber: "333",
        MobileNo: "966539342897",
        Amount: "100",
        MerchantNote: "string",
    });
    const onDataChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPostData((values) => ({ ...values, [name]: value }));
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(postData);

        const headers = {
            "Content-Type": "application/json",
            "X-ClientCode": "61238669970",
        };
        // const sendData = async () => {
        //     const data = await axios.get(
        //         createOTPurl,
        //         {
        //             DirectPaymentAuthorizeV4RequestMessage: postData,
        //         },
        //         {
        //             mode: "no-cors",
        //             headers: headers,
        //         }
        //     );
        //     console.log(data);
        // };
        // sendData();

        const requestOptions = {
            method: "POST",
            mode: "no-cors",
            headers: headers,
            body: {
                DirectPaymentAuthorizeV4RequestMessage: postData,
            },
        };
        fetch(createOTPurl, requestOptions)
            .then((response) => console.log(response))
            .then((data) => console.log(data));
    };

    return (
        <div className="App">
            <form onSubmit={onFormSubmit}>
                <label htmlFor="Amount">Amount</label>
                <input
                    type="text"
                    name="Amount"
                    value={postData.Amount}
                    onChange={onDataChange}
                />
                <label htmlFor="MobileNo">Mobile No</label>
                <input
                    type="number"
                    value={postData.MobileNo}
                    name="MobileNo"
                    onChange={onDataChange}
                />
                <input type="submit" />
            </form>
        </div>
    );
}

export default App;
