interface CardProps {
  teamA: { slug: string };
  teamB: { slug: string };
  match: { time: string };
}

export const Card = ({ teamA, teamB, match }: CardProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-4 border border-grey-700 rounded-2xl">
      <span className="text-grey-700 text-sm lg:text-base pb-4">
        {match.time}
      </span>

      <div className="flex justify-center items-center space-x-2 lg:space-x-4">
        <span className="uppercase">{teamA.slug}</span>
        <img
          src={`./flags/${teamA.slug}.png`}
          alt="bandeira da suíça"
        />
        <input
          type="number"
          className="w-[60px] h-[60px] p-1 rounded-2xl bg-red-300/[0.2] text-lg text-center text-red-700"
        />

        <span className="uppercase text-red-700 text-xl font-bold">x</span>

        <input
          type="number"
          className="w-[60px] h-[60px] p-1 rounded-2xl bg-red-300/[0.2] text-lg text-center text-red-700"
        />
        <img
          src={`./flags/${teamB.slug}.png`}
          alt="bandeira de camarões"
        />
        <span className="uppercase">{teamB.slug}</span>
      </div>
    </div>
  );
};
