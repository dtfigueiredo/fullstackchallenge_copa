import { addDays, format, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useRecoilState } from 'recoil'

import { initialCupDay } from '../../Atoms'
import { Icon } from '../Icon'

export const SelectDate = () => {
  const [currDate, setCurrDate] = useRecoilState(initialCupDay)

  const handlePrevDate = () => setCurrDate(subDays(currDate, 1))
  const handleNextDate = () => setCurrDate(addDays(currDate, 1))

  const formatedDate = `${format(currDate, "dd 'de' MMMM", {
    locale: ptBR,
  })}`

  return (
    <div className='w-64 mx-auto flex justify-between items-center text-red-500'>
      <button onClick={() => handlePrevDate()}>
        <Icon title='arrowLeft' />
      </button>

      <h4 className='text-red-700 text-lg'>{formatedDate}</h4>

      <button onClick={() => handleNextDate()}>
        <Icon title='arrowRight' />
      </button>
    </div>
  )
}
