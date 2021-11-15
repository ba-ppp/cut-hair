import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import "twin.macro";

import { ReactComponent as Background } from "assets/Icons/background.svg";
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setPhoneCustomer } from 'app/slice/customers.slice';
import { REGREX } from 'utils/regrex';
import toast from 'react-hot-toast';

export const HomePage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
 
  const history = useHistory();
  const dispatch = useDispatch();

  const handleInputPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  }

  const handleBooking = () => {
    const check = phoneNumber.match(REGREX.PHONE_NUMBER)
    if (!check) {
      toast.error('Input vaild phone number')
      return;
    }
    dispatch(setPhoneCustomer(phoneNumber))
    history.push(`/booking?step=1`);
  }

  return (
    <div tw="py-16 px-4">
      <div tw="flex items-center justify-center">
        <div tw="w-1/3">
          <h1 tw="font-bold text-5xl width[300px] text-gray-900 leading-tight">
            We are here for your style
          </h1>
          <hr tw="w-24 h-1 bg-red-500 rounded-full mt-8 ml-0"></hr>
          <p tw="text-gray-800 text-base leading-relaxed mt-8 font-semibold">
            You just leave your phone number here
          </p>
          <div tw="flex space-x-6">
            <input onChange={handleInputPhoneNumber} value={phoneNumber} tw="(rounded-md h-6 border-red-300 outline-none focus:(outline-none))!" />
            <button onClick={handleBooking} tw="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded cursor-pointer">
              Book
            </button>
          </div>
        </div>
        <div tw="">
          <Background height={450} width={450} />
        </div>
      </div>
    </div>
  );
};
