import { Icon, InputBlock, RegisterSubmitButton } from '../../components';
import logo from '../../assets/logo/logo-fundo-branco.svg';

export const SignUp = () => {
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
          <header className="w-full flex justify-start items-center">
            <a href="/">
              <Icon title="backarrow" />
            </a>
            <h2 className="ml-5 text-red-700 font-bold text-xl">
              Crie sua conta
            </h2>
          </header>

          <form className="w-full mt-8 flex flex-col gap-4">
            <InputBlock
              label="Seu nome"
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome e sobrenome"
              isPassword={false}
            />
            <InputBlock
              label="Seu usuário"
              type="text"
              name="username"
              id="username"
              placeholder="Digite um nome de usuário"
              isPassword={false}
            />
            <InputBlock
              label="Seu email"
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu email"
              isPassword={false}
            />
            <InputBlock
              label="Sua senha"
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              isPassword
            />

            <RegisterSubmitButton title="Criar minha conta" />
          </form>
        </div>
      </main>
    </main>
  );
};
