import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
    return (
        <>
            <div className='container mt-5 align-items-center '>
                <div className='row p-5 '>
                    <div className='col'>
                        <div>
                            <h1 className='fs-4 mb-5'>Trust with confidence</h1>

                            <h2 className='fs-4 mb-3 '>Customer-first always</h2>
                            <p className=' text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                            <h2 className='fs-4 mb-3 '>No spam or gimmicks</h2>
                            <p className=' text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                            <h2 className='fs-4 mb-3 '>The Zerodha universe</h2>
                            < p className=' text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                            <h2 className='fs-4 mb-3 '>Do better with money</h2>
                            <p className=' text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money. </p>
                        </div>
                    </div>
                    <div className='col p-5 text-center '>
                        <img src='media/ecosystem.png' alt='Ecosystem' className='w-75'></img>

                        <div className=' text-center'>
                            <Link to='' className=' link-primary text-decoration-none m-3'>Explore our products <i class="fa-solid fa-arrow-right-long"></i></Link>
                            <Link to='' className=' link-primary text-decoration-none m-3'>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i> </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Stats;