import React from 'react';
function Hero() {
    return (
        <>
            <section className=' container-fluid supportSection' >
                <div className=' text-light mx-auto'>
                    <div className=' row justify-content-between'>
                        <div className='col p-5  '>
                            <h1 className=' fs-4 mb-5'>Support Portal</h1>
                            <p className=' fs-5'>Search for an answer or browse help topics to create a <br />ticket</p>
                            <div class="input-group mb-3">
                                <input className='search-support text-center form-control' type='search' placeholder='Eg: how do i activate F&O, why is my order getting rejected ... ' ></input>
                                <span class="input-group-text border-0" id="basic-addon1"><a className=' text-decoration-none text-dark'><i class="fa-brands fa-sistrix"></i></a></span>
                            </div>
                            <div className=' row mt-3'>
                                <div className=' col'><a href='#' className='link  text-decoration-underline text-light' > Track account opening</a></div>
                                <div className=' col'> <a href='#' className='link  text-decoration-underline text-light'  >Track segment activation</a></div>
                                <div className=' col'> <a href='#' className='link  text-decoration-underline text-light'  >Intraday margins</a></div>
                            </div>
                            <div className='row mt-3'>
                                <div className=' col'><a href='#' className='link  text-decoration-underline text-light' > Kite user manual</a></div>
                            </div>
                        </div>
                        <div className='col p-5  '>
                            <h1 className='  fs-4 text-end mb-5 text-decoration-underline' style={{ textAlign: "right o" }}>Track tickets</h1>
                            <h1 className=' fs-4 mt-5 '>Featured</h1>
                            <ol>
                                <li><h3 className=' fs-6 text-decoration-underline mt-4' >Current Takeovers and Delisting – May 2025</h3></li>
                                <li><h3 className=' fs-6 text-decoration-underline  mt-4'>Rights Entitlements listing in May 2025</h3></li>
                            </ol>


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;