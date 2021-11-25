import { barberMock } from "components/Barber/barberMock";
import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import "twin.macro";
import { EditItemRow } from "./EditItemRow";

type EditItemsProps = {
  headers: string[];
  items: any[];
};

export const EditItems = (props: EditItemsProps) => {
  const { headers, items } = props;
  const [data, setData] = useState(items ?? []);

  useEffect(() => {
    setData(items);
  }, [items]);

  const handleDelete = (id: string) => {
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <div tw="w-11/12 ml-14 mt-0">
      <div tw="bg-white shadow-md rounded my-6">
        <table tw="min-w-max w-full table-auto">
          <thead>
            <tr tw="bg-gradient-to-r from-indigo-500 via-indigo-500 to-blue-500 text-white uppercase text-sm leading-normal">
              {headers.map((header, index) => {
                return (
                  <th tw="py-3 px-6 text-center font-black" key={index}>
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody tw="text-gray-600 text-sm font-light capitalize">
            {data.map((item, index) => {
              return (
                <EditItemRow
                  item={item}
                  key={index}
                  handleDelete={handleDelete}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div tw='flex justify-end'>
        <button tw="cursor-pointer bg-indigo-400 font-semibold text-white p-2 w-32 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2">
          Save
        </button>
      </div>
    </div>
  );
};
