"use client";

import { useForm } from "react-hook-form";
import { get, isArray, omit } from "lodash";
import {
  CreateProductInput,
  createProductSchema,
} from "@/schema/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  getCombinedString,
  hasNumber,
  objectToFormData,
  splitBrief,
} from "@/util";
import api, { ApiMethod, apiOptions } from "@/api";
import { useEffect, useState } from "react";
import { getProductDetails } from "@/api/product/product";
import { route } from "@/common/constants/routes";
import AlertDialog from "@/common/components/Dialog/AlertDialog";
import { useRouter } from "next/navigation";
import { getAllCategories } from "@/api/category/category";
import { getAllFestivals } from "@/api/festival/festival";
import ProductDetailsForm from "@/content/admin-product/components/ProductDetailsForm";
import { ProductDetailsFormProps } from "@/types/admin-product";
import { Grid } from "@mui/material";
import { webContainerPadding } from "@/styles/global.style";
import { TransitionsSnackbar } from "@/util/alert/Alert";
import { ErrorType } from "@/types/error";

type ProductPreviewProps = { params: { productId: string } };

const Form = ({ params }: ProductPreviewProps) => {
  // api call state
  const [apiCall, setApiCall] = useState<ApiMethod | null>(null);

  // image state
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const [open, setOpen] = useState(false);

  const [errorMessage, setErrorMessage] = useState<ErrorType>({
    result: "",
    message: "",
  });
  const [editImage, setEditImage] = useState(false);

  const [categories, setCategories] = useState<any[]>([]);
  const [festivals, setFestivals] = useState<any[]>([]);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    control,
    formState: { errors },
  } = useForm<CreateProductInput>({
    resolver: zodResolver(createProductSchema),
  });

  // get product details, categories and festivals
  useEffect(() => {
    if (hasNumber(params.productId)) {
      setApiCall("PUT");
      getProductDetails(params.productId).then((res) => {
        if (res && res.data._id) {
          const brief = splitBrief(res.data.brief);
          reset({
            ...res.data,
            ...brief,
            festivalName: get(res, "data.festivalName._id"),
            category: get(res, "data.category._id"),
          });
        }
      });
    } else if (route.adminProducts.c.addProduct.includes(params.productId)) {
      setApiCall("POST");
      setEditImage(false);
    }

    getAllCategories().then((res) => {
      if (isArray(res.data)) {
        setCategories(res.data);
      }
    });

    getAllFestivals().then((res) => {
      if (isArray(res.data)) {
        setFestivals(res.data);
      }
    });
  }, []);

  const onSubmit = async (data: CreateProductInput) => {
    if (apiCall === "PUT") {
      let payload: any = {
        ...data,
        brief: getCombinedString(data),
        user: "6662fe6bd8726f1dcd6abf61", // FP
        isActive: false,
        image: selectedImage || null, // dont want to update image
      };
      payload = omit(payload, ["brief1", "brief2", "brief3", "brief4"]);

      const res = await api(
        `product/${params.productId}`,
        apiCall,
        objectToFormData(payload),
        apiOptions
      );

      if (res.data) {
        // reset form data if saved successfully
        reset();
        router.push(route.adminProducts.l);
      } else if (res.error) {
        setErrorMessage(get(res, "error.message", ""));
      }
    } else if (apiCall === "POST") {
      if (!selectedImage) {
        setErrorMessage({
          result: "error",
          message: "Please select an image to upload",
        });
        return;
      }

      let payload: any = {
        ...data,
        brief: getCombinedString(data),
        user: "6662fe6bd8726f1dcd6abf61",
        isActive: false,
        image: selectedImage,
      };

      payload = omit(payload, ["brief1", "brief2", "brief3", "brief4"]);

      const res = await api(
        `product`,
        apiCall,
        objectToFormData(payload),
        apiOptions
      );

      if (res.data) {
        // reset form data if saved successfully
        reset();
        router.push(route.adminProducts.l);
      } else if (res.error) {
        setErrorMessage(get(res, "error.message", ""));
      }
    }
  };

  const onImageChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    if (file) {
      const reader = new FileReader();
      // The loadend event of the FileReader interface is fired
      // when a file read has completed, successfully or not.
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleYesDesicion = () => {
    handleSubmit(onSubmit)();
    setOpen(false);
  };

  const productDetailsFormProps: ProductDetailsFormProps = {
    editImage,
    setEditImage,
    getValues,
    previewImage,
    apiCall,
    onImageChange,
    register,
    errors,
    control,
    categories,
    festivals,
    setOpen,
  };

  const handleAlertClose = () => {
    setErrorMessage({ result: "", message: "" });
  };

  return (
    <Grid container p={webContainerPadding}>
      <TransitionsSnackbar
        severity={errorMessage.result === "error" ? "error" : "success"}
        handleClose={handleAlertClose}
        message={errorMessage.message}
        open={errorMessage.result ? true : false}
        key={errorMessage.message}
      />
      <Grid xs={12}>
        <AlertDialog
          alertDialogTitle="Update Product"
          alertDialogDescription="Please verify all the details before updating the product"
          handleClose={() => setOpen(false)}
          yes={handleYesDesicion}
          open={open}
        />
        <ProductDetailsForm {...productDetailsFormProps} />
      </Grid>
    </Grid>
  );
};

export default Form;
