import React from 'react';
function Hero() {
    return (
        <>
            <div className=' container mt-5' >
                <div className='  mt-5 text-center'>
                    <h1 className=' mt-5'>Charges</h1>
                    <p className=' mb-5 text-muted'>List of all charges and taxes.</p>
                </div >

                <div className='row mt-5 p-3 text-center'>
                    <div className=' col '>
                        <img alt='pricingImage' className='pricing-img' src='media/pricing0.svg'></img>
                        <h2 className=' fs-4' >Free equity delivery</h2>
                        <p className=' text-muted pricing-p '>All equity delivery investments (NSE, BSE), <br />are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className=' col '>
                        <img alt='pricingImage' className='pricing-img' src='media/pricing20.svg'></img>
                        <h2 className=' fs-4' >Intraday and F&O trades</h2>
                        <p className=' text-muted pricing-p '>Flat ₹ 20 or 0.03% (whichever is lower) per <br />executed order on intraday trades across <br />equity, currency, and commodity trades. Flat <br />₹20 on all option trades.</p>
                    </div>
                    <div className=' col '>
                        <img alt='pricingImage' className='pricing-img' src='media/pricingMF.svg'></img>
                        <h2 className=' fs-4' >Free direct MF</h2>
                        <p className=' text-muted pricing-p '>All direct mutual fund investments are <br />absolutely free — ₹ 0 commissions & DP <br />charges.</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Hero;