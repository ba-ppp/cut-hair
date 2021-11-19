/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import "twin.macro";
import { ReactComponent as Check } from "assets/Icons/check.svg";
import { css } from "@emotion/react";
import { useToggle } from "react-use";
import tw from "twin.macro";
import { Baber } from 'model/util.model';

type ServiceItemProp = {
  item: Baber;
  handleSelectItem: (id: string) => void;
  idSelectedItem?: string;
};

export const SelectOneItem = (props: ServiceItemProp) => {
  const { item, handleSelectItem, idSelectedItem } = props;
  const [isSelected, toggleSeleted] = useToggle(false);

  const handleClickItem = () => {
   handleSelectItem(item.id)
  }
  useEffect(() => {
    if (idSelectedItem === item.id) {
        toggleSeleted(true);
    }
    else {
        toggleSeleted(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[idSelectedItem, item.id])
  return (
    <>
      <div
        onClick={handleClickItem}
        tw="relative cursor-pointer"
      >
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
            <img
              src={item?.avt}
              tw="w-full h-full object-center object-cover"
            />
          </div>

          <div tw="px-3 py-4">
            {/* <h3 tw="text-sm text-gray-500 pb-2">
              <div tw="py-1 px-2 text-black rounded-lg">
                <span tw="absolute inset-0"></span>
                {item.name}
              </div>
            </h3> */}
            <p tw="text-base font-semibold text-gray-900">{item.name}</p>
          </div>
        </article>
      </div>
    </>
  );
};
