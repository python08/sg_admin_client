"use client";

import { useEffect, useState } from "react";
import { get, isEmpty, omit } from "lodash";
import { ProductViewProps, ProductsType } from "@common/temp/temp";
import ProductView from "@content/products/details-view/ProductView";

import { getAllProducts, getProductDetails } from "@/api/product/product";
import api, { apiOptions } from "@/api";
import { objectToFormData } from "@/util";
import { TransitionsSnackbar } from "@/util/alert/Alert";
import { ErrorType } from "@/types/error";
import { useRouter } from "next/navigation";
import { allProducts } from "@/common/constants/routes";

const Product = ({ params }: { params: { productId: string } }) => {
  const [productDetails, setProductDetails] = useState<ProductsType | null>(
    null
  );
  const [products, setProducts] = useState<ProductsType[]>([]);

  const [errorMessage, setErrorMessage] = useState<ErrorType>({
    result: "",
    message: "",
  });
  const [openProductActivationModal, setProductActivationModalOpen] =
    useState<boolean>(false);
  const [openProductDeletionModal, setProductDeletionModalOpen] =
    useState<boolean>(false);

  const productId = params.productId;
  const router = useRouter();

  useEffect(() => {
    getProductDetails(productId).then((res) => {
      setProductDetails(res ? res.data : null);
    });
    getAllProducts().then((res) => {
      setProducts(res ? res.data : null);
    });
  }, []);

  const handleActivation = async (productId: string, isActive: boolean) => {
    const festivalName = get(productDetails, "festivalName._id");
    const category = get(productDetails, "category._id");
    const details = omit(productDetails, ["category", "festivalName"]);

    const res = await api(
      `product/${productId}`,
      "PUT",
      objectToFormData({
        ...details,
        festivalName,
        category,
        isActive: !isActive,
      }),
      apiOptions
    );

    if (res.data) {
      setProductDetails(res.data);
      setErrorMessage({
        result: "success",
        message: `product is ${
          get(res, "data.isActive", false) ? "active" : "inactive"
        }`,
      });
    } else if (res.error) {
      setErrorMessage({
        result: "error",
        message: get(res, "error.message", ""),
      });
    }
    setProductActivationModalOpen(false);
  };

  const handleDeletion = async (productId: string) => {
    const res = await api(`product/${productId}`, "DELETE", null, {
      withCredentials: true,
    });
    if (res.data) {
      setErrorMessage({
        result: "success",
        message: "product is deleted successfully",
      });
    } else if (res.error) {
      setErrorMessage({
        result: "error",
        message: get(res, "error.message", ""),
      });
    }
    setProductDeletionModalOpen(false);
    router.push(allProducts())
  };

  const handleAlertClose = () => {
    setErrorMessage({ result: "", message: "" });
  };

  const handleProductActivationDesicion = (_id: string, isActive: boolean) => {
    handleActivation(_id, isActive);
  };

  const handleProductDeletionDesicion = (_id: string) => {
    handleDeletion(_id);
  };

  if (isEmpty(productDetails)) return null;

  const productViewProps: ProductViewProps = {
    products,
    productDetails,
    handleActivation,
    setProductActivationModalOpen,
    handleProductActivationDesicion,
    openProductActivationModal,
    setProductDeletionModalOpen,
    handleProductDeletionDesicion,
    openProductDeletionModal,
  };

  return (
    <>
      <TransitionsSnackbar
        severity={errorMessage.result === "error" ? "error" : "success"}
        handleClose={handleAlertClose}
        message={errorMessage.message}
        open={errorMessage.result ? true : false}
        key={errorMessage.message}
      />
      {productId && !Array.isArray(productId) && (
        <ProductView {...productViewProps} />
      )}
    </>
  );
};

export default Product;
