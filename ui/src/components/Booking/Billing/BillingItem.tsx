/** @jsxImportSource @emotion/react */
import "twin.macro";
import React from "react";
import { GoodItem } from "model/util.model";
import { capitalize } from "lodash";

type BillingItemProps = {
  item: GoodItem;
  type: string;
};

export const BillingItem = (props: BillingItemProps) => {
  const { image, name, price } = props.item;
  const { type } = props;
  return (
    <li tw="flex space-x-10 w-full">
      <div tw="w-1/12 flex items-center">
        <img
          src={image}
          alt="Product"
          tw="rounded w-full object-cover object-center"
        />
      </div>
      <div tw='flex justify-between w-full'>
        <div tw="flex flex-col">
          <span tw="text-gray-600 text-xl font-semibold">
            {capitalize(name.slice(0, 20))}
          </span>
          <span tw="text-gray-400 text-sm inline-block">{type}</span>
        </div>
        <div tw="pt-3 width[20%]">
          <div tw="flex justify-between text-sm">
            <div tw="text-gray-400">1</div>
            <div tw="text-red-400 font-semibold inline-block ml-10!">{price}$</div>
          </div>
        </div>
      </div>
    </li>
  );
};
