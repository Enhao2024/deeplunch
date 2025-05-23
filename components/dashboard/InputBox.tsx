import React, { ReactNode } from 'react';

interface Props {
  icon: ReactNode,
  placeholder: string,
  input: string | null,
  onValueChange: (e: any) => void,
}

function InputBox({
  icon, placeholder, input, onValueChange,
}: Props) {
  return (
    <label className="border-gray-300 hover:border-gray-400 input input-md lg:input-sm 2xl:input-md
                        flex justify-evenly items-center space-x-4 text-base lg:text-xs 2xl:text-base"
    >
      {icon}
      <input
        type="text"
        placeholder={placeholder}
        required
        value={input || ''}
        onChange={(e) => onValueChange(e)}
      />
    </label>
  );
}

export default InputBox;
