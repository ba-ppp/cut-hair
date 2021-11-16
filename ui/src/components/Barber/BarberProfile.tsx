/** @jsxImportSource @emotion/react */
import React from "react";
import "twin.macro";
import { Baber } from "model/util.model";
import { useHistory } from "react-router";
import { css } from "@emotion/react";
import tw from "twin.macro";

export const BarberProfile = () => {
  const history = useHistory();

  const { item } = history.location.state as { item: Baber };
  
  return (
    <div tw="bg-gray-50">
      <div tw="flex">
        <div tw="w-1/3 justify-center flex items-center">
          <div tw="mt-10 text-center flex-col">
            <img
              tw="object-center object-cover rounded-full h-36 w-36"
              src={item.avt}
              alt="avt"
            />
            <h2 tw="text-center">{item.name}</h2>
            <div
              tw="mx-auto w-1/2 py-1 px-2 rounded text-white text-sm"
              css={[
                item.isActive
                  ? css`
                      ${tw`bg-green-500`}
                    `
                  : css`
                      ${tw`bg-red-500`}
                    `,
              ]}
            >
              {item.isActive ? "Active" : "Busy"}
            </div>
          </div>
        </div>
        <div>
          <div tw="mt-10 w-full h-56 bg-white rounded-3xl p-8 shadow-2xl ">
            <h2 tw="-mt-0">About</h2>

            <div tw="flex space-x-24">
              <div tw="space-y-7 font-semibold">
                <div>First name</div>
                <div>Gernder</div>
                <div>Current Address</div>
                <div>Email</div>
              </div>
              <div tw="space-y-7 text-right">
                <div>{item.name.split(" ")[0]}</div>
                <div>{item.gender}</div>
                <div>{item.address}</div>
                <div>{item.email}</div>
              </div>
              <div tw="space-y-7 font-semibold">
                <div>Last name</div>
                <div>Contact No.</div>
                <div>Birthday</div>
                <div>Position</div>
              </div>
              <div tw="space-y-7 text-right">
                <div>{item.name.split(" ")[1]}</div>
                <div>{item.contact}</div>
                <div>{item.birthDay}</div>
                <div>{item.position}</div>
              </div>
            </div>
          </div>
          <div tw="flex w-full h-56 space-x-80 bg-white mt-10 rounded-2xl p-9 shadow-2xl">
            <div>
              <h2>Experience</h2>
              <div tw="space-y-5">
                <div>
                  <div tw="text-red-400">Worked at LK Salon</div>
                  <div tw="font-size[12px] text-gray-400">
                    March 2020 - November 2020
                  </div>
                </div>
                <div>
                  <div tw="text-red-400">Intership at BK Barber Shop</div>
                  <div tw="font-size[12px] text-gray-400">
                    November 2020 - December 2020
                  </div>
                </div>
                <div>
                  <div tw="text-red-400">Worked at BK Barber Shop</div>
                  <div tw="font-size[12px] text-gray-400">
                    December 2020 - Now
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2>Education</h2>
              <div tw="text-red-400">Graduated Can Tho University</div>
              <div tw="font-size[12px] text-gray-400">March 2020</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
