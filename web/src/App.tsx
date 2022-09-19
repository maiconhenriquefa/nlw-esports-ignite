import './styles/main.css'

import logoImg from './assets/logo.svg'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-bold mt-16">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-12">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-1.png" alt="" />

          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-2.png" alt="" />

          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-3.png" alt="" />

          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-4.png" alt="" />

          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-5.png" alt="" />

          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-6.png" alt="" />

          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default App