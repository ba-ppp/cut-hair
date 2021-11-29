/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */
import React from "react";
import "twin.macro";
import { ReactComponent as Check } from "assets/Icons/check.svg";
import { css } from "@emotion/react";
import { useToggle } from "react-use";
import tw from "twin.macro";

type SelectItemsProp = {
  id: string;
  image: string;
  name: string;
  price?: number;
  handleUnselectItem: (id: string) => void;
  handleSelectItem: (id: string) => void;
};

export const SelectItems = (props: SelectItemsProp) => {
  const { id, image, name, price, handleSelectItem, handleUnselectItem } =
    props;
  const [isSelected, toggleSeleted] = useToggle(false);

  const handleClickItem = () => {
    if (isSelected) {
      handleUnselectItem(id);
    } else {
      handleSelectItem(id);
    }
    toggleSeleted(!isSelected);
  };
  return (
    <>
      <div onClick={handleClickItem} tw="relative cursor-pointer">
        {isSelected && (
          <div>
            <Check
              tw="absolute z-50 top[20%] left[42%] opacity-100!"
              height={50}
              width={50}
              fill="green"
            />
          </div>
        )}
        <article
          css={[
            isSelected &&
              css`
                ${tw`opacity-60`}
              `,
          ]}
          tw=" bg-white relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200"
        >
          <div tw="relative w-full h-80 md:h-64 lg:h-44">
            <img src={image} tw="w-full h-full object-center object-cover" />
          </div>

          <div tw="px-3 py-4 flex justify-between">
            <p tw="text-base font-semibold text-gray-900">{name.slice(0,20)}</p>
            <p tw="text-base font-semibold text-gray-900">{price}$</p>
          </div>
        </article>
      </div>
    </>
  );
};
