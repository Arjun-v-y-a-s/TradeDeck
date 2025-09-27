import React , { useState ,useContext} from "react";

import {Tooltip,Grow, Button} from '@mui/material';

import GeneralContext from "./GeneralContext";

import {watchlist} from '../data/data';

import {BarChartOutlined, KeyboardArrowDown,  KeyboardArrowUp, MoreHoriz} from '@mui/icons-material';
import { DoughnutGraph } from "./DoughnutGraph";

  const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {

  const data ={
    labels,
    datasets :[
       {
      label: 'Price',
      data: watchlist.map((stock) => stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
    ]
  }

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length}/ 50</span>
      </div>

      <ul className="list">
        { watchlist.map((stock,index)=>{
          return (
          <WatchListItem stock={stock} key={index} />
          )
        })}
      </ul>
      <DoughnutGraph data={data}/>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({stock}) =>{
  const [showWatchListActions ,setShowWatchListActions] = useState(false);

  const handleMouseEnter =(e) =>{
    setShowWatchListActions(true);
  }
     const handleMouseExit =(e) =>{
    setShowWatchListActions(false);
  }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
          <p className={stock.isDown ? "down" : "up"}> {stock.name} </p>
          <div className="item-info myHover">
            <span className="percent"> {stock.percent} </span>
            {stock.isDown ? (
              <KeyboardArrowDown className="down" />
            ) : <KeyboardArrowUp className="up" /> }
             <span className="price"> {stock.price} </span>
          </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name}/>}
    </li>
  )
}


const WatchListActions = ({uid}) =>{
const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () =>{
    generalContext.openSellWindow(uid);
  }
  return (
    <span className="actions">
      <span className="mySpan">
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy"  onClick={handleBuyClick}>Buy</button>
        </Tooltip>&nbsp;
        <Tooltip title="Sell (s)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell" onClick={handleSellClick}>Sell</button>&nbsp;
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>&nbsp;
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon"/>
          </button>&nbsp;
        </Tooltip>
      </span>
    </span>
  )
}