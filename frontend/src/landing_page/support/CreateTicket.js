import React from 'react';

function CreateTicket() {
    return (
        <>
            <div className=' container p-3 mt-5'>
                <p className=' fs-4 p-3 fw-bold lh-2'>To create a ticket, select a relevant topic.</p>
                <div className=' row p-3'>
                    <div className='col'>
                        <p className=' fs-4 mb-4'>  <a href='#' className='link text-decoration-none text-dark'> <i class=" text-black-50 fa-solid fa-circle-plus"></i> Account Opening</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none ' >Resident individual</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none ' >Minor</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none ' >Non Resident Indian (NRI)</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none ' >Company, Partnership, HUF and LLP</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none ' >Glossary</a></p>
                    </div>
                    <div className='col'>
                        <p className=' fs-4 mb-4'>  <a href='#' className='link text-decoration-none text-dark'><i class=" text-black-50 fa-solid fa-user"></i> Your Zerodha Account</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Your Profile</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Account modification</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Client Master Report (CMR) and <br />Depository Participant (DP)</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Nomination</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Transfer and conversion of securities</a></p>
                    </div>
                    <div className='col'>
                        <p className=' fs-4 mb-4'> <a href='#' className='link text-decoration-none text-dark'> <i class=" text-black-50 fa-solid fa-chart-line"></i> Kite</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>IPO</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Trading FAQs</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Margin Trading Facility (MTF) and Margins</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Charts and orders</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Alerts and Nudges</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>General</a></p>
                    </div>
                </div>
                <div className=' row p-3'>
                    <div className='col'>
                        <p className=' fs-4 mb-4'>  <a href='#' className='link text-decoration-none text-dark'> <i class=" text-black-50 fa-solid fa-wallet"></i>  Funds</a></p>
                        <p  className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Add money</a></p>
                        <p  className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Withdraw money</a></p>
                        <p  className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Add bank accounts</a></p>
                        <p  className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>eMandates</a></p>
                    </div>
                    <div className='col'>
                        <p className=' fs-4 mb-4'>  <a href='#' className='link text-decoration-none text-dark'><i class=" text-black-50 fa-solid fa-circle-nodes"></i> Console</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Portfolio</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Corporate actions</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Funds statement</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Reports</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Profile</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Segments</a></p>
                    </div>
                    <div className='col'>
                        <p className=' fs-4 mb-4'> <a href='#' className='link text-decoration-none text-dark'> <i class=" text-black-50 fa-solid fa-coins"></i> Coin</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Understanding mutual funds and Coin</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Coin app</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Coin web</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>Transactions and reports</a></p>
                        <p className='createTicket_anchor'> <a href='#' className='link text-decoration-none'>National Pension Scheme (NPS)</a></p>
                    </div>
                </div>
            </div >
        </>
    );
}

export default CreateTicket;