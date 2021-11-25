/** @jsxImportSource @emotion/react */
import "twin.macro";
import React from "react";
import { ReactComponent as Admin } from "assets/Icons/admin.svg";
import { ReactComponent as Logout } from "assets/Icons/logout.svg";

export const AdminNavBar = () => {
  return (
    <div tw="flex justify-between p-10 bg-blue-500 fixed width[96%] h-4">
      <div tw="flex items-center space-x-2">
        <Admin fill="white" />
        <div tw="text-white">Admin</div>
      </div>
      <div tw="flex items-center space-x-2">
        <Logout fill="white" />
        <div tw="text-white">Log out</div>
      </div>
    </div>
  );
};
