/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import "twin.macro";
import tw from "twin.macro";
import { EditGoodRow } from "./EditGoodRow";

type EditGoodProps = {
  headers: string[];
  items: any[];
  type: string;
};

export const EditGoods = (props: EditGoodProps) => {
  const { headers, items } = props;
  const [data, setData] = useState(items);

  useEffect(() => {
    setData(items);
  }, [items]);

  const handleDelete = (id: string) => {
    const newData = data.map((i) => {
      return {
        ...i,
        items: i.items.filter((item: any) => item.id !== id),
      };
    });
    setData(newData);
  };

  const handleAddItem = () => {
    setData([]);
  };

  return (
    <section tw="container mx-auto p-6 capitalize">
      <div tw="w-full mb-8 overflow-hidden rounded-lg shadow-lg mx-auto mt-5">
        <div tw="w-full overflow-x-auto">
          <table tw="w-full">
            <thead>
              <tr tw="text-sm font-semibold tracking-wide text-center text-white bg-gradient-to-r from-indigo-500 to-blue-500 capitalize border-b">
                {headers.map((header, index) => {
                  return (
                    <th
                      tw="px-4 py-3"
                      key={index}
                      css={[index === 0 ? firstRowStyle : rowStyle]}
                    >
                      {header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody tw="bg-white">
              {data.map((item, index) => {
                return (
                  <EditGoodRow
                    item={item}
                    key={index}
                    handleDelete={handleDelete}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div tw="flex justify-end">
        <button
          onClick={handleAddItem}
          tw="cursor-pointer bg-blue-400 font-semibold text-white p-2 w-32 rounded-full hover:bg-blue-600 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2"
        >
          Add
        </button>
        <button tw="cursor-pointer bg-indigo-400 font-semibold text-white p-2 w-32 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2">
          Save
        </button>
      </div>
    </section>
  );
};

const firstRowStyle = css`
  ${tw`w-1/2`}
`;
const rowStyle = css`
  ${tw`w-1/3`}
`;
