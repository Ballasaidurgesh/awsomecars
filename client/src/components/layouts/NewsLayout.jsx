import React from "react";

function NewsLayout(props) {
  return (
    <div className="news-cards">
      <div className="news-content">
        {" "}
        <img src={props.image} alt="..."></img>
        <div className="news-text">
          <h1> {props.title} </h1>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsLayout;
