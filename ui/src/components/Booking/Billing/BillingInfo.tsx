/** @jsxImportSource @emotion/react */
import { RootState } from 'app/reducers/reducers';
import React from "react";
import { useSelector } from 'react-redux';
import "twin.macro";

export const BillingInfo = () => {
  const customers = useSelector((state: RootState) => state.customers);
  return (
    <div tw="bg-gray-200">
      <div tw="flex justify-around py-10">
        <div tw="w-1/2">
          <div tw="">
            <div>
              <section>
                <h2 tw="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                  Shipping & Billing Information
                </h2>
                <div tw="px-5 py-5 mb-3 bg-white text-gray-600 rounded-lg shadow-lg">
                  <label tw="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span tw="text-right px-2">Name</span>
                    <input
                      name="name"
                      tw="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                      value={customers.name}
                      disabled
                    />
                  </label>
                  <label tw="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span tw="text-right px-2">Phone</span>
                    <input
                      name="phone"
                      type="text"
                      tw="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                      disabled
                      value={customers.phone}
                    />
                  </label>
                  <label tw="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span tw="text-right px-2">Date</span>
                    <input
                      name="date"
                      tw="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                      type="date"
                      disabled
                      value={customers.date.toISOString().split('T')[0]}
                    />
                  </label>
                  <label tw="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span tw="text-right px-2">Time</span>
                    <input
                      name="time"
                      tw="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                      disabled
                      type="time"
                      value={customers.date.toISOString().split('T')[1].split('.')[0]}
                    />
                  </label>
                  
                </div>
              </section>
            </div>
          </div>

          <button tw="mt-5 bg-red-300 px-4 py-3 rounded-full text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
            Pay €846.98
          </button>
        </div>

        <div tw="bg-white w-1/3 h-1/3 rounded-lg shadow-lg">
          <h1 tw="py-6 border-b-2 text-xl text-gray-600 px-8">Order Summary</h1>
          <ul tw="py-6 border-b space-y-6 px-8">
            <li tw="grid grid-cols-6 gap-2 ">
              <div tw="col-span-1 self-center">
                <img
                  src="https://bit.ly/3oW8yej"
                  alt="Product"
                  tw="rounded w-full"
                />
              </div>
              <div tw="flex flex-col col-span-3 pt-2">
                <span tw="text-gray-600 text-2xl font-semibold">
                  Studio 2 Headphone
                </span>
                <span tw="text-gray-400 text-sm inline-block pt-2">
                  Red Headphone
                </span>
              </div>
              <div tw="col-span-2 pt-3">
                <div tw="flex items-center space-x-2 text-sm justify-between">
                  <span tw="text-gray-400">2 x €30.99</span>
                  <span tw="text-red-400 font-semibold inline-block">
                    €61.98
                  </span>
                </div>
              </div>
            </li>
            <li tw="grid grid-cols-6 gap-2 border-b-0">
              <div tw="col-span-1 self-center">
                <img
                  src="https://bit.ly/3lCyoSx"
                  alt="Product"
                  tw="rounded w-full"
                />
              </div>
              <div tw="flex flex-col col-span-3 pt-2">
                <span tw="text-gray-600 text-2xl font-semibold">
                  Apple iPhone 13
                </span>
                <span tw="text-gray-400 text-sm inline-block pt-2">Phone</span>
              </div>
              <div tw="col-span-2 pt-3">
                <div tw="flex items-center space-x-2 text-sm justify-between">
                  <span tw="text-gray-400">1 x €785</span>
                  <span tw="text-red-400 font-semibold inline-block">€785</span>
                </div>
              </div>
            </li>
          </ul>
          <div tw="px-8 border-b">
            <div tw="flex justify-between py-4 text-gray-600">
              <span>Subtotal</span>
              <span tw="font-semibold text-red-500">€846.98</span>
            </div>
            <div tw="flex justify-between py-4 text-gray-600">
              <span>Shipping</span>
              <span tw="font-semibold text-red-500">Free</span>
            </div>
          </div>
          <div tw="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
            <span>Total</span>
            <span>€846.98</span>
          </div>
        </div>
      </div>
    </div>
  );
};
