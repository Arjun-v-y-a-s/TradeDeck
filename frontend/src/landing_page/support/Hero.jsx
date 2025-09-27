import React from 'react'

export default function Hero() {
    return (
        <div className='container-fluid ' id='SupportHero'>
            <div className='' id='SupportWrapper'>
                <h4>Support Portal</h4>
                <a href='' style={{paddingRight:"200px"}}>Track Tickets</a>
            </div>
            <div className='row p-3 mb-5 ' >
                <div className='col-6 p-5 mb-3' >
                    <h1 className='fs-3 mb-3'> Search for an answer or browse help topics to create a ticket</h1>
                    <input className=' mb-3' placeholder='Eg. how do I activate F&O,why is my order getting rejected'  />
                   <br/>
                    <a href="">Track account opening</a>
                    <a href="">Track segment activation</a>
                    <a href="">Intraday margins</a>
                    <a href="">Kite user manual</a>
                </div>
                <div className='col-6 p-5 mb-5 ' >
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li>
                            <a href="">Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                            <a href="">Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}