import React, { ChangeEvent } from "react";
interface AquaInputProps {
  value: string;
  type: string;
  id: string;
  name: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const AquaInput: React.FC<AquaInputProps> = ({
  label,
  value,
  type,
  id,
  onChange,
  name,
}) => {
  return (
    <div className="sm:col-span-3">
      <label
        htmlFor="first-name"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          value={value}
          name={name}
          type={type}
          onChange={onChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
        />
      </div>
    </div>
  );
};

export default AquaInput;
