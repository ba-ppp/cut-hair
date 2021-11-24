/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import "twin.macro";
import tw from "twin.macro";
import { EditGoodRow } from "./EditGoodRow";

type EditGoodProps = {
  headers: string[];
  items: any[];
};

export const EditGoods = (props: EditGoodProps) => {
  const { headers, items } = props;

  return (
    <section tw="container mx-auto p-6 capitalize">
      <div tw="width[85%] mb-8 overflow-hidden rounded-lg shadow-lg mx-auto mt-5">
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
              {items.map((item) => {
                return item.items.map((i: any, index: number) => {
                  return <EditGoodRow item={i} key={index} />;
                });
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const firstRowStyle = css`
  ${tw`w-1/2`}
`;
const rowStyle = css`
  ${tw`w-1/12`}
`;
