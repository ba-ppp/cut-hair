/** @jsxImportSource @emotion/react */
import { setIdBarberSelected } from 'app/slice/babers.slice';
import { barberMock } from "components/Barber/barberMock";
import { SelectOneItem } from "components/Shared/SelectItems/SelectOneItem";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "twin.macro";

export const BaberInfo = () => {
  const [barberData, setBarberData] = useState(barberMock);
  const [idSelectedItem, setIdSelectedItem] = useState(barberData[0].id);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/booking?step=4");
    dispatch(setIdBarberSelected(idSelectedItem));
  };

  const handleSelectItem = (id: string) => {
    setIdSelectedItem(id);
  };

  useEffect(() => {
    //   const getItems = async () => {
    //       try {
    //           const data = await (await getAllBaber()).data;
    //           dispatch(setBaberItems(data))
    //           setBarberData(data)
    //         }
    //         catch (error){
    //           console.log(error)
    //         }
    //   }
    //   getItems();
  }, []);

  return (
    <>
      <section tw="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
        <article>
          <h2 tw="text-2xl font-extrabold text-gray-900">Select your barber</h2>
          <section tw="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {barberData.map((item, index) => (
              <SelectOneItem
                item={item}
                key={index}
                handleSelectItem={handleSelectItem}
                idSelectedItem={idSelectedItem}
              />
            ))}
          </section>
        </article>
      </section>

      <div tw="max-w-7xl mx-auto flex justify-end mb-10 cursor-pointer">
        <button
          onClick={handleSubmit}
          tw="cursor-pointer bg-red-400 font-semibold text-white p-2 w-32 rounded-full hover:bg-red-600 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2"
        >
          Next step
        </button>
      </div>
    </>
  );
};
