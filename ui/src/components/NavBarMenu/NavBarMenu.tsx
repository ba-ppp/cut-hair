/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import tw from "twin.macro";
import Logo from "assets/images/logo.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as StarIcon } from "assets/Icons/star.svg";
import { useDispatch } from "react-redux";
import { toggleAdmin } from "app/slice/admin.slice";
import { useLocation } from "react-router-dom";
import { ReactComponent as Admin } from "assets/Icons/admin.svg";
import { ReactComponent as Logout } from "assets/Icons/logout.svg";
import { useHistory } from "react-router-dom";
import { bgOrange } from 'components/twin.style';

export const NavBarMenu = () => {
  const [activeNav, setActiveNav] = useState(1);

  const dispatch = useDispatch();
  const [isAdmin, toggleAdmin] = useState(false);

  const location = useLocation();
  const history = useHistory();

  const handleChangeNav = (id: number) => {
    setActiveNav(id);
  };

  useEffect(() => {
    if (location.pathname.includes("admin")) {
      toggleAdmin(true);
    } else {
      toggleAdmin(false);
    }
  }, [location]);

  return (
    <>
      {!isAdmin ? (
        <div tw="bg-gray-100 h-32">
          <div tw="flex items-center justify-around">
            <NavLink to="/">
              <div tw="flex items-center space-x-2 mt-16">
                <img alt="" src={Logo} />
                <div tw="flex">
                  <h1 tw="text-black text-2xl font-black">Hair</h1>
                  <h1 tw="text-red-700 text-2xl font-bold">Cut</h1>
                </div>
              </div>
            </NavLink>

            <div tw="mt-16">
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
                <NavLink to="/admin">
                  <li
                    onClick={() => history.push("/admin")}
                    tw="flex -mt-2 tracking-wider text-white bg-cuthair-orange-dark px-4 py-1 text-sm rounded leading-loose mx-2 font-semibold cursor-pointer hover:bg-cuthair-orange-light"
                  >
                    <StarIcon fill="white" tw="mr-0.5" />
                    Admin
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div tw="flex justify-between p-10 fixed width[96%] h-4 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500" >
          <div tw="flex items-center space-x-2">
            <Admin fill="white" />
            <div tw="text-white">Admin</div>
          </div>
          <div tw="flex items-center space-x-2">
            <Logout fill="white" />
            <div tw="text-white">Log out</div>
          </div>
        </div>
      )}
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

