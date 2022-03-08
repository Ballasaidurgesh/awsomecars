import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BrandLayout from "./layouts/BrandLayout";
import Loader from "./Loader";

function Cars() {
  const { brand } = useParams();

  const [cars, setcars] = useState([]);
  const [isLoading, setLoading] = useState(false);

  //all cars data of specific brand
  useEffect(() => {
    axios
      .get(`http://localhost:8000/cars/${brand}`)
      .then((response) => {
        setcars(response.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="cars">
      {isLoading ? (
        cars.map((car, index) => {
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
        })
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Cars;
