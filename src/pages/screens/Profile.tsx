import { Navigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'

import logo from '../../assets/logo/logo-fundo-vermelho.svg'
import { Card, Icon, SelectDate } from '../../components'

export const Profile = () => {
  const [auth, remove] = useLocalStorage('natrave-login')
  const handleClick = () => remove(null)

  if (!auth) {
    return (
      <Navigate
        to='/'
        replace={true}
      />
    )
  }

  return (
    <>
      <header className='py-6 bg-red-500 text-silver'>
        <div className='flex justify-between items-center w-11/12 max-w-[600px] mx-auto pb-12'>
          <img
            src={logo}
            alt='logotipo na trave'
            className='w-28 md:w-40'
          />
          <button
            onClick={handleClick}
            className='md:text-xl tracking-widest font-bold cursor-pointer'>
            Sair
          </button>
        </div>

        <div className='w-11/12 max-w-[600px] mx-auto'>
          <div className='flex flex-col space-y-4'>
            <a
              href='/dashboard'
              className='w-6 lg:w-10 h-6 lg:h-10 block cursor-pointer'>
              <Icon title='backarrow' />
            </a>
            <h3 className='font-bold text-2xl'>{auth.user.name}</h3>
          </div>
        </div>
      </header>

      <main className='w-11/12 max-w-[600px] mx-auto flex flex-col space-y-8 py-12 font-bold'>
        <h2 className='text-red-500 text-xl lg:text-2xl'>Seus palpites</h2>

        <SelectDate />

        <div className='flex flex-col justify-center items-center space-y-4'>
          <Card
            teamA={'esp'}
            teamB={'fra'}
            match={'13:00'}
          />
        </div>
      </main>
    </>
  )
}
