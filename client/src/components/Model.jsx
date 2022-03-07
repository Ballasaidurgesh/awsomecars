import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ModelLayout from "./layouts/ModelLayout";
import Loader from "./Loader";

//rendering individual pages

function Model() {
  const [items, setitems] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/model/${id}`).then((response) => {
      setitems(response.data);
      setLoading(true);
    });
  }, []);

  return (
    <div id="models">
      {isLoading ? (
        <ModelLayout
          brand={items.brand}
          model={items.model}
          horsepower={items.horsepower}
          torque={items.torque}
          engine={items.engine}
          seconds={items.seconds}
          topspeed={items.topspeed}
          drivetrain={items.drivetrain}
          height={items.height}
          length={items.length}
          curbWeight={items.curbWeight}
          groundClearance={items.groundClearance}
          cargoCapacity={items.cargoCapacity}
          frontWheel={items.frontWheel}
          rearWheel={items.rearWheel}
          usa={items.usa}
          india={items.india}
          overview={items.overview}
          performance={items.performance}
          interior={items.interior}
          infotainment={items.infotainment}
          safety={items.safety}
          feature1={items.feature1}
          feature2={items.feature2}
          feature3={items.feature3}
          feature4={items.feature4}
          feature5={items.feature5}
          feature6={items.feature6}
          feature7={items.feature7}
          feature8={items.feature8}
          backgroundImage={items.backgroundImage}
          exteriorImage1={items.exteriorImage1}
          exteriorImage2={items.exteriorImage2}
          exteriorImage3={items.exteriorImage3}
          exteriorImage4={items.exteriorImage4}
          exteriorImage5={items.exteriorImage5}
          exteriorImage6={items.exteriorImage6}
          interiorImage1={items.interiorImage1}
          interiorImage2={items.interiorImage2}
          interiorImage3={items.interiorImage3}
          interiorImage4={items.interiorImage4}
          interiorImage5={items.interiorImage5}
          interiorImage6={items.interiorImage6}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Model;
