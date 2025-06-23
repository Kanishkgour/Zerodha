import React from 'react';

function Awards() {
    return (
        <>
            <div className='container mt-5'>
                <div className='row '>
                    <div className='col'>
                        <img src='media/largestBroker.svg' alt='Troffee'></img>

                    </div>
                    <div className='col '>
                        <h1>largest stock broker in India</h1>
                        <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>

                        <div className='row' >
                            <div className='col'>
                                <ul>

                                    <li><p>Features and Options</p></li>
                                    <li><p>Commodity derivatives</p></li>
                                    <li><p>Currency derivatives</p></li>
                                </ul>
                            </div>
                            <div className='col'>
                                <ul>

                                    <li><p>Stocks & IPO's</p></li>
                                    <li><p>Direct mutual funds</p></li>
                                    <li><p>Bonds and Govt. Securities</p></li>
                                </ul>
                            </div>
                        </div>

                        <img src='media/pressLogos.png' alt='logos' className=' w-100' ></img>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Awards;