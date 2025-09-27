import React from 'react'

export default function LeftSection({ imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row mt-4 '>
                <div className='col-6 p-3'>
                    <img src={imageUrl} alt='imageUrl' style={{ width: "90%" }} />
                </div>
                <div className='col-6  mt-5 p-4'>
                    <h1 className='mt-4'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='mt-3'>
                        <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo   <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href={learnMore} style={{ marginLeft: "50px", textDecoration: "none" }}>Learn More  <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}> <img src='media/googlePlayBadge.svg' /> </a>
                        <a href={appStore} style={{ marginLeft: "50px" }}> <img src='media/appstoreBadge.svg' /> </a>
                    </div>


                </div>
            </div>
        </div>
    );
}