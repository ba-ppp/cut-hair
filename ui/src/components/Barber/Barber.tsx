import { Baber } from "utils/model/util.model";
import React, { useEffect, useState } from "react";
import "twin.macro";
import { BarberItems } from "./BarberItems";
import { barberMock } from "./barberMock";
import { useToggle } from "react-use";
/** @jsxImportSource @emotion/react */

export const Barber = () => {
  const [barberData, setBarberData] = useState<Baber[][]>([]);
  const [idBarber, setIdBarber] = useState<string | null>(null);
  const [isProfilePage, toggleProfilePage] = useToggle(false);

  useEffect(() => {
    let groupData: Baber[] = [];
    const newData: Baber[][] = [];

    barberMock.forEach((i) => {
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

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    if (id) {
      setIdBarber(id);
      toggleProfilePage(true);
    } else {
      setIdBarber(null);
      toggleProfilePage(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.search]);

  return (
    <div tw="w-full bg-gray-100">
      {isProfilePage ? (
        <div tw="mx-auto max-w-6xl">{idBarber}</div>
      ) : (
        <section tw="max-w-6xl mx-auto px-4 py-12">
          {barberData.map((groupData) => {
            return (
              <div tw="flex">
                {groupData.map((item) => {
                  return <BarberItems item={item} />;
                })}
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};
