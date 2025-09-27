import {useNavigate} from "react-router-dom";

export default function Universe() {
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate("/signup");
    }
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row mt-4 text-center'>
                <h1>Our TradeDesk Universe</h1>
                <p>Extend your trading and investment experience even further with our
          partner platforms</p>
             
                <div className='col-4 p-3 mt-5'>
                    <img src="media/smallcaseLogo.png" alt='smallcaseLogo'  />
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                     <img src="media/streakLogo.png" alt='streakLogo' style={{ width: "40%" }} />
                    <p className='text-small text-muted'>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                     <img src="media/sensibullLogo.svg" alt='sensibullLogo' style={{ width: "50%" }}  />
                    <p className='text-small text-muted'>Options trading platform</p>
                </div> 

                 <div className='col-4 p-3 mt-5'>
                    <img src="media/zerodhaFundhouse.png" alt='zerodhaFundhouse.png' style={{ width: "50%" }}  />
                    <p className='text-small text-muted'>Asset management</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                     <img src="media/goldenpiLogo.png" alt='goldenpiLogo' style={{ width: "50%" }}  />
                    <p className='text-small text-muted'>Bonds trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                     <img src="media/dittoLogo.png" alt='dittoLogo' style={{ width: "30%" }}  />
                    <p className='text-small text-muted'>Insurance</p>
                </div>
                <button onClick={handleClick} className='p-2 btn btn-primary fs-5 mb-5' style={{width : "20%",margin : "0 auto"}}>Signup now</button>
            </div>
        </div>
    );
}