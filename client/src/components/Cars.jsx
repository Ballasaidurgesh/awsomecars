import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BrandLayout from "./layouts/BrandLayout";

function Cars() {
  const { brand } = useParams();

  const [cars, setcars] = useState([]);

  //all cars data of specific brand
  useEffect(() => {
    axios
      .get(`http://localhost:8000/cars/${brand}`)
      .then((response) => {
        setcars(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="cars">
      {cars.map((car, index) => {
        return (
          <BrandLayout
            key={index}
            model={car.model}
            brand={car.brand}
            text={car.performance}
            image={car.exteriorImage1}
            id={car._id}
          />
        );
      })}
    </div>
  );
}

export default Cars;
