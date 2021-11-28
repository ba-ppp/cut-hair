/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  deleteProductId,
  insertUpdateProductItem,
} from "api/Product/Product.api";
import {
  deleteServiceId,
  insertUpdateServiceItem,
} from "api/Service/Service.api";
import { GoodItem } from "model/util.model";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "twin.macro";
import tw from "twin.macro";
import { v4 } from "uuid";
import { EditGoodRow, ProductAdmin } from "./EditGoodRow";

type EditGoodProps = {
  headers: string[];
  items: any[];
  type: string;
};

export const EditGoods = (props: EditGoodProps) => {
  const { headers, items, type } = props;
  const [data, setData] = useState(items);
  const [idDeleteService, setIdDeleteService] = useState<string[]>([]);
  const [idDeleteProduct, setIdDeleteProduct] = useState<string[]>([]);

  useEffect(() => {
    setData(items);
  }, [items]);

  const handleDelete = (id: string) => {
    if (type === "service") {
      setIdDeleteService([...idDeleteService, id]);
    } else {
      setIdDeleteProduct([...idDeleteProduct, id]);
    }
    const newData = data.filter((i) => i.id !== id);
    setData(newData);
  };

  const handleAddItem = () => {
    setData([
      ...data,
      {
        id: v4(),
        name: "",
        price: 0,
        idType: data[0].idType,
        image: "",
        time: "",
      },
    ]);
  };

  const handleEditItem = (id: string, value: any) => {
    setData(
      data.map((item) => {
        if (item?.id === id) {
          const newItem = {...item};
          newItem.name = value.name;
          newItem.price = value.price;
        
          return newItem
        }
        return item;
      })
    );
  };

  const handleSave = async () => {
    if (type === "product") {
      if (idDeleteProduct.length > 0) {
        await deleteProductId({ data: idDeleteProduct });
      }
      const response = await insertUpdateProductItem({
        data,
      });
      if (response.data.status === 200) {
        toast.success("Product updated successfully");
      } else {
        toast.error("Something went wrong");
      }
      return;
    }
    if (idDeleteService.length > 0) {
      await deleteServiceId({ data: idDeleteService });
    }
    const response = await insertUpdateServiceItem({
      data,
    });
    if (response.data.status === 200) {
      toast.success("Service updated successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <section tw="container mx-auto p-6 capitalize">
      <div tw="w-full mb-8 overflow-hidden rounded-lg shadow-lg mx-auto mt-5">
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
              {data.map((item, index) => {
                return (
                  <EditGoodRow
                    item={item}
                    key={index}
                    handleDelete={handleDelete}
                    handleEditItem={handleEditItem}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div tw="flex justify-end">
        <button
          onClick={handleAddItem}
          tw="cursor-pointer bg-blue-400 font-semibold text-white p-2 w-32 rounded-full hover:bg-blue-600 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2"
        >
          Add
        </button>
        <button
          onClick={handleSave}
          tw="cursor-pointer bg-indigo-400 font-semibold text-white p-2 w-32 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2"
        >
          Save
        </button>
      </div>
    </section>
  );
};

const firstRowStyle = css`
  ${tw`w-1/2`}
`;
const rowStyle = css`
  ${tw`w-1/3`}
`;
