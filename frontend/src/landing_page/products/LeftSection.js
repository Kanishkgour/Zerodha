import React from 'react';

function LeftSection({ ImageUrl, productName, productDesription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <>
            <div className=' container '>
                <div className=' row '>
                    <div className=' col-5 p-5'>
                        <img src={ImageUrl}></img>
                    </div>
                    <div className=' col-1 p-5'></div>
                    <div className=' col-6  mt-5  '>
                        <div className=' mt-5 p-3' >
                            <h1>{productName}</h1>
                            <p className=' p-0 mb-0'>{productDesription}</p>
                        </div>
                        <div className=' p-3' >
                            <a className='link text-decoration-none ' style={{marginRight  : "3rem"}}  href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                            <a className='link text-decoration-none ' href={learnMore}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                        <div className=' p-3'>
                            <a className='link text-decoration-none ' style={{marginRight  : "1.5rem"}} href={googlePlay}><img src="./media/googlePlayBadge.svg" alt='google play' style={{width  : "10rem"}} ></img></a>
                            <a className='link text-decoration-none ' href={appStore}><img src='./media/appstoreBadge.svg' style={{width  : "10rem"}} ></img></a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftSection;