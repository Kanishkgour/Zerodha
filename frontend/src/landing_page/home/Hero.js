import React from 'react';

function Hero() {
    return (
        <>
            <div className='container p-5'>
                <div className='row text-center'>
                    <img src="media/homeHero.png" alt='HeroImage' className='mb-5' ></img>
                    <h1 className='mt-5'>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds and more.</p>
                    <button className=' p-2  mx-auto mt-3 signup-Btn ' > <a href='/signup' className=' text-decoration-none text-white'>Sign up for free</a> </button>


                </div>
            </div>
        </>
    );
}

export default Hero;