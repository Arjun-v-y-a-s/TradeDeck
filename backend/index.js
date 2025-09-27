
require("dotenv").config();

const cookieParser = require("cookie-parser");

const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const {userVerification} = require("./middlewares/AuthMiddleware")
const mongoose = require("mongoose");
const HoldingsModel = require("./model/HoldingsModel");
const {PositionModel} = require("./model/PositionsModel");
const {OrdersModel} = require("./model/OrdersModel");
const { Signup , Login} = require("./controllers/authController");
const app = express();


const PORT = process.env.PORT || 8080;
const URI = process.env.MONGO_URL;


// app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173"], 
  credentials: true, // cookies allow karne ke liye
};
app.use(cors(corsOptions));



// app.get("/addHoldings",(req,res)=>{
// //     let tempHoldings = [
     
// //   {
// //     name: "BHARTIARTL",
// //     qty: 2,
// //     avg: 538.05,
// //     price: 541.15,
// //     net: "+0.58%",
// //     day: "+2.99%",
// //   },
// //   {
// //     name: "HDFCBANK",
// //     qty: 2,
// //     avg: 1383.4,
// //     price: 1522.35,
// //     net: "+10.04%",
// //     day: "+0.11%",
// //   },
// //   {
// //     name: "HINDUNILVR",
// //     qty: 1,
// //     avg: 2335.85,
// //     price: 2417.4,
// //     net: "+3.49%",
// //     day: "+0.21%",
// //   },
// //   {
// //     name: "INFY",
// //     qty: 1,
// //     avg: 1350.5,
// //     price: 1555.45,
// //     net: "+15.18%",
// //     day: "-1.60%",
// //     isLoss: true,
// //   },
// //   {
// //     name: "ITC",
// //     qty: 5,
// //     avg: 202.0,
// //     price: 207.9,
// //     net: "+2.92%",
// //     day: "+0.80%",
// //   },
// //   {
// //     name: "KPITTECH",
// //     qty: 5,
// //     avg: 250.3,
// //     price: 266.45,
// //     net: "+6.45%",
// //     day: "+3.54%",
// //   },
// //   {
// //     name: "M&M",
// //     qty: 2,
// //     avg: 809.9,
// //     price: 779.8,
// //     net: "-3.72%",
// //     day: "-0.01%",
// //     isLoss: true,
// //   },
// //   {
// //     name: "RELIANCE",
// //     qty: 1,
// //     avg: 2193.7,
// //     price: 2112.4,
// //     net: "-3.71%",
// //     day: "+1.44%",
// //   },
// //   {
// //     name: "SBIN",
// //     qty: 4,
// //     avg: 324.35,
// //     price: 430.2,
// //     net: "+32.63%",
// //     day: "-0.34%",
// //     isLoss: true,
// //   },
// //   {
// //     name: "SGBMAY29",
// //     qty: 2,
// //     avg: 4727.0,
// //     price: 4719.0,
// //     net: "-0.17%",
// //     day: "+0.15%",
// //   },
// //   {
// //     name: "TATAPOWER",
// //     qty: 5,
// //     avg: 104.2,
// //     price: 124.15,
// //     net: "+19.15%",
// //     day: "-0.24%",
// //     isLoss: true,
// //   },
// //   {
// //     name: "TCS",
// //     qty: 1,
// //     avg: 3041.7,
// //     price: 3194.8,
// //     net: "+5.03%",
// //     day: "-0.25%",
// //     isLoss: true,
// //   },
// //   {
// //     name: "WIPRO",
// //     qty: 4,
// //     avg: 489.3,
// //     price: 577.75,
// //     net: "+18.08%",
// //     day: "+0.32%",
// //   },
// // ];

// // let tempPositions = [
// //      {
// //     product: "CNC",
// //     name: "EVEREADY",
// //     qty: 2,
// //     avg: 316.27,
// //     price: 312.35,
// //     net: "+0.58%",
// //     day: "-1.24%",
// //     isLoss: true,
// //   },
// //   {
// //     product: "CNC",
// //     name: "JUBLFOOD",
// //     qty: 1,
// //     avg: 3124.75,
// //     price: 3082.65,
// //     net: "+10.04%",
// //     day: "-1.35%",
// //     isLoss: true,
// //   },
// // ]
// tempPositions.forEach(async (item)=>{
//     let newPositions = new PositionModel({
//     product:  item.product,
//     name:  item.name,
//     qty:  item.qty,
//     avg:  item.avg,
//     price:  item.price,
//     net:  item.net,
//     day:  item.day,
//     isLoss: item.isLoss,
//     });

//    await newPositions.save();
// });
//     res.send("Done!");
//     console.log("Done!");
// });

app.get("/allHoldings", async (req,res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
})

app.get("/allPositions", async (req,res)=>{
    let allPositions = await PositionModel.find({});
    res.json(allPositions);
})

app.get("/allOrders", async (req,res)=>{
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
})

 //buy stock
app.post("/newOrder",async (req,res)=>{
    let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price : req.body.price,
    mode :req.body.mode,
    });
    console.log(`new order received ${newOrder}`);
    await newOrder.save();
    res.send("ordersSaved");
})

// //sell stock
// app.post("/sellOrder",async (req,res)=>{

//      const { name, qty } = req.body;

//     let holding = await OrdersModel.find({name :`${name}`,mode:"BUY"})

//    let totalQty = holding.reduce((sum,el)=> sum+el.qty,0);

//     if(!holding || totalQty<qty){
//         return res.status(400).send("not enough stock to send");
//     }

//     let updatedQty = totalQty - qty;
//     await OrdersModel.deleteMany({name :`${name}`,mode:"BUY"});

//     let newOrder = new OrdersModel({
//      name,
//     qty : updatedQty,
//     price : holding[0].price,
//     mode :"SELL",
//     })

//     console.log(`new order after sell received ${sellOrder}`);
//     await sellOrder.save();


//      let sellOrder = new OrdersModel({
//     name,
//     qty ,
//     price : holding[0].price,
//     mode :"SELL",
//     });

//     console.log(`new sellOrder received ${sellOrder}`);
//     await sellOrder.save();
//     res.send("ordersSaved");
// })

app.post("/signup",Signup);

app.post('/login', Login);

app.get("/api/getUser", userVerification);



app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
    mongoose.connect(URI);
    console.log("DB Connected");
})