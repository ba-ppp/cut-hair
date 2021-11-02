import { BaberCard } from "model/util.model";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useToggle } from "react-use";
/** @jsxImportSource @emotion/react */
import "twin.macro";

type BarberItemsProps = {
  item: BaberCard;
};
export const BarberItems = (props: BarberItemsProps) => {
  const { item } = props;
  const history = useHistory();
  const [idBarber, setIdBarber] = useState<string | null>(null);
  const [isProfilePage, toggleProfilePage] = useToggle(false);
  const handleClickProfile = () => {
    history.push(`/barber?id=${item.id}`);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    if (id) {
      setIdBarber(id);
      toggleProfilePage(true);
    }
    else {
        setIdBarber(null);
        toggleProfilePage(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.search]);
  return (
    <>
      {isProfilePage ? (
        <>{idBarber}</>
      ) : (
        <div
          onClick={handleClickProfile}
          tw="w-full bg-red-100 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center mr-5 mb-5 cursor-pointer"
        >
          <div tw="mb-8">
            <img
              tw="object-center object-cover rounded-full h-36 w-36"
              src={item.avt}
              alt="avt"
            />
          </div>
          <div tw="text-center">
            <p tw="text-xl color[#a58b72] font-bold mb-2">{item.name}</p>
            <p tw="text-base text-gray-500 font-bold">{item.position}</p>
          </div>
        </div>
      )}
    </>
  );
};
