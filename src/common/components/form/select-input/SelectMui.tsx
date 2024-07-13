import { FormInputStyle } from '@/styles/form-input';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import { Control, Controller } from 'react-hook-form';

type SelectMuiProps = {
  control: Control<any, any>;
  name: string;
  label: string;
  list: any[];
  errors: any;
  optionValueKeyName: string;
  optionLabelKeyName: string;
  required: boolean;
};

const SelectMui = (props: SelectMuiProps) => {
  const {
    control,
    name,
    label,
    list,
    errors,
    optionValueKeyName,
    optionLabelKeyName,
    required,
  } = props;
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={''}
      rules={{ required }}
      render={({ field: { name, value, onChange } }) => (
        <FormControl fullWidth sx={FormInputStyle}>
          <InputLabel shrink id={`select-dropdown-${label}`}>
            {label}
          </InputLabel>

          {list && (
            <Select
              name={name}
              labelId={`select-dropdown-${label}`}
              id={label}
              error={!!errors.festivalName}
              onChange={onChange}
              value={value}
              // label overlapping issue resolved
              input={
                <OutlinedInput
                  id={`select-dropdown-${label}`}
                  label={label}
                  notched
                />
              }
            >
              {list.map((menuItem: any) => (
                <MenuItem
                  value={menuItem[optionValueKeyName]}
                  key={menuItem[optionValueKeyName]}
                >
                  {menuItem[optionLabelKeyName]}
                </MenuItem>
              ))}
            </Select>
          )}
          <FormHelperText>{errors.festivalName?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default SelectMui;
