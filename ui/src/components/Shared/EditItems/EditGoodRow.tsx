import React, { useEffect, useState } from "react";
import "twin.macro";
/** @jsxImportSource @emotion/react */
import { ReactComponent as Eye } from "assets/Icons/eye.svg";
import { ReactComponent as Edit } from "assets/Icons/edit.svg";
import { ReactComponent as Delete } from "assets/Icons/delete.svg";

type EditItemRowProps = {
  item: any;
};

type ProductAdmin = {
  name: string;
  image: string;
  price: number;
};

export const EditGoodRow = (props: EditItemRowProps) => {
  const { item } = props;
  const [data, setData] = useState<ProductAdmin>();
  useEffect(() => {
    setData({
      name: item.name,
      image: item.image,
      price: item.price,
    });
  }, [item]);

  return (
    <tr tw="text-gray-700 hover:bg-gray-100 cursor-pointer border-b">
      <td tw="py-3 px-6 text-left whitespace-nowrap">
        <div tw="flex items-center space-x-2">
          <img
            tw="w-6 h-6 rounded-full"
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="avt"
          />
          <span tw="font-light">{item?.name}</span>
        </div>
      </td>

      <td tw="px-4 py-3 text-sm font-semibold border text-center">{item?.price}$</td>
      <td tw="py-3 px-6 text-center">
        <div tw="flex items-center justify-center">
          <div tw="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <Eye />
          </div>
          <div tw="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <Edit />
          </div>
          <div tw="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
            <Delete />
          </div>
        </div>
      </td>
    </tr>
  );
};
