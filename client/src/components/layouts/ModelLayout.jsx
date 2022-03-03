import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ScrollToTopOnMount from "../partials/ScrolltoTop";

function ModelLayout(props) {
  return (
    <div className="layout">
      <ScrollToTopOnMount />
      <div
        className="title"
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
        }}
      >
        <div>
          <h1>
            {props.brand} {props.model}
          </h1>
        </div>
      </div>

      <section>
        <div className="cardsContainer">
          <div className="cards">
            <h3>Horse power</h3>
            <h3>{props.horsepower} hp</h3>
          </div>
          <div className="cards">
            <h3>Torque</h3>
            <h3>{props.torque} Nm</h3>
          </div>
          <div className="cards">
            <h3>0-60s</h3>
            <h3>{props.seconds} s</h3>
          </div>
          <div className="cards">
            <h3>Top Speed</h3>
            <h3>{props.topspeed} mph</h3>
          </div>
          <div className="cards">
            <h3>Engine</h3>
            <h3>{props.engine}</h3>
          </div>
          <div className="cards">
            <h3>Drivetrain</h3>
            <h3>{props.drivetrain}</h3>
          </div>
        </div>
      </section>

      <section id="overview">
        <div>
          <h2>OVERVIEW</h2>
          <p>{props.overview}</p>
        </div>
        <div>
          <h3>PRICING</h3>
          <p>
            USA: <AttachMoneyIcon fontSize="small" /> {props.usa}
          </p>
          <p>
            INDIA: <CurrencyRupeeIcon fontSize="small" /> {props.india}
          </p>
        </div>
      </section>

      <section id="carsoule">
        <div
          id="carouselIndicators"
          class="carousel slide"
          data-ride="carousel"
          data-bs-interval="2000"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselIndicators" data-slide-to="1"></li>
            <li data-target="#carouselIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active carsouleImage">
              <img src={props.exteriorImage1} class="w-70" alt="..." />
              <img src={props.exteriorImage2} class="w-70" alt="..." />
            </div>
            <div class="carousel-item carsouleImage">
              <img src={props.exteriorImage3} class="w-70" alt="..." />
              <img src={props.exteriorImage4} class="w-70" alt="..." />
            </div>
            <div class="carousel-item carsouleImage">
              <img src={props.exteriorImage5} class="w-70" alt="..." />
              <img src={props.exteriorImage6} class="w-70" alt="..." />
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <h2>FEATURES</h2>
        <hr></hr>
        <div className="featuresContainer">
          <div className="items">
            <p>
              {" "}
              <DoubleArrowIcon></DoubleArrowIcon> {props.feature1}
            </p>
            <p>
              {" "}
              <DoubleArrowIcon></DoubleArrowIcon> {props.feature2}
            </p>
            <p>
              {" "}
              <DoubleArrowIcon></DoubleArrowIcon> {props.feature3}
            </p>
            <p>
              {" "}
              <DoubleArrowIcon></DoubleArrowIcon> {props.feature4}
            </p>
          </div>
          <div className="items">
            <p>
              {" "}
              <DoubleArrowIcon></DoubleArrowIcon> {props.feature5}
            </p>
            <p>
              {" "}
              <DoubleArrowIcon></DoubleArrowIcon> {props.feature6}
            </p>
            <p>
              {" "}
              <DoubleArrowIcon></DoubleArrowIcon> {props.feature7}
            </p>
            <p>
              {" "}
              <DoubleArrowIcon></DoubleArrowIcon> {props.feature8}
            </p>
          </div>
        </div>
        <div className="images">
          <img src={props.interiorImage1} alt="..." />
          <img src={props.interiorImage2} alt="..." />
          <img src={props.interiorImage3} alt="..." />
        </div>
      </section>

      <section id="alldetails">
        <h1>SPECS</h1>
        <hr></hr>
        <div className="details">
          <div className="elements">
            <h2>PERFORMANCE & ENGINE</h2>
            <p>{props.performance}</p>
          </div>

          <div className="elements">
            <h2>INTERIOR</h2>
            <p>{props.interior}</p>
          </div>
          <div className="elements">
            <h2>INFOTAINMENT</h2>
            <p>{props.infotainment}</p>
          </div>

          <div className="elements">
            <h2>SAFETY AND DRIVING ASSISTANCE</h2>
            <p>{props.safety}</p>
          </div>
        </div>
      </section>

      <div className="images">
        <img src={props.interiorImage4} alt=".." />
        <img src={props.interiorImage5} alt=".." />
        <img src={props.interiorImage6} alt=".." />
      </div>

      <section id="dimensions">
        <h1>Dimensions</h1>
        <hr></hr>
        <table className="table table-striped table-hover">
          <tr>
            <td>Height</td>
            <td>{props.height}</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>{props.length}</td>
          </tr>
          <tr>
            <td>Curb Weight </td>
            <td>{props.curbWeight}</td>
          </tr>
          <tr>
            <td>Ground Clearance </td>
            <td>{props.groundClearance}</td>
          </tr>
          <tr>
            <td>Cargo Capacity</td>
            <td>{props.cargoCapacity}</td>
          </tr>
          <tr>
            <td>Front Wheel Size (inches) </td>
            <td>{props.frontWheel}</td>
          </tr>
          <tr>
            <td>Rear Wheel Size (inches)</td>
            <td>{props.rearWheel}</td>
          </tr>
        </table>
      </section>
    </div>
  );
}

export default ModelLayout;
