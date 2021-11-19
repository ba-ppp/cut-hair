import { getAllProductItems } from "api/Product/Product.api";
import { Goods } from "model/util.model";
import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import "twin.macro";
import { ProductItems } from "./ProductItems";

export const Product = () => {
  const [productData, setProductData] = useState<Goods[]>([]);
  useEffect(() => {
    (async () => {
      const data = await (await getAllProductItems()).data;
      setProductData(data);
    })();
  }, []);
  return (
    <div tw="mb-10">
      {productData.map((productItems) => {
        return (
          <>
            <h2 tw='max-w-6xl mx-auto mb-0'>{productItems.name}</h2>
            <div tw="flex max-w-6xl mx-auto px-4 py-12">
              {productItems.items.map((item, index) => (
                <ProductItems item={item} key={index} />
              ))}
            </div>
          </>
        );
      })}
    </div>
  );
};
