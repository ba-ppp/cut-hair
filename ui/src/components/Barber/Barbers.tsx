/** @jsxImportSource @emotion/react */
import { Baber } from "model/util.model";
import React, { useEffect, useState } from "react";
import "twin.macro";
import { BarberItems } from "./BarberItems";
// import { barberMock as baberData } from "./barberMock";
import { useEffectOnce, useToggle } from "react-use";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/reducers/reducers";
import { getAllBaber } from "api/Baber/Baber.api";
import { groupData } from "utils/utils";

export const Barber = () => {
  const [barberData, setBarberData] = useState<Baber[][]>([]);
  const [idBarber, setIdBarber] = useState<string | null>(null);
  const [isProfilePage, toggleProfilePage] = useToggle(false);

  const barbers = useSelector((state: RootState) => state.barbers);

  const dispatch = useDispatch();

  useEffectOnce(() => {
    const groupBaberItems = async () => {
      const baberData = await getAllBaber()
      
      const data = groupData(baberData, 3);
      dispatch(setBarberData(data))
      setBarberData(data);
    };
    groupBaberItems();
  });

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
        <section tw="max-w-5xl mx-auto px-4 py-12">
          {barberData.map((groupData) => {
            return (
              <div tw="w-full mx-auto flex space-x-32">
                {groupData.map((item) => (
                  <BarberItems item={item} />
                ))}
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};
