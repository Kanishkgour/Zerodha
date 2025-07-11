import React from 'react';

function Universe() {
    return (
        <>
            <div className=' container mt-5'>
                <p className=' fs-5 text-center mt-3'>Want to know more about our technology stack? Check out the <a className=' link text-decoration-none'>Zerodha.tech</a>  blog.</p>
                <h4 className='text-center m-5'>The Zerodha Universe.</h4>

                <div className='row  p-3 mt-5 text-center '>
                    <div className='col  '>
                        <img alt='fundhouse' className=" universe-images " src='media/zerodhaFundhouse.png'></img>
                        <p className='mt-1 text-muted p-2' style={{ fontSize: "0.8rem" }}>Our asset management venture<br />
                            that is creating simple and transparent index<br />
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className='col   '>
                        <img alt='sensibull' className="universe-images" src='media/sensibullLogo.svg'></img>
                        <p className='mt-1 text-muted p-2' style={{ fontSize: "0.8rem" }}>Options trading platform that lets you<br />
                            create strategies, analyze positions, and examine<br />
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                    <div className='col  '>
                        <img alt='tijori' className=" universe-images " src='media/tijori.svg'></img>
                        <p className='mt-1 text-muted p-2' style={{ fontSize: "0.8rem" }}>Investment research platform<br />
                            that offers detailed insights on stocks,<br />
                            sectors, supply chains, and more.sss
                        </p>
                    </div>
                </div>
                <div className='row  p-3 text-center '>

                    <div className='col   '>
                        <img alt='streakLogo' className="universe-images" src='media/streakLogo.png'></img>
                        <p className='mt-1 text-muted p-2' style={{ fontSize: "0.8rem" }}>Systematic trading platform <br />
                            that allows you to create and backtest<br />
                            strategies without coding.</p>
                    </div>
                    <div className='col   '>
                        <img alt='smallCase' className="universe-images" src='media/smallcaseLogo.png'></img>
                        <p className='mt-1 text-muted p-2' style={{ fontSize: "0.8rem" }}>Thematic investing  <br />
                            that helps you invest in diversified<br />
                            baskets of stocks on ETFs.
                        </p>
                    </div>
                    <div className='col   '>
                        <img className="universe-images" src='media/dittoLogo.png' alt='universe'></img>
                        <p className='mt-1 text-muted p-2' style={{ fontSize: "0.8rem" }}>Personalized advice on life<br />
                            and health insurance. No spam<br />
                            and no mis-selling.</p>
                    </div>
                </div>
                <div className='row text-center'>
                    <button className=' p-2  mx-auto mt-3 signup-Btn ' > <a href='/signup' className=' text-decoration-none text-white'>Sign up for free</a> </button>

                </div>

            </div>
        </>
    );
}

export default Universe;