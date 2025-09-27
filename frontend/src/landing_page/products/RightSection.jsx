import React from 'react'

export default function RightSection({ imageUrl, productName, productDescription, learnMore, }) {
    return ( 
         <div className='container mt-5 mb-5'>
            <div className='row mt-4'>
                
                <div className='col-6  mt-5 p-4'>
                    <h1 className='mt-4'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='mt-3'>
                        <a href={learnMore} style={{  textDecoration: "none" }}>Learn More  <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    
                </div>

                <div className='col-6 p-3'>
                    <img src={imageUrl} alt='imageUrl' style={{ width: "90%" }} />
                </div>
            </div>
        </div>
    );
}