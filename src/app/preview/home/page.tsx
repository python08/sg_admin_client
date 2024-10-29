"use client";

import { ProductsType } from "@common/temp/temp";
import FallBack from "@components/ErrorFallBack/FallBack";

import { getAllProducts } from "src/apis/product/product";
import Body from "@/content/main-page/body/Body";
import { useEffect, useState } from "react";

/* eslint-disable */
export default function Home() {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.error ? [] : res);
    });
  }, []);

  if (!products || !Array.isArray(products)) {
    return <FallBack />;
  }
  return <Body products={products}/>;
}
