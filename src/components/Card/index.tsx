interface CardProps {
  teamA: string
  teamB: string
  match: string
}

export const Card = ({ teamA, teamB, match }: CardProps) => {
  return (
    <div className='w-full flex flex-col justify-center items-center p-4 border border-grey-700 rounded-2xl'>
      <span className='text-grey-700 text-sm lg:text-base pb-4'>{match}</span>

      <div className='flex justify-center items-center space-x-2 lg:space-x-4'>
        <span className='uppercase hidden xs:block'>{teamA}</span>
        <img
          className='w-14 h-14'
          src={`./flags/${teamA}.png`}
          alt='bandeira da suíça'
        />
        <input
          type='number'
          className='w-[60px] h-[60px] p-1 rounded-2xl bg-red-300/[0.2] text-lg text-center text-red-700'
        />

        <span className='uppercase text-red-700 lg:text-xl font-bold'>x</span>

        <input
          type='number'
          className='w-[60px] h-[60px] p-1 rounded-2xl bg-red-300/[0.2] text-lg text-center text-red-700'
        />
        <img
          className='w-14 h-14'
          src={`./flags/${teamB}.png`}
          alt='bandeira de camarões'
        />
        <span className='uppercase hidden xs:block'>{teamB}</span>
      </div>
    </div>
  )
}
