import { getAllProductItems } from "api/Product/Product.api";
import { ProductItem } from "model/util.model";
import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import "twin.macro";
import { groupData } from "utils/utils";
import { ProductItems } from "./ProductItems";

export const Product = () => {
  const [productData, setProductData] = useState<ProductItem[][]>([]);
  useEffect(() => {
    const groupDataItem = async () => {
      const data = await (await getAllProductItems()).data;
      const newData = groupData(data, 4);

      setProductData(newData);
    };
    groupDataItem();
  }, []);
  return (
    <div tw="mb-10">
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
