import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';

interface Props {
  placeholder: string,
  onUpdate: (v: string) => void,
  rows?: number,
  defaultValue?: string | undefined,
  limit: number,
}

function FieldInput({
  limit, placeholder, rows = 1, defaultValue = undefined, onUpdate,
}: Props) {
  const [value, setValue] = useState<string | undefined>(defaultValue);

  useEffect(() => {
    if (value) onUpdate(value);
  }, [value]);

  return (
    <TextField
      fullWidth
      label={placeholder}
      variant="outlined"
      rows={rows}
      value={value}
      onChange={(e) => setValue(e.target.value.slice(0, limit))}
    />
  );
}

export default FieldInput;
