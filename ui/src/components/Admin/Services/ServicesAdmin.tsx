import { getAllServiceItems } from 'api/Service/Service.api';
import { setServiceItems } from 'app/slice/service.slice';
import { EditGoods } from "components/Shared/EditItems/EditIGoods";
import { GoodItem } from 'model/util.model';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffectOnce } from "react-use";
import "twin.macro";
/** @jsxImportSource @emotion/react */

export const ServicesAdmin = () => {
  const headers = ["name", "price"];
  const dispatch = useDispatch();

  const [serviceData, setServiceData] = useState<GoodItem[]>([]);

  useEffectOnce(() => {
    (async () => {
      const data = await (await getAllServiceItems()).data;
      const structuredData: GoodItem[] = [];
      data.forEach((item: any) => {
        structuredData.push(...item.items.map((i: any) => i));
      })
      setServiceData(structuredData);
      dispatch(setServiceItems(data));
    })();
  });

  return <EditGoods headers={headers} items={serviceData} type='service' />;
};
