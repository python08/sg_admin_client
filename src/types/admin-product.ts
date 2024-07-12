import { ApiMethod } from "@/api";
import { CreateProductInput } from "@/schema/product.schema";
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";

export type ProductDetailsFormProps = {
  register: UseFormRegister<CreateProductInput>;
  errors: FieldErrors<CreateProductInput>;
  control: Control<CreateProductInput>;
  categories: any[];
  festivals: any[];
  setOpen: (open: boolean) => void;
} & UploadProductImageProps;

export type UploadProductImageProps = {
  getValues: UseFormGetValues<CreateProductInput>;
  editImage: boolean;
  previewImage: string | ArrayBuffer | null;
  onImageChange: (event: any) => void;
  setEditImage: (editImage: boolean) => void;
  apiCall: ApiMethod | null;
};
