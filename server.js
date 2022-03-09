require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

//mongodb connection
mongoose.connect(process.env.DATABASE);

//schema

//news schema
const newsSchema = new mongoose.Schema({
  image: String,
  title: String,
  content: String,
});

const News = mongoose.model("News", newsSchema);

//cars schema
const carSchema = new mongoose.Schema({
  type: String,
  brand: String,
  model: String,
  horsepower: String,
  torque: String,
  engine: String,
  seconds: String,
  topspeed: String,
  drivetrain: String,
  height: String,
  length: String,
  curbWeight: String,
  groundClearance: String,
  cargoCapacity: String,
  frontWheel: String,
  rearWheel: String,
  image: String,
  usa: String,
  india: String,
  overview: String,
  performance: String,
  interior: String,
  infotainment: String,
  safety: String,
  feature1: String,
  feature2: String,
  feature3: String,
  feature4: String,
  feature5: String,
  feature6: String,
  feature7: String,
  feature8: String,
  backgroundImage: String,
  exteriorImage1: String,
  exteriorImage2: String,
  exteriorImage3: String,
  exteriorImage4: String,
  exteriorImage5: String,
  exteriorImage6: String,
  interiorImage1: String,
  interiorImage2: String,
  interiorImage3: String,
  interiorImage4: String,
  interiorImage5: String,
  interiorImage6: String,
  logo: String,
});

const Car = mongoose.model("Car", carSchema);

//routes

//posting the cars data
app.post("/addcar", (req, res) => {
  const newCar = new Car({
    type: req.body.type,
    brand: req.body.brand,
    model: req.body.model,
    horsepower: req.body.horsepower,
    torque: req.body.torque,
    engine: req.body.engine,
    seconds: req.body.seconds,
    topspeed: req.body.topspeed,
    drivetrain: req.body.drivetrain,
    height: req.body.height,
    length: req.body.length,
    curbWeight: req.body.curbWeight,
    groundClearance: req.body.groundClearance,
    cargoCapacity: req.body.cargoCapacity,
    frontWheel: req.body.frontWheel,
    rearWheel: req.body.rearWheel,
    usa: req.body.usa,
    india: req.body.india,
    overview: req.body.overview,
    performance: req.body.performance,
    interior: req.body.interior,
    infotainment: req.body.infotainment,
    safety: req.body.safety,
    feature1: req.body.feature1,
    feature2: req.body.feature2,
    feature3: req.body.feature3,
    feature4: req.body.feature4,
    feature5: req.body.feature5,
    feature6: req.body.feature6,
    feature7: req.body.feature7,
    feature8: req.body.feature8,
    backgroundImage: req.body.backgroundImage,
    exteriorImage1: req.body.exteriorImage1,
    exteriorImage2: req.body.exteriorImage2,
    exteriorImage3: req.body.exteriorImage3,
    exteriorImage4: req.body.exteriorImage4,
    exteriorImage5: req.body.exteriorImage5,
    exteriorImage6: req.body.exteriorImage6,
    interiorImage1: req.body.interiorImage1,
    interiorImage2: req.body.interiorImage2,
    interiorImage3: req.body.interiorImage3,
    interiorImage4: req.body.interiorImage4,
    interiorImage5: req.body.interiorImage5,
    interiorImage6: req.body.interiorImage6,
  });

  newCar.save((err) => {
    if (!err) {
      console.log("Data has been saved to database");
    }
  });
});

// getting data of cars with specific brand
app.get("/cars/:brand", (req, res) => {
  const brand = req.params.brand;

  Car.find({ brand: brand })
    .sort({ _id: -1 })
    .exec((err, foundCar) => {
      if (!err) {
        res.send(foundCar);
      } else {
        console.log(err);
      }
    });
});

//getting data of specific car model
app.get("/model/:id", (req, res) => {
  const id = req.params.id;

  Car.findById({ _id: id }, (err, foundItem) => {
    if (!err) {
      res.send(foundItem);
    }
  });
});

//posting the data of news

app.post("/addnews", (req, res) => {
  const news = new News({
    image: req.body.image,
    title: req.body.title,
    content: req.body.content,
  });

  news.save((err) => {
    if (!err) {
      console.log("News is saved!");
    }
  });
});

//gettin news data

app.get("/news", (req, res) => {
  News.find({})
    .sort({ _id: -1 })
    .exec((err, foundItem) => {
      if (!err) {
        res.send(foundItem);
      }
    });
});

//deployment setup
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server started on port 8000");
});
