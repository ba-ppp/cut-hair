import { BaberCard } from "model/util.model";
import React, { useEffect, useState } from "react";
import "twin.macro";
import { BarberItems } from "./BarberItems";
import { barberMock } from "./barberMock";
/** @jsxImportSource @emotion/react */

export const Barber = () => {
  const [barberData, setBarberData] = useState<BaberCard[][]>([]);
  useEffect(() => {
    let groupData: BaberCard[] = [];
    const newData: BaberCard[][] = [];

    barberMock.forEach((i) => {
      console.log(`i`, i);
      if (groupData.length < 3) {
        groupData.push(i);
      } else {
        newData.push(groupData);
        groupData = [i];
      }
    });

    if (groupData.length) {
      newData.push(groupData);
    }

    setBarberData(newData);
  }, []);

  return (
    <div tw="w-full bg-gray-100">
      <section tw="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        {barberData.map((groupData) => {
          return (
            <div tw="flex">
              {groupData.map((item) => {
                return <BarberItems item={item} />;
              })}
            </div>
          );
        })}
        <div tw="flex"></div>
      </section>
    </div>
  );
};
