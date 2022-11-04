import { Eye, EyeClosed } from 'phosphor-react'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { passwordType, showPasswordAtom } from '../../Atoms'

interface InputBlockProps {
  label: string
  type: string
  name: string
  id: string
  value: string
  formikErr: string | undefined | boolean | null
  onChange: (e: any) => void
  onBlur: (e: any) => void
  placeholder: string
  isPassword: boolean
}

export const InputBlock = ({
  label,
  type,
  name,
  id,
  value,
  formikErr,
  onChange,
  onBlur,
  placeholder,
  isPassword,
}: InputBlockProps) => {
  const [showPassword, setShowPassword] = useRecoilState(showPasswordAtom)
  const [inputType, setInputType] = useRecoilState(passwordType)

  const handleShowPassword = () => {
    if (!value) {
      return
    }
    setShowPassword(!showPassword)
  }

  useEffect(() => {
    showPassword ? setInputType('text') : setInputType('password')
  }, [showPassword])

  const passwordInput = () => {
    return (
      <div className='flex items-center relative'>
        <input
          className={`w-full p-3 rounded-2xl text-base border border-grey-500 placeholder:text-base placeholder:text-grey-700 focus:outline focus:outline-1 focus:outline-grey-500 ${
            formikErr && 'border-2 border-red-300'
          }`}
          type={inputType}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />

        {isPassword && (
          <button
            type='button'
            onClick={() => handleShowPassword()}
            className='absolute right-4 text-lg font-bold'>
            {showPassword ? <Eye /> : <EyeClosed />}
          </button>
        )}
      </div>
    )
  }

  const defaultInput = () => {
    return (
      <div className='flex items-center relative'>
        <input
          className={`w-full p-3 rounded-2xl text-base border border-grey-500 placeholder:text-base placeholder:text-grey-700 focus:outline focus:outline-1 focus:outline-grey-500 ${
            formikErr && 'border-2 border-red-300'
          }`}
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-2'>
      <label
        htmlFor={name}
        className='text-grey-500 text-sm font-bold'>
        {label}
      </label>

      {isPassword ? passwordInput() : defaultInput()}

      {formikErr ? <span className='text-sm text-red-500 ml-1'>{formikErr}</span> : null}
    </div>
  )
}
