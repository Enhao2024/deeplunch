import React from 'react';

interface Props {
  label: string,
  onValueChange: (e: any) => void,
}

function ToggleBox({ label, onValueChange }: Props) {
  return (
    <fieldset className="fieldset p-1 w-64 text-base lg:text-sm 2xl:text-base text-neutral-700 font-semibold">
      <label className="fieldset-label flex justify-around items-center">
        {label}
        <input
          type="checkbox"
          defaultChecked
          className="toggle toggle-md lg:toggle-sm 2xl:toggle-md"
          onChange={(e) => onValueChange(e)}
        />

      </label>
    </fieldset>
  );
}

export default ToggleBox;
