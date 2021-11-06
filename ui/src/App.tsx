/** @jsxImportSource @emotion/react */
import { Barber } from "components/Barber/Barbers";
import { Booking } from "components/Booking/Booking";
import { HomePage } from "components/HomePage/HomePage";
import { NavBarMenu } from "components/NavBarMenu/NavBarMenu";
import { PublicRoute } from "components/Routes/PublicRoutes";
import { Product } from "components/Shop/Product";
import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "typeface-roboto";
require('dotenv').config()

function App() {
  return (
    <div tw="font-sans">
      <Router>
        <NavBarMenu />

        <Switch>
          <PublicRoute path="/" exact component={HomePage} />
          <PublicRoute path="/booking" exact component={Booking} />
          <PublicRoute path="/barber" exact component={Barber} />
          <PublicRoute path="/shop" exact component={Product} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
