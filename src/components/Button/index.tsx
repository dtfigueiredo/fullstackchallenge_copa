interface ButtonProps {
  title: string;
}

export const RegisterSubmitButton = ({ title }: ButtonProps) => {
  return (
    <button className="border w-full mt-4 py-3 px-5 text-base lg:text-lg font-bold bg-red-500 text-silver border-silver rounded-2xl transition-all hover:underline hover:opacity-80">
      {title}
    </button>
  );
};