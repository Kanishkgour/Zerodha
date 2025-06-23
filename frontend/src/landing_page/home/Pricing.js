import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <h1 className=' fs-3 mb-3'>Unbeatable pricing</h1>
                        <p className=' text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <Link to='/' className=' link-primary text-decoration-none m-3'>See Pricing <i class="fa-solid fa-arrow-right-long"></i> </Link>

                    </div>
                    <div className='col-2'>
                        {/* Empty for spacing */}
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col border d-flex justify-content-center align-items-center flex-column text-center'>
                                <h1 className=' mb-3' >₹0</h1>
                                <p>Free equity delivery  <br />and direct mutual funds</p>
                            </div>
                            <div className='col border d-flex justify-content-center align-items-center flex-column  text-center'>
                                <h1 className=' mb-3' >₹20</h1>
                                <p>Intraday and F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;