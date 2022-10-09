import { addDays, format, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';

import { Icon } from '../Icon';

const initialCupDate = '2022-11-20T00:00:00';

export const SelectDate = () => {
  const [currDate, setCurrDate] = useState(new Date(initialCupDate));

  const handlePrevDate = () => setCurrDate(subDays(currDate, 1));
  const handleNextDate = () => setCurrDate(addDays(currDate, 1));

  const formatedDate = `${format(currDate, "dd 'de' MMMM", {
    locale: ptBR,
  })}`;

  return (
    <div className="w-64 mx-auto flex justify-between items-center text-red-500">
      <button onClick={handlePrevDate}>
        <Icon title="arrowLeft" />
      </button>

      <h4 className="text-red-700 text-lg">{formatedDate}</h4>

      <button onClick={handleNextDate}>
        <Icon title="arrowRight" />
      </button>
    </div>
  );
};
