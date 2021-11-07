/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useEffectOnce, useToggle } from "react-use";
import "twin.macro";

export const Booking = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isClickedDate, toggleClickDate] = useToggle(false);

  useEffectOnce(() => {
    const urlParam = new URLSearchParams(window.location.search);
    const phone = urlParam.get("phone")!;

    setPhoneNumber(phone);
  });

  return (
    <div tw="min-h-screen bg-gray-100 p-0 sm:p-12">
    <div tw="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
      <h1 tw="text-2xl font-bold mb-8">Customer information</h1>
      <form>
        <div tw="relative z-0 w-full mb-5">
          <input
            type="text"
            name="name"
            placeholder=" "
            required
            tw="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label htmlFor="name" tw="absolute duration-300 top-3 text-gray-500" className='-z-1 origin-0'>Enter name</label>
          <span tw="text-sm text-red-600 hidden" id="error">Name is required</span>
        </div>
  
       
  
        <div tw="flex flex-row space-x-4">
          <div tw="relative z-0 w-full mb-5">
            <input
              type={isClickedDate ? 'date' : 'text'}
              name="date"
              placeholder=" "
              onClick={() => toggleClickDate(true)}
              tw="cursor-pointer pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label htmlFor="date" tw="absolute duration-300 top-3 text-gray-500"  className='-z-1 origin-0'>Date</label>
            <span tw="text-sm text-red-600 hidden" id="error">Date is required</span>
          </div>
          <div tw="relative z-0 w-full">
            <input
              type="time"
              name="time"
              placeholder=" "
            //   onclick="this.setAttribute('type', 'time');"
              tw="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label htmlFor="time" tw="absolute duration-300 top-3 text-gray-500"  className='-z-1 origin-0'>Time</label>
            <span tw="text-sm text-red-600 hidden" id="error">Time is required</span>
          </div>
        </div>
  
        <div tw="relative z-0 w-full mb-5">
          <input
            type="number"
            name="money"
            placeholder=" "
            tw="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <div tw="absolute top-0 left-0 mt-3 ml-1 text-gray-400">$</div>
          <label htmlFor="money" tw="absolute duration-300 top-3 left-5 text-gray-500"  className='-z-1 origin-0'>Amount</label>
          <span tw="text-sm text-red-600 hidden" id="error">Amount is required</span>
        </div>
  
        <div tw="relative z-0 w-full mb-5">
          <input
            type="text"
            name="duration"
            placeholder=" "
            tw="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <div tw="absolute top-0 right-0 mt-3 mr-4 text-gray-400">min</div>
          <label htmlFor="duration" tw="absolute duration-300 top-3 text-gray-500"  className='-z-1 origin-0'>Duration</label>
          <span tw="text-sm text-red-600 hidden" id="error">Duration is required</span>
        </div>
  
        <button
          id="button"
          type="button"
          tw="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-red-500 hover:bg-red-600 hover:shadow-lg focus:outline-none"
        >
          Toggle Error
        </button>
      </form>
    </div>
  </div>
  )
};
