import axios from 'axios'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'
import { useRecoilState, useRecoilValue } from 'recoil'

import logo from '../../assets/logo/logo-fundo-vermelho.svg'
import { authUser, gamesList, initialCupDay } from '../../Atoms'
import { Icon, SelectDate } from '../../components'
import { Card } from '../../components/Card'

export const Dashboard = () => {
  const userAuth = useRecoilValue(authUser)
  const [auth] = useLocalStorage('natrave-login', userAuth)
  const currDate = useRecoilValue(initialCupDay)

  const [games, setGames] = useRecoilState(gamesList)

  //if not logged in
  if (!auth) {
    return (
      <Navigate
        to='/'
        replace={true}
      />
    )
  }

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
          <a
            href='/profile'
            className='w-6 lg:w-10 h-6 lg:h-10 block cursor-pointer'>
            <Icon title='profile' />
          </a>
        </div>

        <div className='w-11/12 max-w-[600px] mx-auto'>
          <div className='flex flex-col space-y-4'>
            <span className='text-base py-2'>Olá {auth.user.name}</span>
            <h3 className='font-bold text-2xl'>Qual o seu palpite?</h3>
          </div>
        </div>
      </header>

      <main className='w-11/12 max-w-[600px] mx-auto flex flex-col space-y-8 py-12 font-bold'>
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
