/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import "twin.macro";
import { ServiceItems } from "./ServiceItem";
import { serviceMock } from "./serviceMock";

export const ServiceInfo = () => {
  const [serviceData, setServiceData] = useState(serviceMock);
  return (
    <>
      {serviceData.map((service) => {
        return (
          <section tw="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
            <article>
              <h2 tw="text-2xl font-extrabold text-gray-900">{service.name}</h2>
              <section tw="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                {service.items.map((item, index) => (
                  <ServiceItems item={item} key={index} />
                ))}
              </section>
            </article>
          </section>
        );
      })}
      <div tw="max-w-7xl mx-auto flex justify-end mb-10 cursor-pointer">
        <button tw="cursor-pointer bg-red-400 font-semibold text-white p-2 w-32 rounded-full hover:bg-red-600 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2">
          Next step
        </button>
      </div>
    </>
  );
};
