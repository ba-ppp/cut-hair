import { Baber } from "model/util.model";
import React from "react";
import { useHistory } from "react-router";
/** @jsxImportSource @emotion/react */
import "twin.macro";
import { capitalize } from "lodash";

type BarberItemsProps = {
  item: Baber;
};
export const BarberItems = (props: BarberItemsProps) => {
  const { item } = props;
  const history = useHistory();

  const handleClickProfile = () => {
    history.push(`/barber/${item.id}`, {
      item,
    });
  };

  return (
    <div className='hover-border' tw='mb-8'>
      <div
        onClick={handleClickProfile}
        tw="w-full bg-red-100 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center cursor-pointer"
      >
        <div tw="mb-8">
          <img
            tw="object-center object-cover rounded-full h-36 w-36"
            src={item.avt}
            alt="avt"
          />
        </div>
        <div tw="text-center">
          <p tw="text-xl color[#a58b72] font-bold mb-2">{capitalize(item.name)}</p>
          <p tw="text-base text-gray-500 font-bold">{capitalize(item.position)}</p>
        </div>
      </div>
    </div>
  );
};
