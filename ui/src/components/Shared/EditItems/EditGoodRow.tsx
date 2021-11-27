/** @jsxImportSource @emotion/react */
import { ReactComponent as Delete } from "assets/Icons/delete.svg";
import { GoodItem } from "model/util.model";
import React, { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import "twin.macro";
import { inputStyle } from "./EditItemRow";

type EditItemRowProps = {
  item: any;
  handleDelete: (id: string) => void;
  handleEditItem: (id: string, item: ProductAdmin) => void;
};

export type ProductAdmin = {
  name: string;
  image: string;
  price: number;
};

export const EditGoodRow = (props: EditItemRowProps) => {
  const { item } = props;
  const [data, setData] = useState<ProductAdmin>();
  const [isEditName, toggleEditName] = useState(false);
  const [isEditPrice, toggleEditPrice] = useState(false);

  const rowRef = useRef(null);

  useEffect(() => {
    setData({
      name: item.name,
      image: item.image,
      price: item.price,
    });
  }, [item]);

  const resetEdit = () => {
    toggleEditName(false);
    toggleEditPrice(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      resetEdit();
      console.log(`id`, item.id);
      props.handleEditItem(item.id, data!);
    }
  };

  useClickAway(rowRef, () => {
    resetEdit();
  });

  return (
    <tr
      tw="text-gray-700 hover:bg-gray-100 cursor-pointer border-b"
      ref={rowRef}
    >
      <td
        tw="py-3 px-6 text-left whitespace-nowrap"
        onClick={() => toggleEditName(true)}
      >
        <div tw="flex items-center space-x-2">
          <img
            tw="w-6 h-6 rounded-full"
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="avt"
          />
          {isEditName ? (
            <input
              onKeyDown={handleKeyDown}
              onChange={(e) => setData({ ...data!, name: e.target.value })}
              css={inputStyle}
              tw="text-sm font-semibold"
              value={data?.name}
              type="text"
              autoFocus
            />
          ) : (
            <span tw="font-bold">{data?.name}</span>
          )}
        </div>
      </td>

      <td
        tw="px-4 py-3 text-sm font-semibold border text-center"
        onClick={() => toggleEditPrice(true)}
      >
        {isEditPrice ? (
          <input
            onKeyDown={handleKeyDown}
            onChange={(e) =>
              setData({ ...data!, price: parseInt(e.target.value) })
            }
            css={inputStyle}
            tw="text-sm font-semibold text-center"
            value={data?.price}
            type="text"
            autoFocus
          />
        ) : (
          <span tw="font-bold">{data?.price}$</span>
        )}
      </td>
      <td
        tw="py-3 px-6 text-center hover:text-red-500"
        onClick={() => props.handleDelete(item.id)}
      >
        <div tw="flex items-center justify-center">
          <div tw="w-4 mr-2 transform hover:scale-110">
            <Delete />
          </div>
        </div>
      </td>
    </tr>
  );
};
