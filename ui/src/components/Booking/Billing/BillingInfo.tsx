/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { insertBill } from "api/Bill/Bill.api";
import { RootState } from "app/reducers/reducers";
import { GoodItem } from "model/util.model";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useEffectOnce } from "react-use";
import tw from "twin.macro";
import { itemSelectedArray } from "utils/utils";
import { v4 } from "uuid";
import { BillingItem } from "./BillingItem";

export const BillingInfo = () => {
  const [selectedServiceItems, setSelectedServiceItems] = useState<GoodItem[]>(
    []
  );
  const [selectedProductItems, setSelectedProductItems] = useState<GoodItem[]>(
    []
  );
  const price = useRef<number>(0);

  const customers = useSelector((state: RootState) => state.customers);
  const services = useSelector((state: RootState) => state.services);
  const products = useSelector((state: RootState) => state.products);
  const barbers = useSelector((state: RootState) => state.barbers);

  useEffectOnce(() => {
    const serviceData = itemSelectedArray(
      services.items,
      services.idSelectedItems
    );
    setSelectedServiceItems(serviceData);

    const productData = itemSelectedArray(
      products.items,
      products.idSelectedItems
    );
    setSelectedProductItems(productData);
    serviceData.forEach((item) => {
      price.current += item.price;
    });
    productData.forEach((item) => {
      price.current += item.price;
    });
  });

  const handleSubmit = async () => {
    const data = {
      idBill: v4(),
      customer: customers,
      idBarber: barbers.idBarberSelected,
      idSelectedProducts: products.idSelectedItems,
      idSelectedServices: services.idSelectedItems,
    };
    const response = await insertBill(data);
    if (response.data.status === 200) {
      toast.success("Booking successfully");
    }
  };
  return (
    <div tw="bg-gray-200">
      <div tw="flex justify-around py-10">
        <div tw="w-1/2">
          <div tw="">
            <div>
              <section>
                <h2 tw="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2 ml-1.5">
                  Billing Information
                </h2>
                <div tw="p-8 mb-3 bg-white text-gray-600 rounded-lg shadow-lg">
                  <label tw="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span tw="text-right px-2 mr-2">Name</span>
                    <input
                      name="name"
                      css={inputStyle}
                      value={customers.name}
                      disabled
                    />
                  </label>
                  <label tw="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span tw="text-right px-2 mr-2">Phone</span>
                    <input
                      name="phone"
                      type="text"
                      css={inputStyle}
                      disabled
                      value={customers.phone}
                    />
                  </label>
                  <label tw="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span tw="text-right px-2 mr-2">Date</span>
                    <input
                      name="date"
                      type="text"
                      css={inputStyle}
                      disabled
                      value={customers.date.toISOString().split("T")[0]}
                    />
                  </label>
                  <label tw="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span tw="text-right px-2 mr-2">Time</span>
                    <input
                      name="time"
                      type="text"
                      css={inputStyle}
                      disabled
                      value={
                        customers.date.toISOString().split("T")[1].split(".")[0]
                      }
                    />
                  </label>
                </div>
              </section>
            </div>
          </div>
          <div tw='w-1/2 flex mx-auto space-x-20'>
            <button
              onClick={handleSubmit}
              tw="mt-5 bg-red-400 hover:bg-red-500 p-3 rounded-full text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors cursor-pointer"
            >
              Booking
            </button>
            <button
              onClick={() => toast.error("This feature is coming soon")}
              tw="mt-5 bg-green-400 hover:bg-green-500 p-3 rounded-full text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors cursor-pointer"
            >
              Pay online {price.current}$
            </button>
          </div>
        </div>

        <div tw="bg-white w-1/3 h-1/3 rounded-lg shadow-lg">
          <h1 tw="py-6 border-b-2 text-xl text-gray-600 px-8">Order Summary</h1>
          <ul tw="py-6 border-b space-y-6 px-8">
            {selectedServiceItems.map((item, index) => (
              <BillingItem item={item} type="Service" key={index} />
            ))}
            {selectedProductItems.map((item, index) => (
              <BillingItem item={item} type="Product" key={index} />
            ))}
          </ul>
          <div tw="px-8 border-b">
            <div tw="flex justify-between py-4 text-gray-600">
              <span>Subtotal</span>
              <span tw="font-semibold text-red-500">{price.current}$</span>
            </div>
            <div tw="flex justify-between py-4 text-gray-600">
              <span>Shipping</span>
              <span tw="font-semibold text-red-500">Free</span>
            </div>
          </div>
          <div tw="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
            <span>Total</span>
            <span>{price.current}$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const inputStyle = css`
  ${tw`width[80%] mx-auto text-center pt-3 pb-2 block px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200`}
`;
