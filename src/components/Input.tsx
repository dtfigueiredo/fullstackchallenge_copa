import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className="w-full p-3 rounded-2xl text-base outline-none border border-grey-500 placeholder:text-base placeholder:text-grey-700"
    />
  );
};
