import { ProductItem } from "model/util.model";
import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import "twin.macro";
import { groupData } from "utils/utils";
import { ProductItems } from "./ProductItems";
import { productMock } from "./productMock";

export const Product = () => {
  const [productData, setProductData] = useState<ProductItem[][]>([]);
  useEffect(() => {
    const data = groupData(productMock, 4);
    setProductData(data);
  }, []);
  return (
    <div tw='mb-10'>
      {productData.map((productItems) => {
        return (
          <div tw="flex max-w-6xl mx-auto px-4 py-12">
            {productItems.map((item, index) => (
              <ProductItems item={item} key={index} />
            ))}
          </div>
        );
      })}
    </div>
  );
};
