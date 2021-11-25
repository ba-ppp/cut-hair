/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { ReactComponent as Service } from "assets/Icons/service.svg";
import { ReactComponent as Schedule } from "assets/Icons/schedule.svg";
import { ReactComponent as Shopping } from "assets/Icons/shopping.svg";
import { ReactComponent as Balance } from "assets/Icons/balance.svg";
import Hot from "assets/Icons/hot-deal.png";
import Heat from "assets/Icons/heat.png";
import { css } from "@emotion/react";
import tw from "twin.macro";
import { ProductDashBoard } from "model/util.model";
import { useEffectOnce } from 'react-use';
import { getProductRank } from 'api/Product/Product.api';
import { getServiceRank } from 'api/Service/Service.api';

export const DashBoard = () => {
  const [productRank, setProductRank] =
    useState<ProductDashBoard[]>();
  const [serviceRank, setServiceRank] =
    useState<ProductDashBoard[]>();

  useEffectOnce(() => {
    (async () => {
      const product = await (await getProductRank()).data;
      setProductRank(product);
      const service = await (await getServiceRank()).data;
      setServiceRank(service);
    })()
  })

  return (
    <>
      <div tw="flex space-x-10 mr-0 text-white">
        <div css={[borderStyle]}>
          <div css={iconStyle}>
            <Schedule width={32} height={32} fill="#2563eb" />
          </div>
          <div tw="text-right">
            <div tw="text-2xl font-normal">1,257</div>
            <div tw="text-xl font-medium">Booking</div>
          </div>
        </div>
        <div css={borderStyle}>
          <div css={iconStyle}>
            <Shopping width={32} height={32} fill="#2563eb" />
          </div>
          <div tw="text-right">
            <div tw="text-2xl font-normal">100</div>
            <div tw="text-xl font-medium">Orders</div>
          </div>
        </div>
        <div css={borderStyle}>
          <div css={iconStyle}>
            <Service width={32} height={32} fill="#2563eb" />
          </div>
          <div tw="text-right">
            <div tw="text-2xl font-normal">354</div>
            <div tw="text-xl font-medium">Services</div>
          </div>
        </div>
        <div css={borderStyle}>
          <div css={iconStyle}>
            <Balance width={32} height={32} fill="#2563eb" />
          </div>
          <div tw="text-right">
            <div tw="text-2xl font-normal">11,234$</div>
            <div tw="text-xl font-medium">Balance</div>
          </div>
        </div>
      </div>
      <div tw="flex width[98%] mt-24 space-x-16">
        <div tw="w-1/2 bg-gray-50 table-auto">
          <div tw="p-3 flex items-center space-x-2">
            <div>
              <img src={Hot} alt="hot" />
            </div>
            <div>Products</div>
          </div>
          <table tw="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th tw="px-4 bg-gray-100 text-gray-500 align-middle border border-solid border-gray-200  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  items
                </th>
                <th tw="px-4 bg-gray-100 text-gray-500 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  orders
                </th>
                <th tw="px-4 bg-gray-100 text-gray-500  align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
              </tr>
            </thead>
            <tbody>
              {productRank?.map((item, index) => {
                return (
                  <tr tw="text-gray-700">
                    <th tw="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      {item.name}
                    </th>
                    <td tw="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.orders}
                    </td>
                    <td tw="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div tw="flex items-center">
                        <span tw="mr-2">{item.percent.toFixed(2)}%</span>
                        <div tw="relative w-full">
                          <div
                            css={bgLightStyle[index]}
                            tw="overflow-hidden h-2 text-xs flex rounded"
                          >
                            <div
                              css={[
                                css`
                                  width: ${item.percent.toString() + "%"};
                                `,
                                bgStyle[index],
                              ]}
                              tw="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div tw="w-1/2">
          <div tw="p-3 flex items-center space-x-2">
            <div>
              <img src={Heat} alt="hot" />
            </div>
            <div>Services</div>
          </div>
          <table tw="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th tw="px-4 bg-gray-100 text-gray-500 align-middle border border-solid border-gray-200  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  items
                </th>
                <th tw="px-4 bg-gray-100 text-gray-500 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  orders
                </th>
                <th tw="px-4 bg-gray-100 text-gray-500  align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
              </tr>
            </thead>
            <tbody>
              {serviceRank?.map((item, index) => {
                return (
                  <tr tw="text-gray-700">
                    <th tw="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      {item.name}
                    </th>
                    <td tw="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.orders}
                    </td>
                    <td tw="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div tw="flex items-center">
                        <span tw="mr-2">{item.percent.toFixed(2)}%</span>
                        <div tw="relative w-full">
                          <div
                            css={bgLightStyle[index]}
                            tw="overflow-hidden h-2 text-xs flex rounded"
                          >
                            <div
                              css={[
                                css`
                                  width: ${item.percent.toString() + "%"};
                                `,
                                bgStyle[index],
                              ]}
                              tw="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const borderStyle = css`
  ${tw`
    flex justify-between width[20%] border-solid rounded-md p-5 cursor-pointer
    bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 border-blue-400 border shadow-2xl items-center
`}
`;

const iconStyle = css`
  ${tw`
    border border-solid rounded-full w-16 h-16 flex items-center justify-center border-white bg-white shadow-2xl
`}
`;

const bgStyle = [
  css`
    ${tw`bg-red-500`}
  `,
  css`
    ${tw`bg-blue-600`}
  `,
  css`
    ${tw`bg-pink-500`}
  `,
  css`
    ${tw`bg-blue-500`}
  `,
  css`
    ${tw`bg-blue-700`}
  `,
];

const bgLightStyle = [
  css`
    ${tw`bg-red-200`}
  `,
  css`
    ${tw`bg-blue-200`}
  `,
  css`
    ${tw`bg-pink-200`}
  `,
  css`
    ${tw`bg-blue-200`}
  `,
  css`
    ${tw`bg-blue-200`}
  `,
];
