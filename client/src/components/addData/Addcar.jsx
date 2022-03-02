import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ScrollToTopOnMount from "../partials/ScrolltoTop";

function Addcar() {
  const [ispopup, setpopup] = useState(false);

  const [input, setinput] = useState({
    type: "",
    brand: "",
    model: "",
    horsepower: "",
    torque: "",
    engine: "",
    seconds: "",
    topspeed: "",
    drivetrain: "",
    height: "",
    length: "",
    curbWeight: "",
    groundClearance: "",
    cargoCapacity: "",
    frontWheel: "",
    rearWheel: "",
    usa: "",
    india: "",
    overview: "",
    performance: "",
    interior: "",
    infotainment: "",
    safety: "",
    feature1: "",
    feature2: "",
    feature3: "",
    feature4: "",
    feature5: "",
    feature6: "",
    feature7: "",
    feature8: "",
    backgroundImage: "",
    exteriorImage1: "",
    exteriorImage2: "",
    exteriorImage3: "",
    exteriorImage4: "",
    exteriorImage5: "",
    exteriorImage6: "",
    interiorImage1: "",
    interiorImage2: "",
    interiorImage3: "",
    interiorImage4: "",
    interiorImage5: "",
    interiorImage6: "",
    logo: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setinput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    setinput(input);
    setpopup(true);
    axios
      .post("/addcar", input)
      .then(() => {
        console.log("data is sent to server");
      })
      .catch((error) => {
        console.log(error);
      });

    setinput(() => {
      event.target.value = "";
    });
  }

  return (
    <div className="post-cars">
      <ScrollToTopOnMount />
      <h1>Add New Car</h1>

      <div
        className={`alert ${ispopup ? "show-alert" : "hide-alert"}`}
        onTransitionEnd={() => setpopup(false)}
      >
        <h3> Data is Saved! </h3>
      </div>

      <form>
        <TextField
          name="type"
          onChange={handleChange}
          label="Type"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="brand"
          onChange={handleChange}
          label="Brand"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="model"
          onChange={handleChange}
          label="Model"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="horsepower"
          onChange={handleChange}
          type="number"
          label="Horse power"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="torque"
          onChange={handleChange}
          label="Torque"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="engine"
          onChange={handleChange}
          label="Engine"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="seconds"
          onChange={handleChange}
          label="0-60s"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="topspeed"
          onChange={handleChange}
          label="Topspeed"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="drivetrain"
          onChange={handleChange}
          label="Drivetrain"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="usa"
          onChange={handleChange}
          label="USA"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="india"
          onChange={handleChange}
          label="INDIA"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="height"
          onChange={handleChange}
          label="Height"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="length"
          onChange={handleChange}
          label="Length"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="curbWeight"
          onChange={handleChange}
          label="Curb Weight"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="groundClearance"
          onChange={handleChange}
          label="Ground clearance"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="cargoCapacity"
          onChange={handleChange}
          label="Cargo capacity"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="frontWheel"
          onChange={handleChange}
          label="Front wheel"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="rearWheel"
          onChange={handleChange}
          label="Rear wheel"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="feature1"
          onChange={handleChange}
          label="fa-1"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="feature2"
          onChange={handleChange}
          label="fa-2"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="feature3"
          onChange={handleChange}
          label="fa-3"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="feature4"
          onChange={handleChange}
          label="fa-4"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="feature5"
          onChange={handleChange}
          label="fa-5"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="feature6"
          onChange={handleChange}
          label="fa-6"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="feature7"
          onChange={handleChange}
          label="fa-7"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="feature8"
          onChange={handleChange}
          label="fa-8"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="overview"
          onChange={handleChange}
          label="Overview"
          variant="outlined"
          margin="normal"
          multiline
          fullWidth
        />
        <TextField
          name="performance"
          onChange={handleChange}
          label="Performance"
          variant="outlined"
          margin="normal"
          multiline
          fullWidth
        />

        <TextField
          name="interior"
          onChange={handleChange}
          label="Interior"
          variant="outlined"
          margin="normal"
          multiline
          fullWidth
        />
        <TextField
          name="infotainment"
          onChange={handleChange}
          label="Infotainment"
          variant="outlined"
          margin="normal"
          multiline
          fullWidth
        />

        <TextField
          name="safety"
          onChange={handleChange}
          label="Safety"
          variant="outlined"
          margin="normal"
          multiline
          fullWidth
        />
        <h1>Images</h1>
        <TextField
          name="backgroundImage"
          onChange={handleChange}
          label="Background Image"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          name="exteriorImage1"
          onChange={handleChange}
          label="Exterior image1"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="exteriorImage2"
          onChange={handleChange}
          label="Exterior image2"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="exteriorImage3"
          onChange={handleChange}
          label="Exterior image3"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="exteriorImage4"
          onChange={handleChange}
          label="Exterior image4"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="exteriorImage5"
          onChange={handleChange}
          label="Exterior image5"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="exteriorImage6"
          onChange={handleChange}
          label="Exterior image6"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="interiorImage1"
          onChange={handleChange}
          label="interior image1"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="interiorImage2"
          onChange={handleChange}
          label="interior image2"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="interiorImage3"
          onChange={handleChange}
          label="interior image3"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="interiorImage4"
          onChange={handleChange}
          label="interior image4"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="interiorImage5"
          onChange={handleChange}
          label="interior image5"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="interiorImage6"
          onChange={handleChange}
          label="interior image6"
          variant="outlined"
          margin="normal"
        />

        <Button onClick={handleClick}>Submit</Button>
      </form>
    </div>
  );
}

export default Addcar;
