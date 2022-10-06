import { Eye, EyeClosed } from 'phosphor-react';
import { useState } from 'react';

import backArrow from '../assets/icones/backarrow.svg';
import logo from '../assets/logo/logo-fundo-branco.svg';
import { Input } from '../components/Input';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <main className="min-h-screen bg-silver">
      <header className="flex justify-center items-center py-6 border-b border-red-300">
        <img
          src={logo}
          alt="logotipo na trave"
        />
      </header>

      <main className="w-11/12 max-w-[600px] mx-auto">
        <div className="w-full py-6 lg:py-[72px] flex flex-col justify-center items-center gap-2">
          <div className="w-full flex justify-start items-center">
            <a href="/">
              <img
                src={backArrow}
                className="w-8 h-8"
              />
            </a>
            <h2 className="ml-5 text-red-700 font-bold text-xl">
              Entre na sua conta
            </h2>
          </div>

          <form className="w-full mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-grey-500 text-sm font-bold"
              >
                Seu email
              </label>
              <Input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-grey-500 text-sm font-bold"
              >
                Sua senha
              </label>
              <div className="flex items-center relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Digite sua senha"
                />

                <button
                  type="button"
                  onClick={handleShowPassword}
                  className="absolute right-4 text-lg font-bold"
                >
                  {showPassword ? <Eye /> : <EyeClosed />}
                </button>
              </div>
            </div>

            <button className="border w-full mt-4 py-3 lg:py-4 px- 5 lg:px-6 text-base lg:text-lg font-bold bg-red-500 text-silver border-silver rounded-2xl transition-all hover:underline hover:opacity-80">
              Entrar
            </button>
          </form>
        </div>
      </main>
    </main>
  );
};
