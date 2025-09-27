import React from 'react';
import {Link} from 'react-router-dom';

export default function Team() {
    return (
        <div className="container">
            <div className="row p-3 mt-5 border-top">
                <h1 className="text-center ">People</h1>
            </div>

            <div
                className="row p-3 text-muted"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >
                <div className="col-6 p-3 text-center">
                    <img
                        src="media/arjun_AI4.jpg"
                        style={{ borderRadius: "20%", width: "45%" , boxShadow:"2px 2px 5px black" }}
                    />
                    <h4 className="mt-5">Arjun Sharma</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className="col-6 p-3">
                    <p>
                        Arjun bootstrapped and founded TradeDesk in 2020 to overcome the
                        hurdles he faced during his time long stint as a trader. Today,
                        TradeDesk has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee
                        (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing football is his zen.</p>
                    <p>
                        Connect on <Link to="/" style={{textDecoration : "none"}}>Homepage</Link> /
                        &nbsp;<Link href="" style={{textDecoration : "none"}}>TradingQnA</Link> / 
                        &nbsp;<a href="https://x.com/?&" style={{textDecoration : "none"}}>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

