/** @jsxImportSource @emotion/react */
import "twin.macro";
import React from "react";
import { ReactComponent as Home } from "assets/Icons/home.svg";
import { ReactComponent as Barber } from "assets/Icons/group.svg";
import { ReactComponent as Product } from "assets/Icons/product.svg";
import { ReactComponent as Service } from "assets/Icons/service.svg";
import { css } from "@emotion/react";
import tw from "twin.macro";

export const Admin = () => {
  return (
    <div tw="flex">
      <div tw="width[12%] bg-blue-700 text-white fixed h-full top-24">
        <div tw="p-5">MAIN</div>
        <div tw="p-6 space-y-5">
          <div css={listMenuStyle}>
            <Home fill="white" />
            <div>Dashboard</div>
          </div>
          <div css={listMenuStyle}>
            <Barber fill="white" />
            <div>Barbers</div>
          </div>
          <div css={listMenuStyle}>
            <Service fill="white" />
            <div>Services</div>
          </div>
          <div css={listMenuStyle}>
            <Product fill="white" />
            <div>Product</div>
          </div>
        </div>
      </div>
      <div tw='height[100vh] overflow-y-auto margin-left[20%] mt-32'>
        hi
      </div>
    </div>
  );
};

const listMenuStyle = css`
  ${tw`flex items-center space-x-2 font-size[14px]`}
`;
