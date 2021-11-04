/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import tw from "twin.macro";
import Logo from "assets/images/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavBarMenu = () => {
  const [activeNav, setActiveNav] = useState(1);

  const handleChangeNav = (id: number) => {
    setActiveNav(id);
  };
  return (
    <>
      <div tw="bg-gray-100 h-32">
        <div tw="flex items-center justify-around">
          <div tw="flex items-center space-x-2 mt-16">
            <img alt="" src={Logo} />
            <div tw="flex">
              <h1 tw="text-black text-2xl font-black">Hair</h1>
              <h1 tw="text-red-700 text-2xl font-bold">Cut</h1>
            </div>
          </div>

          <div tw='mt-16'>
            <ul tw="flex space-x-8 text-sm list-none">
              <li
                css={[activeNav === 1 && activeNavStyle, navStyle]}
                onClick={() => handleChangeNav(1)}
              >
                <NavLink to="/">Book</NavLink>
              </li>
              <li
                css={[activeNav === 2 && activeNavStyle, navStyle]}
                onClick={() => handleChangeNav(2)}
              >
                <NavLink to="/barber">Barber</NavLink>
              </li>
              <li
                css={[activeNav === 3 && activeNavStyle, navStyle]}
                onClick={() => handleChangeNav(3)}
              >
                <NavLink to="/shop">Shop</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const navStyle = css`
  ${tw`
  cursor-pointer font-size[16px]
  hover:(text-red-400)
  visited:(text-decoration[none])!
`}
`;

const activeNavStyle = css`
  ${tw`
  border-bottom[2px solid] border-b-red-500
`}
`;
