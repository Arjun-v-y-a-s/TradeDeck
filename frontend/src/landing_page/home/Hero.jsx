import { useNavigate } from "react-router-dom";

export default function Hero() {
     const  navigate = useNavigate();
   
    const handleClick = ()=>{
        navigate("/signup");
    }
    return ( 
       <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/homeHero.png' alt="homeHero" className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stock , derivatives , mutual funds and more </p>
                <button onClick={handleClick} className='p-2 btn btn-primary fs-5 mb-5' style={{width : "20%",margin : "0 auto"}}>Signup now</button>
            </div>
       </div>
     );
}