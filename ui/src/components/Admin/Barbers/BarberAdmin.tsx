import { barberMock } from "components/Barber/barberMock";
import { EditItems } from "components/Shared/EditItems/EditItems";
import React, { useState } from "react";
import "twin.macro";
import { EditGoods } from './../../Shared/EditItems/EditIGoods';
/** @jsxImportSource @emotion/react */

export const BarbersAdmin = () => {
  const headers = [
    "name",
    "position",
    "gender",
    "contact",
    "email",
    "address",
    "birthday",
    "status",
    "salary",
    'edit'
  ];
  const [barbersAdmin, setBarbersAdmin] = useState(barberMock);

  return <EditItems headers={headers} items={barbersAdmin} />;
};

