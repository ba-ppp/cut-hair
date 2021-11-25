import { getAllBaber } from 'api/Baber/Baber.api';
import { setBaberItems } from 'app/slice/babers.slice';
import { barberMock } from "components/Barber/barberMock";
import { EditItems } from "components/Shared/EditItems/EditItems";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffectOnce } from 'react-use';
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
  ];
  const [barbersAdmin, setBarbersAdmin] = useState([]);

  const dispatch = useDispatch();

  useEffectOnce(() => {
    (async () => {
      const data = await (await getAllBaber()).data;
      setBarbersAdmin(data);
      dispatch(setBaberItems(data));
    })();
  });

  return <EditItems headers={headers} items={barbersAdmin} />;
};

