interface ButtonProps {
  //TODO REMOVE THIS 'ANY'
  title: any
  route: string
  disabled: boolean
  isSubmitting: boolean
}

export const RegisterSubmitButton = ({ title, isSubmitting, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type='submit'
      className={`border w-full mt-4 py-3 px-5 text-base lg:text-lg font-bold bg-red-500 text-silver border-silver rounded-2xl transition-all hover:underline hover:opacity-80 disabled:cursor-not-allowed disabled:bg-grey-700 ${
        isSubmitting && 'disabled:cursor-wait'
      }`}>
      {title}
    </button>
  )
}
