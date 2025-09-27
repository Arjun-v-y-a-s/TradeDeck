import { useNavigate } from "react-router-dom";

export default function OpenAccount() {
   const  navigate = useNavigate();
   
    const handleClick = ()=>{
        navigate("/signup");
    }
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a TradeDesk account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
                   F&O trades. </p>
                <button onClick={handleClick} className='p-2 btn btn-primary fs-5 mb-5' style={{width : "20%",margin : "0 auto"}}>Signup now</button>
            </div>
       </div>
     );
}