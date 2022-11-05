import { Navigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'

import heroImg from '../../assets/imagem/img.png'
import logo from '../../assets/logo/logo-fundo-vinho.svg'

export const Home = () => {
  const [auth] = useLocalStorage('natrave-login', {})

  if (auth) {
    return (
      <Navigate
        to='/dashboard'
        replace={true}
      />
    )
  }

  return (
    <main className='min-h-screen bg-red-700'>
      <header className='flex justify-center items-center py-6'>
        <img
          src={logo}
          alt='logotipo na trave'
        />
      </header>

      <div className='w-11/12 max-w-screen-lg mx-auto'>
        <section className='lg:grid grid-cols-2 gap-4 py-6 lg:py-[72px]'>
          <figure className='w-full'>
            <img
              src={heroImg}
              alt='imagem destaque'
            />
          </figure>

          <div className='w-full flex flex-col justify-center items-center p-4 gap-4'>
            <h1 className='text-2xl text-center lg:text-3xl lg:text-left text-silver font-bold mb-4'>
              Dê o seu palpite na Copa do Mundo do Catar 2022!
            </h1>

            <a
              href='/signup'
              className='w-full inline-block cursor-pointer py-3 px-5 text-center text-base lg:text-lg font-bold bg-silver border border-silver rounded-2xl transition-all hover:underline hover:opacity-80'>
              Criar minha conta
            </a>

            <a
              href='/login'
              className='w-full inline-block cursor-pointer py-3 px-5 text-center text-base lg:text-lg font-bold text-silver border border-silver rounded-2xl transition-all hover:underline'>
              Fazer login
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
