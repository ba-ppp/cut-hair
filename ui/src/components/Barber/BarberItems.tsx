import { Baber } from "utils/model/util.model";
import React from "react";
import { useHistory } from "react-router";
/** @jsxImportSource @emotion/react */
import "twin.macro";

type BarberItemsProps = {
  item: Baber;
};
export const BarberItems = (props: BarberItemsProps) => {
  const { item } = props;
  const history = useHistory();
 
  const handleClickProfile = () => {
    history.push(`/barber?id=${item.id}`);
  };
  
  return (
    <>
      <div
        onClick={handleClickProfile}
        tw="w-full bg-red-100 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center mr-5 mb-5 cursor-pointer"
      >
        <div tw="mb-8">
          <img
            tw="object-center object-cover rounded-full h-36 w-36"
            src={item.avt}
            alt="avt"
          />
        </div>
        <div tw="text-center">
          <p tw="text-xl color[#a58b72] font-bold mb-2">{item.name}</p>
          <p tw="text-base text-gray-500 font-bold">{item.position}</p>
        </div>
      </div>
    </>
  );
};
