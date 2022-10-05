import logo from '../assets/logo/logo-fundo-vinho.svg'
import heroImg from '../assets/imagem/img.png'

export const Home = () => {
    return (
        <main className="min-h-screen bg-red-700">
            <div className='w-11/12 max-w-screen-lg mx-auto pb-16'>
                <figure className='flex justify-center items-center py-4 mb-16'>
                    <img src={logo} alt="logotipo na trave" />
                </figure>

                <section className='w-full md:grid grid-cols-2 gap-4'>
                    <figure className='w-full'>
                        <img src={heroImg} alt="imagem destaque" />
                    </figure>

                    <div className='w-full flex flex-col justify-center items-center p-4 gap-4'>
                        <h1 className='text-3xl text-silver font-bold mb-4'>Dê o seu palpite na Copa do Mundo do Catar 2022!</h1>

                        <button className='border w-full py-4 px-6 text-lg font-bold text-red-700 bg-silver border-silver rounded-2xl transition-all hover:underline hover:opacity-80'>Criar minha conta</button>

                        <button className='border w-full py-4 px-6 text-lg font-bold text-silver bg-transparent border-silver rounded-2xl transition-all hover:underline'>Fazer login</button>
                    </div>
                </section>
            </div>
        </main>
    )
}