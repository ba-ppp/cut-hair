import { deleteBarberId, insertUpdateBarber } from "api/Baber/Baber.api";
import { Baber } from "model/util.model";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
/** @jsxImportSource @emotion/react */
import "twin.macro";
import { v4 } from "uuid";
import { EditItemRow } from "./EditItemRow";

type EditItemsProps = {
  headers: string[];
  items: any[];
};

export const EditItems = (props: EditItemsProps) => {
  const { headers, items } = props;
  const [data, setData] = useState(items ?? []);
  const [idDelete, setIdDelete] = useState<string[]>([]);

  useEffect(() => {
    setData(items);
  }, [items]);

  const handleDelete = (id: string) => {
    setData(data.filter((item) => item.id !== id));
    setIdDelete([...idDelete, id]);
  };

  const handleAddItem = () => {
    setData([
      ...data,
      {
        id: v4(),
        name: "",
        contact: "",
        address: "",
        email: "",
        birthday: "",
        salary: 0,
        position: "employee",
        gender: "male",
        isActive: false,
      },
    ]);
  };

  const handleSave = async () => {
    await deleteBarberId({ data: idDelete });
    const response = await insertUpdateBarber({
      data,
    });
    if (response.status === 200) {
      toast.success("Save successfully");
    }
  };

  const handleEditItem = (id: string, value: Baber) => {
    setData(data.map((item) => (item.id === id ? value : item)));
  };
  return (
    <div tw="w-11/12 ml-14 mt-0">
      <div tw="bg-white shadow-md rounded my-6">
        <table tw="min-w-max w-full table-auto">
          <thead>
            <tr tw="bg-gradient-to-r from-indigo-500 via-indigo-500 to-blue-500 text-white uppercase text-sm leading-normal">
              {headers.map((header, index) => {
                return (
                  <th tw="py-3 px-6 text-center font-black" key={index}>
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody tw="text-gray-600 text-sm font-light capitalize">
            {data.map((item, index) => {
              return (
                <EditItemRow
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
    </div>
  );
};
