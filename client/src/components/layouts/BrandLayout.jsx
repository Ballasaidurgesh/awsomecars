import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ScrollToTopOnMount from "../partials/ScrolltoTop";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

function Brand(props) {
  const id = props.id;

  return (
    <section id="brand">
      <ScrollToTopOnMount />
      <div className="brand-models">
        <div className="brand-content">
          <img src={props.image} alt="Model" />
          <div className="brand-text">
            <h3>
              {" "}
              {props.brand} {props.model}
            </h3>
            <p> {props.text ? props.text.substring(0, 150) : ""} . . .</p>
            <Button className="button">
              <Link to={`/model/${id}`}>
                know more <ArrowForwardTwoToneIcon className="arrow-icon" />{" "}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brand;
