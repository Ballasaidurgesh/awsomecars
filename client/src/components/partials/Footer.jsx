import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="logo">
          <Link to="/">AWSOMECARS</Link>
        </div>
        <div>
          <p>SUPERCARS</p>
          <ul>
            <li>
              {" "}
              <Link to="/cars/Lamborghini">Lamborghini</Link>{" "}
            </li>
            <li>
              {" "}
              <li>
                {" "}
                <Link to="/cars/Ferrari">Ferrari</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/cars/Porsche">Porsche</Link>
              </li>
              <li>
                <Link to="/cars/McLaren">McLaren</Link>
              </li>
              <li>
                {" "}
                <Link to="/cars/Maserati">Maserati</Link>
              </li>
              <li>
                <Link to="/cars/BMW">BMW</Link>
              </li>
              <li>
                <Link to="/cars/Audi">Audi</Link>
              </li>
              <li>
                {" "}
                <Link to="/cars/Mercedes-Benz">Mercedes Benz</Link>
              </li>
              <li>
                {" "}
                <Link to="/cars/Aston-Martin">Aston Martin</Link>
              </li>
            </li>
          </ul>
        </div>
        <div>
          <p>HYPERCARS</p>
          <ul>
            <li>
              <Link to="/cars/Bugatti">Bugatti</Link>
              <li>
                {" "}
                <Link to="/cars/Pagani">Pagani</Link>
              </li>
              <li>
                {" "}
                <Link to="/cars/Koenigsegg">Koenigsegg</Link>
              </li>
            </li>
          </ul>
        </div>
        <div>
          <p>LUXURYCARS</p>
          <ul>
            <li>
              {" "}
              <Link to="/cars/Rolls-Royce">Rolls Royce</Link>
            </li>
            <li>
              <Link to="/cars/Bentley">Bentley</Link>
            </li>
          </ul>
        </div>
      </div>
      <section>
        <p> &copy; Durgesh 2022</p>
        <div>
          <Link to="/">
            <TwitterIcon />
          </Link>
          <Link to="/">
            <GitHubIcon />
          </Link>
          <Link to="/">
            <InstagramIcon />
          </Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
