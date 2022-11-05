import { formatISO } from 'date-fns'
import { atom } from 'recoil'

export const initialCupDay = atom<Date>({
  key: 'initialDay',
  //date of the first game, with the gmt time zone discount applied
  // default: new Date('2022-11-20T00:00:00.000-03:00'),
  //generic date timezone based on the user system
  default: new Date(2022, 10, 20),
})

interface authUserProps {
  accessToken: string
  message: string
  user: {
    id: string
    email: string
    name: string
    username: string
    createdAt: string
    updatedAt: string
  }
}

export const authUser = atom<authUserProps | null>({
  key: 'authUser',
  default: null,
})

export const axiosError = atom<boolean>({
  key: 'axiosError',
  default: false,
})

interface gameProps {
  id: string
  teamA: string
  teamB: string
  match: string
  gameHour: string
}

export const gamesList = atom<gameProps[]>({
  key: 'gamesList',
  default: [],
})

interface gameProps {
  id: string
  teamA: string
  teamB: string
  match: string
  gameHour: string
}

export const gamesProfileList = atom<gameProps[]>({
  key: 'gamesProfileList',
  default: [],
})

export const showPasswordAtom = atom<boolean>({
  key: 'showPassword',
  default: false,
})

export const passwordType = atom<string>({
  key: 'passwordType',
  default: '',
})
