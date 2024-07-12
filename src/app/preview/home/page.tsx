"use client";

import { ProductsType } from "@common/temp/temp";
import FallBack from "@components/ErrorFallBack/FallBack";

import { getUpdates } from "@/api/updates/updates";
import { getAllProducts } from "@/api/product/product";
import Body from "@/content/main-page/body/Body";
import { useEffect, useState } from "react";

/* eslint-disable */
export default function Home() {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.error ? [] : res.data);
    });

    getUpdates().then((res) => {
      setUpdates(res.error ? [] : res.data);
    });
  }, []);

  if (!products || !Array.isArray(products)) {
    return <FallBack />;
  }
  return <Body products={products} updates={updates} />;
}
