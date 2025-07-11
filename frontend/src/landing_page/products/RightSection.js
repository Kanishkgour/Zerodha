import React from 'react';

function RightSection({ ImageUrl, productName, productDesription, learnMore }) {
    return (
        <>
            <div className=' container '>
                <div className=' row prodctRow  '>



                    <div className=' col-5 p-5  '>
                        <div className=' mt-5 p-3' >
                            <h1 className=' mt-5'>{productName}</h1>
                            <p className=' p-0 mb-0'>{productDesription}</p>
                        </div>
                        <div className=' p-3' >
                            <a className='link text-decoration-none ' style={{ marginRight: "3rem" }} href={learnMore}>Learn More  <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                    <div className=' col-1 p-5'></div>
                    <div className=' col-6 '>
                        <img src={ImageUrl}></img>
                    </div>

                </div>
            </div>
        </>
    );
}

export default RightSection;