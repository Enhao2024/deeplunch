import {
  FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';
import { useState } from 'react';

interface Props<T extends Record<string, string | number>> {
  onUpdate: (e: any) => void,
  placeholder: string,
  optionType: T,
  defaultValue?: T[keyof T] | undefined,
}

function FieldSelect<T extends Record<string, string | number>>({
  placeholder, optionType, defaultValue = undefined, onUpdate,
}: Props<T>) {
  const [selected, setSelected] = useState<T[keyof T]>(defaultValue || Object.values(optionType)[0] as T[keyof T]);

  const getId = () => `deeplunch-task-field-${placeholder.toLowerCase()}`;
  const renderOptions = () => Object.values(optionType).map((value) => (
    <MenuItem value={value}>{value}</MenuItem>
  ));

  return (
    <FormControl fullWidth>
      <InputLabel id={getId()}>{placeholder}</InputLabel>
      <Select
        labelId={getId()}
        value={selected}
        id="demo-simple-select"
        label={placeholder}
        onChange={(e) => {
          onUpdate(e);
          setSelected(e.target.value as T[keyof T]);
        }}
      >
        {renderOptions()}
      </Select>
    </FormControl>
  );
}

export default FieldSelect;
