import './styles/main.css'; //Importação do tailwind
import logoImg from './assets/logo-nlw.svg' //importando a imagem da logo
import {MagnifyingGlassPlus} from 'phosphor-react'

//JSX -> JavaScript + XML(HTML)
//tag com letra maiuscula = Componente personalidado no react
function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

<h1 className='text-white mt-20 text-6xl font-black'>
  Seu duo está aqui.
</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gamerBlur  absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block"> League of Legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gamerBlur  absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block"> Dota 2</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gamerBlur  absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block"> CS Go</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 7.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gamerBlur  absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block"> World of Warcraft</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gamerBlur  absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block"> Apex legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 6.png" alt="" />
          <div className="w-full pt-16 pb-4 bg-gamerBlur  absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block"> Fortnite</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 self-stretch rounded-lg bg-nlw-gradient overflow-hidden mt-8'>
        <div className=' bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-white text-2xl font-black block'> Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block mt-1'> Publique seu anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3'>
          <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
