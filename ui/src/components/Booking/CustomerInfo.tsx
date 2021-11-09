/** @jsxImportSource @emotion/react */
import { setInfoCustomer } from "app/slice/customers.slice";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router';
import { useToggle } from "react-use";
import "twin.macro";
import { v4 } from "uuid";

export const CustomerInfo = () => {
  const [name, setName] = useState("");
  const [dateString, setDate] = useState("");
  const [time, setTime] = useState("");

  const [isClickedDate, toggleClickDate] = useToggle(false);
  const [isClickedTime, toggleClickTime] = useToggle(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    if (name && dateString && time) {
      const date = new Date(`${dateString} ${time}`);
      const currentDate = new Date();
      if (date.getTime() < currentDate.getTime()) {
        toast.error("Date not valid");
        return;
      }
      dispatch(
        setInfoCustomer({
          id: v4(),
          name,
          date,
        })
      );
      history.replace('/booking?step=2')
    } else {
      toast.error("Missed some fill");
    }
  };

  return (
    <div tw="min-h-screen bg-gray-100 p-0 sm:p-12">
      <div tw="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
        <h1 tw="text-2xl font-bold mb-8">Booking information</h1>
        <form>
          <div tw="relative z-0 w-full mb-5">
            <input
              type="text"
              name="name"
              placeholder=" "
              required
              onChange={(e) => setName(e.target.value)}
              tw="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="name"
              tw="absolute duration-300 top-3 text-gray-500"
              className="-z-1 origin-0"
            >
              Your name
            </label>
          </div>

          <div tw="flex flex-row space-x-4">
            <div tw="relative z-0 w-full mb-5">
              <input
                type={isClickedDate ? "date" : "text"}
                name="date"
                placeholder=" "
                onChange={(e) => setDate(e.target.value)}
                onClick={() => toggleClickDate(true)}
                tw="cursor-pointer pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="date"
                tw="absolute duration-300 top-3 text-gray-500"
                className="-z-1 origin-0"
              >
                Date
              </label>
            </div>
            <div tw="relative z-0 w-full">
              <input
                type={isClickedTime ? "time" : "text"}
                name="time"
                placeholder=" "
                onChange={(e) => setTime(e.target.value)}
                onClick={() => toggleClickTime(true)}
                tw="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="time"
                tw="absolute duration-300 top-3 text-gray-500"
                className="-z-1 origin-0"
              >
                Time
              </label>
            </div>
          </div>

          <button
            id="button"
            type="button"
            onClick={handleSubmit}
            tw="cursor-pointer w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150  rounded-lg  outline-none bg-red-400 hover:bg-red-500 hover:shadow-lg focus:outline-none"
          >
            Next step
          </button>
        </form>
      </div>
    </div>
  );
};
