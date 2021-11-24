import { barberMock } from "components/Barber/barberMock";
import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import "twin.macro";
import { EditItemRow } from "./EditItemRow";

type EditItemsProps = {
  headers: string[];
  items: any[];
};

export const EditItems = (props: EditItemsProps) => {
  const { headers, items } = props;
  return (
    <div tw="w-11/12 ml-14 mt-0">
      <div tw="bg-white shadow-md rounded my-6">
        <table tw="min-w-max w-full table-auto">
          <thead>
            <tr tw="bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-500 text-white uppercase text-sm leading-normal">
              {headers.map((header, index) => {
                return (
                  <th tw="py-3 px-6 text-center font-black" key={index}>
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody tw="text-gray-600 text-sm font-light">
            {items.map((item, index) => {
              return <EditItemRow item={item} key={index} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
