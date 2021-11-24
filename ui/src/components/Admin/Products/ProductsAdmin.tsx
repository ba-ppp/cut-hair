import { getAllProductItems } from 'api/Product/Product.api';
import { setProductItems } from 'app/slice/products.slice';
import { barberMock } from "components/Barber/barberMock";
import { EditGoods } from 'components/Shared/EditItems/EditIGoods';
import { EditItems } from "components/Shared/EditItems/EditItems";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffectOnce } from 'react-use';
import "twin.macro";
/** @jsxImportSource @emotion/react */

export const ProductsAdmin = () => {
  
    const headers = [
    "name",
    "price",
    'edit',
  ];
  const dispatch = useDispatch();

  const [productData, setProductData] = useState([]);

  useEffectOnce(() => {
    (async () => {
      const data = await (await getAllProductItems()).data;
      setProductData(data);
      dispatch(setProductItems(data));
    })();
  });

  return <EditGoods headers={headers} items={productData} />;
};

