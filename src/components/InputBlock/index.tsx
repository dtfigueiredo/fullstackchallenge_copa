import { Eye, EyeClosed } from 'phosphor-react';
import { useState } from 'react';

interface InputBlockProps {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  isPassword: boolean;
}

export const InputBlock = ({
  label,
  type,
  name,
  id,
  placeholder,
  isPassword,
}: InputBlockProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  // const handleType = (anotherType: string) => {
  //   if (anotherType === 'password') {
  //     return showPassword ? 'text' : 'password';
  //   } else {
  //     return anotherType;
  //   }
  // };

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-grey-500 text-sm font-bold"
      >
        {label}
      </label>

      <div className="flex items-center relative">
        <input
          className="w-full p-3 rounded-2xl text-base border border-grey-500 placeholder:text-base placeholder:text-grey-700 focus:outline focus:outline-1 focus:outline-grey-700"
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => handleShowPassword()}
            className="absolute right-4 text-lg font-bold"
          >
            {showPassword ? <Eye /> : <EyeClosed />}
          </button>
        )}
      </div>
    </div>
  );
};
