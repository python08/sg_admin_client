import SelectMui from '@/common/components/form/select-input/SelectMui';
import { FormInputStyle, FormStyle } from '@/styles/form-input';
import { checkError } from '@/util';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import {
  ProductDetailsFormProps,
  UploadProductImageProps,
} from '@/types/admin-product';
import UploadProductImage from './UploadProductImage';
import { displayFlexAlignCenter } from '@/styles/global.style';
import { previewProductDetailsRoute } from '@/common/constants/routes';

const ProductDetailsForm = (props: ProductDetailsFormProps) => {
  const router = useRouter();

  const {
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
  } = props;

  const productId = getValues('_id');

  const uploadProductImage: UploadProductImageProps = {
    getValues,
    editImage,
    previewImage,
    onImageChange,
    setEditImage,
    apiCall,
  };

  return (
    <Grid container>
      <UploadProductImage {...uploadProductImage} />
      <Grid item xs={6}>
        <Box component="form" sx={FormStyle}>
          <TextField
            {...register('name', { required: true })}
            label="Name"
            error={!!errors.name}
            helperText={checkError(errors.name?.message)}
            sx={FormInputStyle}
            inputProps={{ maxLength: 30 }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            {...register('title', { required: true })}
            label="Title"
            error={!!errors.title}
            helperText={checkError(errors.title?.message)}
            sx={FormInputStyle}
            inputProps={{ maxLength: 30 }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            {...register('description', { required: true })}
            label="Description"
            error={!!errors.description}
            helperText={checkError(errors.description?.message)}
            sx={FormInputStyle}
            inputProps={{ maxLength: 101 }}
            multiline
            minRows={2}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            {...register('price', { required: true })}
            label="Price"
            error={!!errors.price}
            helperText={checkError(errors.price?.message)}
            type="number"
            sx={FormInputStyle}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            {...register('brief1', { required: true })}
            label="product brief 1"
            error={!!errors.brief1}
            helperText={checkError(errors.brief1?.message)}
            inputProps={{ maxLength: 75 }}
            multiline
            minRows={2}
            sx={FormInputStyle}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            {...register('brief2', { required: true })}
            label="product brief 2"
            error={!!errors.brief2}
            helperText={checkError(errors.brief2?.message)}
            inputProps={{ maxLength: 75 }}
            multiline
            minRows={2}
            sx={FormInputStyle}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            {...register('brief3', { required: true })}
            label="product brief 3"
            error={!!errors.brief3}
            helperText={checkError(errors.brief3?.message)}
            inputProps={{ maxLength: 75 }}
            multiline
            minRows={2}
            sx={FormInputStyle}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            {...register('brief4', { required: true })}
            label="product brief 4"
            error={!!errors.brief4}
            helperText={checkError(errors.brief4?.message)}
            inputProps={{ maxLength: 75 }}
            multiline
            minRows={2}
            sx={FormInputStyle}
            InputLabelProps={{ shrink: true }}
          />
          <SelectMui
            control={control}
            name={'category'}
            label={'Category'}
            errors={!!errors.category}
            list={categories}
            optionLabelKeyName={'name'}
            optionValueKeyName={'_id'}
            required
          />
          <SelectMui
            control={control}
            name={'festivalName'}
            label={'Festival'}
            errors={!!errors.festivalName}
            list={festivals}
            optionLabelKeyName={'name'}
            optionValueKeyName={'_id'}
            required
          />
          <Box sx={displayFlexAlignCenter}>
            {typeof productId === 'string' && (
              <Button
                variant="outlined"
                onClick={() =>
                  router.push(previewProductDetailsRoute(productId))
                }
                sx={{ mt: 2, mr: 2 }}
              >
                Preview
              </Button>
            )}
            <Button
              variant="outlined"
              onClick={() => setOpen(true)}
              sx={{ mt: 2, ml: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductDetailsForm;
