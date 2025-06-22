require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose")

const bodyParser = require("body-parser")
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel")
const { PositionsModel } = require("./model/PositionsModel")
const { OrdersModel } = require("./model/OrdersModel")
const { userModel } = require("./model/UserModel")
const passport = require("passport")
const LocalStrategy = require("passport-local")
const session = require("express-session");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;


app.use(session(
    {
        secret: 'your_secret_key',
        resave: false,
        saveUninitialized: false
    }
));
app.use(passport.initialize());
app.use(passport.session());


app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

passport.use(new LocalStrategy(userModel.authenticate()));

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.status(200).json({ message: "Login successful", user: { name: user.username, email: user.email } });
    });
  })(req, res, next);
});



app.post("/signup", async (req, res) => {
    try {
        let { name, email, password } = req.body
        console.log(`Name : ${name} \n Email : ${email} \n Password : ${password} \n `)

        let newUser = new userModel({
            email: email,
            username: name,
        })
        const registeredUser = await userModel.register(newUser, password);
        res.send("Registered User : ", registeredUser);
    } catch (err) {
        console.log("Signup Error for Saving User Data : ", err.message)
    }
})

app.get("/allHolding", async (req, res) => {
    console.log("Fetching all holdings...");
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
    console.log("Fetching all Positions...");
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
    console.log("Fetching all Orders");
    let allOrders = await OrdersModel.find({});
    res.json(allOrders)
})

app.post("/newOrder", async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    await newOrder.save();

    await HoldingsModel.insertOne(
        {
            name: newOrder.name,
            qty: newOrder.qty,
            avg: 45,
            price: newOrder.price,
            net: "456",
            day: "+25%",
        }

    )

    res.send("Order saved!");
});


app.listen(PORT, () => {
    console.log("Listening on Port");
    mongoose.connect(uri);
    console.log("connect to DB")
});