/** @jsxImportSource @emotion/react */
import { setSelectedItems, setServiceItems } from 'app/slice/service.slice';
import React, { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import "twin.macro";
import { serviceMock } from "../serviceMock";
import { useEffect } from 'react';
import { SelectItems } from 'components/Shared/SelectItems/SelectItems';

export const ServiceInfo = () => {
  const [serviceData, setServiceData] = useState(serviceMock);

  const currentSelectedServiceId = useRef<string[]>([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch(setSelectedItems(currentSelectedServiceId.current));
    history.push('/booking?step=3')
  };

  const handleSelectItem = (id: string) => {
    currentSelectedServiceId.current.push(id);
  };
  const handleUnselectItem = (id: string) => {
    const foundIndex = currentSelectedServiceId.current.findIndex(
      (i) => i === id
    );
    if (foundIndex >= 0) {
      currentSelectedServiceId.current.splice(foundIndex, 1);
    }
  };

  useEffect(() => {
    dispatch(setServiceItems(serviceMock))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {serviceData.map((service) => {
        return (
          <section tw="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
            <article>
              <h2 tw="text-2xl font-extrabold text-gray-900">{service.name}</h2>
              <section tw="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                {service.items.map((item, index) => (
                  <SelectItems
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    key={index}
                    handleSelectItem={handleSelectItem}
                    handleUnselectItem={handleUnselectItem}
                  />
                ))}
              </section>
            </article>
          </section>
        );
      })}
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
