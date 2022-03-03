import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";

export default function Admi() {
  const { logOut } = useUserAuth();
  async function handleLogout() {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="admin">
      <h1>Welcome Durgesh !</h1>
      <Button>
        <Link to="/addnews">Addnews</Link>
      </Button>
      <Button>
        <Link to="/addcar">Addcar</Link>
      </Button>
      <Button onClick={handleLogout}>logOut</Button>
    </div>
  );
}
