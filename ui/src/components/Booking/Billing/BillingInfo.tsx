/** @jsxImportSource @emotion/react */
import React from "react";
import "twin.macro";

export const BillingInfo = () => {
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
                      placeholder="Try Odinsson"
                    />
                  </label>
                  <label tw="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span tw="text-right px-2">Email</span>
                    <input
                      name="email"
                      type="email"
                      tw="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                      placeholder="try@example.com"
                    />
                  </label>
                  <label tw="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span tw="text-right px-2">Address</span>
                    <input
                      name="address"
                      tw="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                      placeholder="10 Street XYZ 654"
                    />
                  </label>
                  <label tw="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span tw="text-right px-2">City</span>
                    <input
                      name="city"
                      tw="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                      placeholder="San Francisco"
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
