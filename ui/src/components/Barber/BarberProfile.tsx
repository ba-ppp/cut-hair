import React from "react";
import "twin.macro";
import { Baber } from "utils/model/util.model";

type BaberProfileProps = {
  item: Baber;
};
export const BarberProfile = (props: BaberProfileProps) => {
  const { item } = props;
  return (
    <img
      tw="object-center object-cover rounded-full h-36 w-36"
      src={item.avt}
      alt="avt"
    />
  );
};
