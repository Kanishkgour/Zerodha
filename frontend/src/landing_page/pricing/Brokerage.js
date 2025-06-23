
function Brokerage() {
    return (
        <>
            <div className=' container mt-5 brokerage-table'>
                <table className=' justify-content-center align-items-center p-5 ' >

                    <tr>
                        <th></th>
                        <th>Equity delivery</th>
                        <th>Equity intraday</th>
                        <th>F&O - Futures</th>
                        <th>F&O - Options</th>
                    </tr>

                    <tr>
                        <td>Brokerage</td>
                        <td>Zero Brokerage	</td>
                        <td>/0.03% or Rs. 20/executed order whichever is lower	</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower	</td>
                        <td>Flat Rs. 20 per executed order</td>
                    </tr>
                    <tr>
                        <td>STT/CTT	</td>
                        <td>0.1% on buy & sell	</td>
                        <td>0.025% on the sell side	</td>
                        <td>0.02% on the sell side	</td>
                        <td>
                            <ul>
                                <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                                <li>0.1% on sell side (on premium)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Transaction charges	</td>
                        <td>NSE: 0.00297% <br /> BSE: 0.00375%	</td>
                        <td>NSE: 0.00297% <br />BSE: 0.00375%	</td>
                        <td>NSE: 0.00173% <br />BSE: 0	</td>
                        <td>NSE: 0.03503% (on premium) <br />BSE: 0.0325% (on premium) </td>
                    </tr>
                    <tr>
                        <td>GST</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    </tr>
                    <tr>
                        <td>SEBI charges	</td>
                        <td>₹10 / crore	</td>
                        <td>₹10 / crore	</td>
                        <td>₹10 / crore	</td>
                        <td>₹10 / crore	</td>
                    </tr>
                    <tr>
                        <td>Stamp charges</td>
                        <td>0.015% or ₹1500 / crore on buy side</td>
                        <td>0.003% or ₹300 / crore on buy side	</td>
                        <td>0.002% or ₹200 / crore on buy side	</td>
                        <td>0.003% or ₹300 / crore on buy side </td>
                    </tr>

                </table>
                <div className="mt-4 charges">
                    <h4 className=" fs-5 text-secondary">Charges explained</h4>
                    <div className=" row mt-4 p-4">
                        <div className="col">
                            <h6>Securities/Commodities transaction tax</h6>
                            <p className="charges-para text-muted">
                                Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
                            </p>
                            <p className=" charges-para text-muted">When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

                            <h6>Transaction/Turnover Charges</h6>
                            <p className="charges-para text-muted">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                            <p className=" charges-para text-muted">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                            <p className="charges-para text-muted">BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover</p>
                            <p className="charges-para text-muted">BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                            <p className="charges-para text-muted">BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

                        </div>
                        <div className="col">
                            <h6 >GST</h6>
                            <p className=" charges-para text-muted">Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                            <h6 >SEBI Charges</h6>
                            <p className=" charges-para text-muted">Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                            <h6 >DP (Depository participant) charges</h6>
                            <p className=" charges-para text-muted">₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                            <p className=" charges-para text-muted">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                            <p className=" charges-para text-muted">Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                            <h6>Pledging charges</h6>
                            <p className=" charges-para text-muted">₹30 + GST per pledge request per ISIN.</p>

                        </div>
                    </div>


                    <div className=" mt-4 disclaimer ">
                        <h6 className=" fs-5 text-secondary">Disclaimer</h6>
                        <p className=" fs-6 text-muted">
                            For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges.
                            Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and
                            assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
                            brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1%
                            will be charged.
                        </p>

                    </div>
                </div>



                    <h4 class="fs-3 mt-5 text-secondary">Charges for Account Opening</h4>
                <div class="container charges p-5 bg-light rounded shadow">
                    <div class="row mt-4">
                        <div class="col-md-10">
                            <p class="fs-5 fw-bold">Types of Account</p>
                            <ul class="list-group">
                                <li class="list-group-item">Online Account</li>
                                <li class="list-group-item">Offline Account</li>
                                <li class="list-group-item">NRI Account (Offline Only)</li>
                                <li class="list-group-item">Partnership, LLP, HUF, or Corporate Accounts (Offline Only)</li>
                            </ul>
                        </div>

                        <div class="col-md-2">
                            <p class="fs-5 fw-bold">Charges</p>
                            <ul class="list-group">
                                <li class="list-group-item">Free</li>
                                <li class="list-group-item">Free</li>
                                <li class="list-group-item">₹ 500</li>
                                <li class="list-group-item">₹ 500</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Brokerage;