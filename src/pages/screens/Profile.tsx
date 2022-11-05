import axios from 'axios'
import { format } from 'date-fns'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'
import { useRecoilState, useRecoilValue } from 'recoil'

import logo from '../../assets/logo/logo-fundo-vermelho.svg'
import { authUser, gamesProfileList, initialCupDay } from '../../Atoms'
import { Card, Icon, SelectDate } from '../../components'

export const Profile = () => {
  const userAuth = useRecoilValue(authUser)
  const [auth, setAtuh, remove] = useLocalStorage('natrave-login', userAuth)
  const currDate = useRecoilValue(initialCupDay)

  const [games, setGames] = useRecoilState(gamesProfileList)

  //in this case, the 'guard' doens't work
  useEffect(() => {
    if (!auth) {
      window.location.replace('http://localhost:5173/')
    }
  }, [auth])

  //getGames
  const getGames = async () => {
    const { data } = await axios({
      method: 'GET',
      baseURL: 'http://localhost:3000',
      url: '/games',
      params: {
        gameHour: currDate,
      },
    })
    setGames(data)
  }
  //getGames use effect
  useEffect(() => {
    const controller = new AbortController()
    getGames()
    return () => controller.abort()
  }, [currDate])

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
            onClick={() => remove()}
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
            <h3 className='font-bold text-2xl'>{auth?.user.name}</h3>
            {/* <h3 className='font-bold text-2xl'>NOME</h3> */}
          </div>
        </div>
      </header>

      <main className='w-11/12 max-w-[600px] mx-auto flex flex-col space-y-8 py-12 font-bold'>
        <h2 className='text-red-500 text-xl lg:text-2xl'>Seus palpites</h2>

        <SelectDate />

        <div className='flex flex-col justify-center items-center space-y-4'>
          {games.map((game) => (
            <Card
              key={game.id}
              gameId={game.id}
              teamA={game.teamA}
              teamB={game.teamB}
              match={format(new Date(game.gameHour), 'H:mm')}
            />
          ))}
        </div>
      </main>
    </>
  )
}
