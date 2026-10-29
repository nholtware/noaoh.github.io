import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MuiSelect, {SelectChangeEvent} from '@mui/material/Select';
import {SxProps, Theme} from '@mui/material/styles';
import {FC, PropsWithChildren} from 'react';

type SelectChangeHandler = (event: SelectChangeEvent) => void;

interface SelectText {
  label: string;
  value: string;
}

interface SelectProps {
  options: SelectText[];
  handleChange: SelectChangeHandler;
  value: string;
  label?: string;
  sx?: SxProps<Theme>;
}

const Select: FC<PropsWithChildren<SelectProps>> = (props: SelectProps) => {
  const labelId = `select-${props.label ?? 'option'}`.replace(/\s+/g, '-').toLowerCase();
  return (
    <FormControl size="small" sx={{minWidth: 200, ...props.sx}}>
      {props.label && <InputLabel id={labelId}>{props.label}</InputLabel>}
      <MuiSelect label={props.label} labelId={labelId} onChange={props.handleChange} value={props.value}>
        {props.options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export {type SelectProps, Select};
