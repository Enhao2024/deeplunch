import React from 'react';

interface Props {
  label: string,
  onValueChange: (e: any) => void,
}

function ToggleBox({ label, onValueChange }: Props) {
  return (
    <fieldset className="fieldset p-1 w-64">
      <label className="fieldset-label flex justify-between items-center">
        {label}
        <input type="checkbox" defaultChecked className="toggle" onChange={(e) => onValueChange(e)} />

      </label>
    </fieldset>
  );
}

export default ToggleBox;
