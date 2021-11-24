import { getAllProductItems } from "api/Product/Product.api";
import { getAllServiceItems } from 'api/Service/Service.api';
import { setProductItems } from "app/slice/products.slice";
import { setServiceItems } from 'app/slice/service.slice';
import { barberMock } from "components/Barber/barberMock";
import { EditGoods } from "components/Shared/EditItems/EditIGoods";
import { EditItems } from "components/Shared/EditItems/EditItems";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffectOnce } from "react-use";
import "twin.macro";
/** @jsxImportSource @emotion/react */

export const ServicesAdmin = () => {
  const headers = ["name", "price", "edit"];
  const dispatch = useDispatch();

  const [serviceData, setServiceData] = useState([]);

  useEffectOnce(() => {
    (async () => {
      const data = await (await getAllServiceItems()).data;
      setServiceData(data);
      dispatch(setServiceItems(data));
    })();
  });

  return <EditGoods headers={headers} items={serviceData} />;
};
