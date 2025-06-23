import React from 'react';

function Hero() {
    return (
        <>
            <div className='container'>
                <div className='row' >
                    <div className='text-center m-5 p-2'>
                        <h1>Zerodha Products</h1>
                        <p className=' mt-3 text-muted'>Sleek, modern, and intuitive trading platforms</p>
                        <p className=' mt-3 text-muted'>Check out our <a className='link text-decoration-none '> investment offerings. <i class="fa-solid fa-arrow-right-long"></i> </a> </p>
                    </div>
                </div>
                <hr />
            </div>
        </>
    );
}

export default Hero;