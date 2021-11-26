import { getAllProductItems } from 'api/Product/Product.api';
import { setProductItems } from 'app/slice/products.slice';
import { EditGoods } from 'components/Shared/EditItems/EditIGoods';
import { GoodItem } from 'model/util.model';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffectOnce } from 'react-use';
import "twin.macro";
/** @jsxImportSource @emotion/react */

export const ProductsAdmin = () => {
  
    const headers = [
    "name",
    "price",
  ];
  const dispatch = useDispatch();

  const [productData, setProductData] = useState<GoodItem[]>([]);

  useEffectOnce(() => {
    (async () => {
      const data = await (await getAllProductItems()).data;
      const structuredData: GoodItem[] = [];
      data.forEach((item: any) => {
        structuredData.push(...item.items.map((i: any) => i));
      })
      setProductData(structuredData);
      
      dispatch(setProductItems(data));
    })();
  });

  return <EditGoods headers={headers} items={productData} type='product' />;
};

