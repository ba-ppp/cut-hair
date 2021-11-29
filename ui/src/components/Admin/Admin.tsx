/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Ripple } from "@rmwc/ripple";
import { ReactComponent as Home } from "assets/Icons/home.svg";
import { ReactComponent as Barber } from "assets/Icons/people.svg";
import { ReactComponent as Product } from "assets/Icons/product.svg";
import { ReactComponent as Service } from "assets/Icons/service.svg";
import { DashBoard } from "components/Admin/DashBoard/DashBoard";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "twin.macro";
import tw from "twin.macro";
import { BarbersAdmin } from './Barbers/BarberAdmin';
import { ProductsAdmin } from './Products/ProductsAdmin';
import { ServicesAdmin } from './Services/ServicesAdmin';

export const Admin = () => {
  const [idActive, setIdActive] = useState(1);

  const location = useLocation();

  useEffect(() => {
    const hashParams = ["dashboard", "barbers", "services", "products"];
    if (location.hash) {
      setIdActive(hashParams.indexOf(location.hash.replace("#", "")) + 1);
    }
  }, [location]);

  return (
    <div tw="flex">
      <div tw="width[12%] bg-gradient-to-b from-blue-800 via-blue-600 to-blue-900 text-white fixed h-full top-24">
        <div tw="p-5 ml-2 -mb-4">MAIN</div>
        <div tw="p-6 space-y-4">
          <a href="#dashboard" tw="block">
            <Ripple>
              <div css={[listMenuStyle, idActive === 1 && activeStyle]}>
                <Home fill="white" />
                <div>Dashboard</div>
              </div>
            </Ripple>
          </a>
          <a href="#barbers" tw="block">
            <Ripple>
              <div css={[listMenuStyle, idActive === 2 && activeStyle]}>
                <Barber fill="white" />
                <div>Barbers</div>
              </div>
            </Ripple>
          </a>
          <a href="#services" tw="block">
            <Ripple>
              <div css={[listMenuStyle, idActive === 3 && activeStyle]}>
                <Service fill="white" />
                <div>Services</div>
              </div>
            </Ripple>
          </a>
          <a href="#products" tw="block">
            <Ripple>
              <div css={[listMenuStyle, idActive === 4 && activeStyle]}>
                <Product fill="white" />
                <div>Products</div>
              </div>
            </Ripple>
          </a>
        </div>
      </div>
      <div tw="height[100vh] margin-left[14%] mt-32 w-full">
        {idActive === 1 && <DashBoard />}
        {idActive === 2 && <BarbersAdmin />}
        {idActive === 3 && <ServicesAdmin />}
        {idActive === 4 && <ProductsAdmin />}
      </div>
    </div>
  );
};

const listMenuStyle = css`
  ${tw`flex items-center space-x-2 font-size[14px] cursor-pointer p-3
  hover:(bg-gradient-to-r from-blue-400 via-blue-600 to-blue-600 shadow-lg)
  `}
`;

const activeStyle = css`
  ${tw`
bg-gradient-to-r from-blue-400 via-blue-600 to-blue-600 shadow-lg
`}
`;
