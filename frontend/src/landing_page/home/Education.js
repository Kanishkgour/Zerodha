import React from 'react';
import { Link } from 'react-router-dom';


function Education() {
    return (
        <div className='container mt-5 p-5'>
            <div className='row p-5'>
                <div className='col-4 '>
                    <img className=' mx-auto' src='media/education.svg' alt='educationmedia'></img>
                </div>
                <div className='col-2'></div>
                <div className='col-6 p-2'>
                    <h1 className=' fs-3'>Free and open market education</h1>
                    <br />

                    <p className=' text-muted mt-3 '>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <Link to='#' className=' link-primary text-decoration-none mb-5 '>Varsity </Link>

                    <p className=' text-muted mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <Link to='#' className=' link-primary text-decoration-none'>TradingQ&A </Link></div>
            </div>
        </div>
    );
}

export default Education;


