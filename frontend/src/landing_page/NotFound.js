import React from 'react';

function NotFound() {
    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center bg-light" style={{ fontFamily: "apple-sans", height: "25rem" }} >
                <h1 className="  " style={{ fontSize: "3rem" }} >We are sorry, the page you requested cannot be found. </h1>
                <p className="text-muted mt-3 " style={{ fontSize: "1.5rem" }} >The URL may be misspelled or the page you're looking for is no longer available.</p>
                <a href="/" ><button className=' p-2  mx-auto mt-3 signup-Btn '>Back to Home</button></a>

            </div>
        </>
    );
}

export default NotFound;