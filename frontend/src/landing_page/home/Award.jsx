import React from 'react'

export default function Award() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-5'>
                    <img src='media/largestBroker.svg' alt='largestBroker'></img>
                </div>
                <div className='col-lg-6 col-sm-12 p-5 mt-5'>
                    <h1>Largest stock broker in India </h1>
                    <p className='mb-5'>2+ million clients contribute to over 15% of all retail order volumes in India daily by trading and investing in.</p>
                   
                   <div className='row'>
                        <div className='col-6'>
                          <ul>
                             <li>Futures and Options</li>
                             <li>Commodity derivatives</li>
                             <li>Currency derivatives</li>    
                           </ul> 
                        </div>
                        <div className='col-6'>
                          <ul>
                             <li>Stocks and IPOs</li>
                             <li>Direct mutual funds</li>
                             <li>Bonds & Govt. security</li>   
                           </ul> 
                        </div>
                   </div>

                   <img src='media/pressLogos.png' alt='pressLogos' style={{width : "90%"}}></img>    
                </div>
            </div>
        </div>
     );
}

