import { atom } from 'recoil'

export const initialCupDay = atom<Date>({
  key: 'initialDay',
  //date of the first game, with the gmt time zone discount applied
  default: new Date('2022-11-20T00:00:00.000-03:00'),
})

export const axiosError = atom<boolean>({
  key: 'axiosError',
  default: false,
})

export const gamesList = atom<[]>({
  key: 'gamesList',
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
