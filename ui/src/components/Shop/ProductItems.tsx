/** @jsxImportSource @emotion/react */
import "twin.macro";
import React from "react";
import { GoodItem } from "model/util.model";
import { css } from '@emotion/react';
import { useToggle } from 'react-use';
import toast from 'react-hot-toast';
type ProductItemsProps = {
  item: GoodItem;
};

export const ProductItems = (props: ProductItemsProps) => {
  const { item } = props;
const [isHover, toggleHover] = useToggle(false)
  return (
    <div
    onMouseEnter={() => toggleHover(true)}
    onMouseLeave={() => toggleHover(false)}
      css={[isHover && hoverStyle]}
      tw="max-w-sm w-full mr-10 -mb-8 cursor-pointer"
    >
      <div tw="inline-block flex-col justify-center p-5 bg-white rounded-lg shadow-2xl">
        <div>
          <div tw="text-sm capitalize text-gray-900 font-bold text-overflow[ellipsis]! max-height[20px] mb-0.5">
            {item.name}
          </div>
        </div>
        <div>
          <img
            src={item.image}
            tw="w-full object-cover object-center h-1/2"
            alt="img"
          />
        </div>
        <div>
          <div tw="flex flex-col md:flex-row justify-between items-center text-gray-900">
            <p tw="font-bold text-xl">{item.price}$</p>
            <button onClick={() => toast.error('This feature is coming soon')} tw="transform cursor-pointer px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-cuthair-red  border-2 border-gray-900 focus:outline-none">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const hoverStyle = css `
transform: scale(1.1)
`
