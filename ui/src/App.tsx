/** @jsxImportSource @emotion/react */
import { Admin } from "components/Admin/Admin";
import { BarberProfile } from "components/Barber/BarberProfile";
import { Barber } from "components/Barber/Barbers";
import { Booking } from "components/Booking/Booking";
import { HomePage } from "components/HomePage/HomePage";
import { NavBarMenu } from "components/NavBarMenu/NavBarMenu";
import { PrivateRoute } from "components/Routes/PrivateRoutes";
import { PublicRoute } from "components/Routes/PublicRoutes";
import { Product } from "components/Shop/Product";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'
import "typeface-roboto";

function App() {
  
  return (
    <div tw="font-sans">
      <Router>
        <NavBarMenu />

        <Toaster position="top-center" reverseOrder={false} />
        <Switch>
          <PublicRoute path="/" exact component={HomePage} />
          <PublicRoute path="/booking" exact component={Booking} />
          <PublicRoute path="/barber/:id" exact component={BarberProfile} />
          <PublicRoute path="/barber" exact component={Barber} />
          <PublicRoute path="/shop" exact component={Product} />

          <PrivateRoute path="/admin" exact component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
