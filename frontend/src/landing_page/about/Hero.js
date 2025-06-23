import React from 'react';

function HeroPage() {
    return (
        <div className='mt-5  container '>
            <div>
                <h1 className=' p-5 text-center fs-2'> We pioneered the discount broking model in India. <br />
                    Now, we are breaking ground with our technology.</h1> < hr className='m-5 text-muted' />
            </div>
            <div className='row p-5 about-Hero-row ' >
                <div className=' col-1'></div>
                <div className='col '>
                    <p>We kick-started operations on the 15th of August, 2010 <br /> with the goal of breaking all barriers that traders and <br />investors face in India in terms of cost, support, and <br />technology. We named the company Zerodha, a <br />combination of Zero and "Rodha", the Sanskrit word for<br /> barrier.</p>
                    <p>Today, our disruptive pricing models and in-house <br />technology have made us the biggest stock broker in <br />India.</p>
                    <p>Over 1.6+ crore clients place billions of orders every year <br />through our powerful ecosystem of investment <br />platforms, contributing over 15% of all Indian retail <br />trading volumes.</p>
                </div>
                <div className='col '>
                    <p>In addition, we run a number of popular open online <br /> educational and community initiatives to empower retail<br />traders and investors.</p>
                    <p><a className='link text-decoration-none' href='#'>Rainmatter</a>, our fintech fund and incubator, has invested <br />in several fintech startups with the goal of growing the <br />Indian capital markets.</p>
                    <p>And yet, we are always up to something new every day. <br />Catch up on the latest updates on our <a className='link text-decoration-none' href='#'> blog</a> or see what <br />the media is <a className='link text-decoration-none' href='#'> saying about us </a>or learn more about our <br />business and product <a className='link text-decoration-none' href='#'> philosophies</a>.</p>
                </div>
                <div className=' col-1'></div>
            </div>
            <h1 className=' p-5 text-center fs-2 text-black'> People <br /> </h1>
            <div className='row people-logo-circle-parent'>
                <div className=' col-5 '><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_0plSJKNSdr-PRYr_V36bNZDdEa_TXeBqg&s" className='people-Logo-circle'></img></div>
                <div className='col p-5'>
                    <p>Kanishk bootstrapped and founded Zerodha in 2010 to overcome the <br />hurdles he faced during his decade long stint as a trader. Today, <br />Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) <br/>and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
                <div className='row'>
                    <div className='col-4 p-2'>
                        <h3 className=' text-black-50 text-center'>Kanishk Gour</h3>
                        <p className=' fs-6 text-black-50 text-center'>Founder</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroPage;