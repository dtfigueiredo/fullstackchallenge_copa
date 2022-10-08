import logo from '../../assets/logo/logo-fundo-vermelho.svg';
import { Icon } from '../../components';
import { Card } from '../../components/Card';

export const Profile = () => {
  return (
    <>
      <header className="py-6 bg-red-500 text-silver">
        <div className="flex justify-between items-center w-11/12 max-w-[600px] mx-auto pb-12">
          <img
            src={logo}
            alt="logotipo na trave"
            className="w-28 md:w-40"
          />
          <a
            href="/profile"
            className="w-6 lg:w-10 h-6 lg:h-10 block cursor-pointer"
          >
            <Icon title="profile" />
          </a>
        </div>

        <div className="w-11/12 max-w-[600px] mx-auto">
          <div className="flex flex-col space-y-4">
            <a
              href="/dashboard"
              className="w-6 lg:w-10 h-6 lg:h-10 block cursor-pointer"
            >
              <Icon title="backarrow" />
            </a>
            <h3 className="font-bold text-2xl">Daniel Figueiredo</h3>
          </div>
        </div>
      </header>

      <main className="w-11/12 max-w-[600px] mx-auto flex flex-col space-y-8 py-12 font-bold">
        <h2 className="text-red-500 text-xl lg:text-2xl">Seus palpites</h2>

        <div className="w-64 mx-auto flex justify-between items-center text-red-500">
          <Icon title="arrowLeft" />
          <h4 className="text-red-700 text-lg">08 de outubro</h4>
          <Icon title="arrowRight" />
        </div>

        <div className="flex flex-col justify-center items-center space-y-4">
          <Card
            teamA={{ slug: 'bra' }}
            teamB={{ slug: 'arg' }}
            match={{ time: '07:00' }}
          />
          <Card
            teamA={{ slug: 'jap' }}
            teamB={{ slug: 'cor' }}
            match={{ time: '10:00' }}
          />
          <Card
            teamA={{ slug: 'esp' }}
            teamB={{ slug: 'fra' }}
            match={{ time: '13:00' }}
          />
        </div>
      </main>
    </>
  );
};
