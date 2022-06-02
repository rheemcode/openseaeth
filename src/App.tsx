import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Plyr from 'plyr';
import EthApp from './EthApp';


const Navbar = () => {
  return (
    <header>
      <div className="flex py-2  justify-between bg-white px-6 s shadow-md md:gap-8">
        <div>
          <img className="inline w-[40px] mr-4" src={process.env.PUBLIC_URL + "media/opensea.svg"} alt="" />
          <svg className="w-[100px] inline Navbar--brand-name" fill="#04111D" height="58" viewBox="0 0 313 58" width="313" >
            <path d="M24.7232 47.4966C20.2031 47.4966 16.0484 46.4837 12.2588 44.4579C8.51498 42.432 5.52447 39.6135 3.28729 36.0023C1.09576 32.347 0 28.2513 0 23.7153C0 19.1792 1.09576 15.1055 3.28729 11.4943C5.52447 7.88307 8.51498 5.06454 12.2588 3.03872C16.0484 1.01291 20.2031 0 24.7232 0C29.2432 0 33.3751 1.01291 37.119 3.03872C40.9085 5.06454 43.8762 7.88307 46.0221 11.4943C48.2136 15.1055 49.3094 19.1792 49.3094 23.7153C49.3094 28.2513 48.2136 32.347 46.0221 36.0023C43.8305 39.6135 40.8628 42.432 37.119 44.4579C33.3751 46.4837 29.2432 47.4966 24.7232 47.4966ZM24.7232 37.1913C28.5583 37.1913 31.6173 35.9582 33.9002 33.492C36.2287 31.0258 37.3929 27.7669 37.3929 23.7153C37.3929 19.6196 36.2287 16.3607 33.9002 13.9385C31.6173 11.4723 28.5583 10.2392 24.7232 10.2392C20.8423 10.2392 17.7377 11.4503 15.4092 13.8724C13.1263 16.2946 11.9849 19.5755 11.9849 23.7153C11.9849 27.8109 13.1263 31.0919 15.4092 33.5581C17.7377 35.9803 20.8423 37.1913 24.7232 37.1913Z">
            </path>
            <path d="M67.5356 15.3918C68.677 13.6743 70.2521 12.287 72.261 11.2301C74.2699 10.1731 76.6212 9.64465 79.315 9.64465C82.4653 9.64465 85.3189 10.4153 87.8756 11.9567C90.4324 13.4981 92.4413 15.7001 93.9024 18.5626C95.409 21.4252 96.1624 24.7502 96.1624 28.5376C96.1624 32.325 95.409 35.672 93.9024 38.5786C92.4413 41.4412 90.4324 43.6651 87.8756 45.2506C85.3189 46.792 82.4653 47.5626 79.315 47.5626C76.6669 47.5626 74.3156 47.0342 72.261 45.9772C70.2521 44.9203 68.677 43.5551 67.5356 41.8815V58H55.8246V10.1731H67.5356V15.3918ZM84.2459 28.5376C84.2459 25.7191 83.4241 23.5171 81.7805 21.9317C80.1825 20.3022 78.1964 19.4875 75.8223 19.4875C73.4938 19.4875 71.5077 20.3022 69.8641 21.9317C68.2661 23.5611 67.467 25.7851 67.467 28.6036C67.467 31.4222 68.2661 33.6462 69.8641 35.2756C71.5077 36.9051 73.4938 37.7198 75.8223 37.7198C78.1508 37.7198 80.1368 36.9051 81.7805 35.2756C83.4241 33.6021 84.2459 31.3561 84.2459 28.5376Z">
            </path>
            <path d="M138.329 28.0091C138.329 29.0661 138.261 30.167 138.124 31.3121H111.62C111.803 33.6021 112.556 35.3637 113.88 36.5968C115.25 37.7859 116.916 38.3804 118.88 38.3804C121.802 38.3804 123.833 37.1913 124.975 34.8132H137.439C136.8 37.2354 135.636 39.4153 133.946 41.3531C132.303 43.2908 130.225 44.8102 127.714 45.9112C125.203 47.0121 122.395 47.5626 119.291 47.5626C115.547 47.5626 112.214 46.792 109.292 45.2506C106.37 43.7092 104.087 41.5072 102.443 38.6446C100.8 35.7821 99.9777 32.4351 99.9777 28.6036C99.9777 24.7722 100.777 21.4252 102.375 18.5626C104.018 15.7001 106.301 13.4981 109.223 11.9567C112.145 10.4153 115.501 9.64465 119.291 9.64465C122.989 9.64465 126.276 10.3933 129.152 11.8907C132.029 13.388 134.266 15.5239 135.864 18.2984C137.508 21.0729 138.329 24.3098 138.329 28.0091ZM126.345 25.0364C126.345 23.0987 125.66 21.5573 124.29 20.4123C122.92 19.2673 121.208 18.6948 119.154 18.6948C117.19 18.6948 115.524 19.2453 114.154 20.3462C112.83 21.4472 112.008 23.0106 111.689 25.0364H126.345Z">
            </path>
            <path d="M167.793 9.77676C172.267 9.77676 175.828 11.186 178.476 14.0046C181.17 16.779 182.517 20.6105 182.517 25.4989V47.0342H170.874V27.0182C170.874 24.552 170.212 22.6363 168.888 21.2711C167.564 19.9058 165.784 19.2232 163.547 19.2232C161.309 19.2232 159.529 19.9058 158.205 21.2711C156.881 22.6363 156.219 24.552 156.219 27.0182V47.0342H144.508V10.1731H156.219V15.0615C157.406 13.432 159.004 12.1549 161.013 11.2301C163.021 10.2612 165.281 9.77676 167.793 9.77676Z">
            </path>
            <path d="M208.05 47.4966C204.535 47.4966 201.384 46.9461 198.599 45.8451C195.814 44.7441 193.577 43.1147 191.888 40.9567C190.244 38.7988 189.376 36.2005 189.285 33.1617H201.749C201.932 34.8793 202.548 36.2005 203.599 37.1253C204.649 38.0061 206.018 38.4465 207.708 38.4465C209.443 38.4465 210.812 38.0721 211.817 37.3235C212.821 36.5308 213.324 35.4518 213.324 34.0866C213.324 32.9415 212.913 31.9947 212.091 31.246C211.315 30.4973 210.333 29.8808 209.146 29.3964C208.004 28.9119 206.361 28.3614 204.215 27.7449C201.11 26.82 198.576 25.8952 196.613 24.9704C194.65 24.0456 192.961 22.6803 191.545 20.8747C190.13 19.0691 189.422 16.713 189.422 13.8064C189.422 9.49051 191.043 6.12149 194.285 3.69932C197.526 1.23311 201.749 0 206.954 0C212.251 0 216.519 1.23311 219.761 3.69932C223.003 6.12149 224.738 9.51253 224.966 13.8724H212.296C212.205 12.3751 211.634 11.208 210.584 10.3713C209.534 9.49051 208.187 9.05011 206.543 9.05011C205.128 9.05011 203.987 9.42445 203.119 10.1731C202.252 10.8777 201.818 11.9127 201.818 13.2779C201.818 14.7752 202.548 15.9423 204.01 16.779C205.471 17.6158 207.753 18.5186 210.858 19.4875C213.963 20.5004 216.474 21.4692 218.391 22.3941C220.355 23.3189 222.044 24.6621 223.459 26.4237C224.875 28.1853 225.582 30.4533 225.582 33.2278C225.582 35.8702 224.875 38.2703 223.459 40.4282C222.09 42.5862 220.081 44.3037 217.433 45.5809C214.785 46.858 211.657 47.4966 208.05 47.4966Z">
            </path>
            <path d="M268.813 28.0091C268.813 29.0661 268.744 30.167 268.607 31.3121H242.103C242.286 33.6021 243.039 35.3637 244.363 36.5968C245.733 37.7859 247.4 38.3804 249.363 38.3804C252.285 38.3804 254.317 37.1913 255.458 34.8132H267.922C267.283 37.2354 266.119 39.4153 264.43 41.3531C262.786 43.2908 260.709 44.8102 258.197 45.9112C255.686 47.0121 252.878 47.5626 249.774 47.5626C246.03 47.5626 242.697 46.792 239.775 45.2506C236.853 43.7092 234.57 41.5072 232.926 38.6446C231.283 35.7821 230.461 32.4351 230.461 28.6036C230.461 24.7722 231.26 21.4252 232.858 18.5626C234.501 15.7001 236.784 13.4981 239.706 11.9567C242.628 10.4153 245.984 9.64465 249.774 9.64465C253.472 9.64465 256.759 10.3933 259.636 11.8907C262.512 13.388 264.749 15.5239 266.347 18.2984C267.991 21.0729 268.813 24.3098 268.813 28.0091ZM256.828 25.0364C256.828 23.0987 256.143 21.5573 254.773 20.4123C253.403 19.2673 251.691 18.6948 249.637 18.6948C247.674 18.6948 246.007 19.2453 244.637 20.3462C243.313 21.4472 242.491 23.0106 242.172 25.0364H256.828Z">
            </path>
            <path d="M272.662 28.5376C272.662 24.7502 273.393 21.4252 274.854 18.5626C276.36 15.7001 278.392 13.4981 280.949 11.9567C283.506 10.4153 286.359 9.64465 289.51 9.64465C292.203 9.64465 294.555 10.1731 296.564 11.2301C298.618 12.287 300.193 13.6743 301.289 15.3918V10.1731H313V47.0342H301.289V41.8155C300.148 43.533 298.55 44.9203 296.495 45.9772C294.486 47.0342 292.135 47.5626 289.441 47.5626C286.336 47.5626 283.506 46.792 280.949 45.2506C278.392 43.6651 276.36 41.4412 274.854 38.5786C273.393 35.672 272.662 32.325 272.662 28.5376ZM301.289 28.6036C301.289 25.7851 300.467 23.5611 298.824 21.9317C297.226 20.3022 295.262 19.4875 292.934 19.4875C290.605 19.4875 288.619 20.3022 286.976 21.9317C285.378 23.5171 284.579 25.7191 284.579 28.5376C284.579 31.3561 285.378 33.6021 286.976 35.2756C288.619 36.9051 290.605 37.7198 292.934 37.7198C295.262 37.7198 297.226 36.9051 298.824 35.2756C300.467 33.6462 301.289 31.4222 301.289 28.6036Z">
            </path>
          </svg>
        </div>
        <div className="md:flex  hidden flex-1 justify-between gap-8 items-center">
          <div className="relative flex-1">
            <span className="material-symbols-rounded text-slate-600 font-semibold absolute left-2 top-3">
              search
            </span>
            <input type="text" placeholder='Search items, collections, and accounts' className="w-full py-3 pl-12 rounded-lg border border-slate-300" />
          </div>
          <div className="text-lg text-slate-600 font-semibold">
            Explore
          </div>
          <div className="text-lg font-semibold text-slate-600 font-semi-bold">
            Stats
          </div>
          <div className="text-lg font-semibold text-slate-600 font-semi-bold">
            Resource
          </div>
          <div className="text-lg font-semibold text-slate-600 font-semi-bold">
            Create
          </div>
          <div>
            <div className="w-8 h-8 rounded-full border-2 border-slate-300 bg-gradient-to-r from-cyan-500 to-blue-500">
            </div>
          </div>

          <div>
            <span className="material-symbols-outlined text-3xl text-slate-600 font-semibold">
              account_balance_wallet
            </span>
          </div>


        </div>

        <div className="flex gap-6 self-center md:hidden">
          <div>
            <span className="material-symbols-rounded text-3xl text-slate-600 font-semibold">
              search
            </span>
          </div>
          <div>
            <span className="material-symbols-rounded text-3xl text-slate-600 font-semibold">
              menu
            </span>
          </div>
        </div>
      </div>
    </header >
  )
}

const HomeJumbotron = () => {
  return (
    <div className="relative">
      <div className='absolute h-full w-full bg-cover blur-md jumbotron opacity-25 -z-10' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "media/nft.png"})` }}>

      </div>
      <div className="md:flex container mx-auto py-12">
        <div className='md:w-6/12 self-center md:px-8 px-0'>
          <h1 className="md:text-5xl text-3xl px-8 md:px-0 md:text-left text-center font-semibold">

            Discover, collect, and sell extraordinary NFTs
          </h1>
          <h4 className='text-zinc-700 md:text-2xl md:mt-8 mt-4 md:text-left text-center text-lg '>
            OpenSea is the world's first and <br /> largest NFT marketplace
          </h4>

          <div className="mt-8 md:text-left text-center">
            <button className="mr-4 py-3 md:px-12 px-8 md:text-base text-sm rounded-lg text-white bg-blue-500 font-semibold">
              Explore
            </button>
            <button className="py-3 md:px-12 px-8 md:text-base text-sm rounded-lg text-blue-500 bg-white border border-blue-500 font-semibold">
              Claim
            </button>
          </div>
          <div className="mt-8">
            <h6 className="font-semibold text-blue-500 md:text-left text-center">
              Learn more about OpenSea
            </h6>
          </div>
        </div>
        <div className='md:w-6/12 container md:mt-0 mt-14'>
          <div className='md:px-0 px-6'>
            <img className='md:w-[550px] shadow-md  mx-auto rounded-lg' src={process.env.PUBLIC_URL + "media/nft2.png"} alt="" />
          </div>
        </div>
      </div>
    </div >
  )
}

function App() {
  useEffect(() => {
    const player = new Plyr('#player');

  })
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <EthApp />

      <div className="py-6">
        <div className="text-center md:text-2xl text-lg font-semibold">
          Notable Drops
        </div>
        <div className="md:flex mt-8 gap-4 md:px-12 px-6 mx-auto">
          <img className='md:w-4/12 cursor-pointer hover:scale-105' src={process.env.PUBLIC_URL + "media/ape-1.png"} alt="" />
          <img className='md:w-4/12 cursor-pointer hover:scale-105 md:block hidden' src={process.env.PUBLIC_URL + "media/ape-2.png"} alt="" />
          <img className='md:w-4/12 cursor-pointer hover:scale-105 md:block hidden' src={process.env.PUBLIC_URL + "media/ape-3.png"} alt="" />
        </div>
      </div>

      <div className="py-12">
        <div className="text-center md:text-3xl text-lg font-semibold">
          Top collections
        </div>
        <div className="mt-6 grid md:px-20 px-6 md:gap-8 md:grid-cols-3">

          <div className="flex flex-col">
            <div className="flex gap-2 border-b py-4 border-zinc-300 px-1">

              <div className="self-center font-semibold">
                1
              </div>
              <div className='self-center'>
                <img className='rounded-full w-[50px]' src={process.env.PUBLIC_URL + "media/top-1.jpg"} alt="" />
              </div>

              <div className='flex-1 self-center'>
                <div className="font-semibold">Trippin' Ape Tribe</div>
                <div className="text-zinc-500 text-xs flex items-end font-semibold">
                  Floor Price
                  <img src={process.env.PUBLIC_URL + "media/solana.svg"} className="h-[14px] w-[14px] inline mx-1" />
                  <span className="font-semibold">
                    52.99
                  </span>
                </div>
              </div>

              <div className="self-center">
                <div className="text-red-600 text-right text-sm">
                  -46.10%
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + "media/solana.svg"} className="h-[14px] w-[14px] inline mr-1" />
                  <span className="font-semibold text-zinc-500 text-sm">
                    112,518.59
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 border-b py-4 border-zinc-300 px-1">

              <div className="self-center font-semibold">
                2
              </div>
              <div className='self-center'>
                <img className='rounded-full w-[50px]' src={process.env.PUBLIC_URL + "media/top-2.jpg"} alt="" />
              </div>

              <div className='flex-1 self-center'>
                <div className="font-semibold">goblintown.wtf</div>
                <div className="text-zinc-500 text-xs flex items-end font-semibold">
                  Floor Price
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mx-1" />

                  <span className="font-semibold">
                    1.16
                  </span>
                </div>
              </div>

              <div className="self-center">
                <div className="text-green-600 text-right text-sm">
                  +167.76%
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mr-1" />
                  <span className="font-semibold text-zinc-500 text-sm">
                    1,444.96
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 border-b py-4 border-zinc-300 px-1">

              <div className="self-center font-semibold">
                3
              </div>
              <div className='self-center'>
                <img className='rounded-full w-[50px]' src={process.env.PUBLIC_URL + "media/top-3.jpg"} alt="" />
              </div>

              <div className='flex-1 self-center'>
                <div className="font-semibold">Otherdeed for Others...</div>
                <div className="text-zinc-500 text-xs flex items-end font-semibold">
                  Floor Price
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mx-1" />

                  <span className="font-semibold">
                    2.29
                  </span>
                </div>
              </div>

              <div className="self-center">
                <div className="text-red-600 text-right text-sm">
                  -53.34
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mr-1" />
                  <span className="font-semibold text-zinc-500 text-sm">
                    722.32
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 border-b py-4 border-zinc-300 px-1">

              <div className="self-center font-semibold">
                4
              </div>
              <div className='self-center'>
                <img className='rounded-full w-[50px]' src={process.env.PUBLIC_URL + "media/top-4.png"} alt="" />
              </div>

              <div className='flex-1 self-center'>
                <div className="font-semibold">Bored Ape Yatch Club</div>
                <div className="text-zinc-500 text-xs flex items-end font-semibold">
                  Floor Price
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mx-1" />

                  <span className="font-semibold">
                    1.16
                  </span>
                </div>
              </div>

              <div className="self-center">
                <div className="text-green-600 text-right text-sm">
                  +96.81%
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mr-1" />
                  <span className="font-semibold text-zinc-500 text-sm">
                    585.99
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 border-b py-4 border-zinc-300 px-1">
              <div className="self-center font-semibold">
                5
              </div>
              <div className='self-center'>
                <img className='rounded-full w-[50px]' src={process.env.PUBLIC_URL + "media/top-5.jpg"} alt="" />
              </div>

              <div className='flex-1 self-center'>
                <div className="font-semibold">Okay Duck Yatch Cl...</div>
                <div className="text-zinc-500 text-xs flex items-end font-semibold">
                  Floor Price
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mx-1" />

                  <span className="font-semibold">
                    0.09
                  </span>
                </div>
              </div>

              <div className="self-end items-end">

                <div>
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mr-1" />
                  <span className="font-semibold text-zinc-500 text-sm">
                    549.86
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col">
            <div className="flex gap-2 border-b py-4 border-zinc-300 px-1">

              <div className="self-center font-semibold">
                6
              </div>
              <div className='self-center'>
                <img className='rounded-full w-[50px]' src={process.env.PUBLIC_URL + "media/top-6.jpg"} alt="" />
              </div>

              <div className='flex-1 self-center'>
                <div className="font-semibold">Boki</div>
                <div className="text-zinc-500 text-xs flex items-end font-semibold">
                  Floor Price
                  <img src={process.env.PUBLIC_URL + "media/solana.svg"} className="h-[14px] w-[14px] inline mx-1" />
                  <span className="font-semibold">
                    0.02
                  </span>
                </div>
              </div>

              <div className="self-center">
                <div className="text-green-600 text-right text-sm">
                  +479.59%
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + "media/solana.svg"} className="h-[14px] w-[14px] inline mr-1" />
                  <span className="font-semibold text-zinc-500 text-sm">
                    475.71
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 border-b py-4 border-zinc-300 px-1">

              <div className="self-center font-semibold">
                7
              </div>
              <div className='self-center'>
                <img className='rounded-full w-[50px]' src={process.env.PUBLIC_URL + "media/top-7.png"} alt="" />
              </div>

              <div className='flex-1 self-center'>
                <div className="font-semibold">Allmoonbirds</div>
                <div className="text-zinc-500 text-xs flex items-end font-semibold">
                  Floor Price
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mx-1" />

                  <span className="font-semibold">
                    0.07
                  </span>
                </div>
              </div>

              <div className="self-center">


                <div>
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mr-1" />
                  <span className="font-semibold text-zinc-500 text-sm">
                    433.23
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 border-b py-4 border-zinc-300 px-1">

              <div className="self-center font-semibold">
                8
              </div>
              <div className='self-center'>
                <img className='rounded-full w-[50px] h-[50px]' src={process.env.PUBLIC_URL + "media/top-8.png"} alt="" />
              </div>

              <div className='flex-1 self-center'>
                <div className="font-semibold">Mutabt Ape Yatch Cl...</div>
                <div className="text-zinc-500 text-xs flex items-end font-semibold">
                  Floor Price
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mx-1" />

                  <span className="font-semibold">
                    19.3
                  </span>
                </div>
              </div>

              <div className="self-center">
                <div className="text-green-600 text-right text-sm">
                  +18.67%
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mr-1" />
                  <span className="font-semibold text-zinc-500 text-sm">
                    367.13
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 border-b py-4 border-zinc-300 px-1">

              <div className="self-center font-semibold">
                9
              </div>
              <div className='self-center'>
                <img className='rounded-full w-[50px] border' src={process.env.PUBLIC_URL + "media/top-9.png"} alt="" />
              </div>

              <div className='flex-1 self-center'>
                <div className="font-semibold">Art Blocks Curted</div>
                <div className="text-zinc-500 text-xs flex items-end font-semibold">
                  Floor Price
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mx-1" />

                  <span className="font-semibold">
                    -
                  </span>
                </div>
              </div>

              <div className="self-center">
                <div className="text-green-600 text-right text-sm">
                  +778.02%
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mr-1" />
                  <span className="font-semibold text-zinc-500 text-sm">
                    348.04
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 border-b py-4 border-zinc-300 px-1">

              <div className="self-center font-semibold">
                10
              </div>
              <div className='self-center'>
                <img className='rounded-full w-[50px] border ' src={process.env.PUBLIC_URL + "media/top-10.gif"} alt="" />
              </div>

              <div className='flex-1 self-center'>
                <div className="font-semibold">Verb Chapter One</div>
                <div className="text-zinc-500 text-xs flex items-end font-semibold">
                  Floor Price
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mx-1" />

                  <span className="font-semibold">
                    0.1
                  </span>
                </div>
              </div>

              <div className="self-center text-right">
                <div className="text-green-600 text-right text-sm">
                  +2273010.10%
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mr-1" />
                  <span className="font-semibold text-zinc-500 text-sm">
                    316
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col">
            <div className="flex gap-2 border-b py-4 border-zinc-300 px-1">

              <div className="self-center font-semibold">
                11
              </div>
              <div className='self-center'>
                <img className='rounded-full w-[50px]' src={process.env.PUBLIC_URL + "media/top-11.png"} alt="" />
              </div>

              <div className='flex-1 self-center'>
                <div className="font-semibold">DEGEN TOON COLLE...</div>
                <div className="text-zinc-500 text-xs flex items-end font-semibold">
                  Floor Price
                  <img src={process.env.PUBLIC_URL + "media/solana.svg"} className="h-[14px] w-[14px] inline mx-1" />
                  <span className="font-semibold">
                    2.38
                  </span>
                </div>
              </div>

              <div className="self-center">
                <div className="text-red-600 text-right text-sm">
                  -32.84
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + "media/solana.svg"} className="h-[14px] w-[14px] inline mr-1" />
                  <span className="font-semibold text-zinc-500 text-sm">
                    301.84
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 border-b py-4 border-zinc-300 px-1">

              <div className="self-center font-semibold">
                12
              </div>
              <div className='self-center'>
                <img className='rounded-full w-[50px]' src={process.env.PUBLIC_URL + "media/top-12.png"} alt="" />
              </div>

              <div className='flex-1 self-center'>
                <div className="font-semibold">Bunnies N Homies ...</div>
                <div className="text-zinc-500 text-xs flex items-end font-semibold">
                  Floor Price
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mx-1" />

                  <span className="font-semibold">
                    6.4
                  </span>
                </div>
              </div>

              <div className="self-center">
                <div className="text-green-600 text-right text-sm">
                  +37.28%
                </div>

                <div>
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mr-1" />
                  <span className="font-semibold text-zinc-500 text-sm">
                    11,770.98
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 border-b py-4 border-zinc-300 px-1">

              <div className="self-center font-semibold">
                13
              </div>
              <div className='self-center'>
                <img className='rounded-full w-[50px] h-[50px]' src={process.env.PUBLIC_URL + "media/top-13.png"} alt="" />
              </div>

              <div className='flex-1 self-center'>
                <div className="font-semibold">Okay Bears</div>
                <div className="text-zinc-500 text-xs flex items-end font-semibold">
                  Floor Price
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mx-1" />

                  <span className="font-semibold">
                    200
                  </span>
                </div>
              </div>

              <div className="self-center">
                <div className="text-red-600 text-right text-sm">
                  -48.83%
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mr-1" />
                  <span className="font-semibold text-zinc-500 text-sm">
                    11,044.29
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 border-b py-4 border-zinc-300 px-1">

              <div className="self-center font-semibold">
                14
              </div>
              <div className='self-center'>
                <img className='rounded-full w-[50px]' src={process.env.PUBLIC_URL + "media/top-14.jpg"} alt="" />
              </div>

              <div className='flex-1 self-center'>
                <div className="font-semibold">Doodles</div>
                <div className="text-zinc-500 text-xs flex items-end font-semibold">
                  Floor Price
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mx-1" />

                  <span className="font-semibold">
                    12.68
                  </span>
                </div>
              </div>

              <div className="self-center">
                <div className="text-green-600 text-right text-sm">
                  +168.13%
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mr-1" />
                  <span className="font-semibold text-zinc-500 text-sm">
                    258.53
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 border-b py-4 border-zinc-300 px-1">

              <div className="self-center font-semibold">
                15
              </div>
              <div className='self-center'>
                <img className='rounded-full w-[50px] border ' src={process.env.PUBLIC_URL + "media/top-15.png  "} alt="" />
              </div>

              <div className='flex-1 self-center'>
                <div className="font-semibold">CLONE X - X TAKASH...</div>
                <div className="text-zinc-500 text-xs flex items-end font-semibold">
                  Floor Price
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mx-1" />

                  <span className="font-semibold">
                    13.5
                  </span>
                </div>
              </div>

              <div className="self-center text-right">
                <div className="text-green-600 text-right text-sm">
                  +23.00%
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + "media/eth.svg"} className="h-[14px] w-[14px] inline mr-1" />
                  <span className="font-semibold text-zinc-500 text-sm">
                    255.24
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="py-16 bg-[#fbfdff] md:px-12 px-6">
        <div className="text-center mb-12">
          <h1 className="font-semibold md:text-3xl text-xl">
            Create and sell your NFTs
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className='text-center'>
            <img className='w-[40px] h-[40px] mx-auto mb-2' src={process.env.PUBLIC_URL + "media/wallet.svg"} alt="" />
            <h6 className="font-semibold">
              Set up your wallet
            </h6>
            <h5 className="text-lg text-zinc-600 mt-2">
              Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the
            </h5>
          </div>
          <div className='text-center'>
            <img className='w-[40px] h-[40px] mx-auto mb-2' src={process.env.PUBLIC_URL + "media/collection.svg"} alt="" />

            <h6 className="font-semibold">
              Create your collection
            </h6>
            <h5 className="text-lg text-zinc-600 mt-2">
              Click <span className="text-blue-500 font-bold">My Collections</span> and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.
            </h5>
          </div>
          <div className='text-center'>
            <img className='w-[40px] h-[40px] mx-auto mb-2' src={process.env.PUBLIC_URL + "media/nft.svg"} alt="" />

            <h6 className="font-semibold">
              Add your NFTs
            </h6>
            <h5 className="text-lg text-zinc-600 mt-2">
              Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.
            </h5>
          </div>
          <div className='text-center'>
            <img className='w-[40px] h-[40px] mx-auto mb-2' src={process.env.PUBLIC_URL + "media/sale.svg"} alt="" />

            <h6 className="font-semibold">
              List them for sale
            </h6>
            <h5 className="text-lg text-zinc-600 mt-2">
              Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!
            </h5>
          </div>
        </div>
      </div>

      <div className="py-12 md:px-12 px-6 mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-semibold md:text-3xl text-xl">
            Resources for getting started
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className='rounded-lg border border-zinc-300'>
            <div className="h-[260px] border-b border-zinc-300">
              <img className='o object-cover h-full w-full rounded-t-lg' src={process.env.PUBLIC_URL + "media/76edde93ea6402d5818fbc03767aeda0.png"} alt="" />
            </div>
            <div className="p-6 text-xl font-semibold text-zinc-700">
              How to Fund MetaMask with ETH
            </div>
          </div>
          <div className='rounded-lg border border-zinc-300'>
            <div className="h-[260px] border-b border-zinc-300">
              <img className='o object-cover h-full w-full rounded-t-lg' src={process.env.PUBLIC_URL + "media/image-13.png"} alt="" />
            </div>
            <div className="p-6 text-xl font-semibold text-zinc-700">
              How to Easily Setup a MetaMask Wallet
            </div>
          </div>
          <div className='rounded-lg border border-zinc-300'>
            <div className="h-[260px] border-b border-zinc-300">
              <img className='o object-cover h-full w-full rounded-t-lg' src={process.env.PUBLIC_URL + "media/image-10.png"} alt="" />
            </div>
            <div className="p-6 text-xl font-semibold text-zinc-700">
              How to Find and NFT You Love
            </div>
          </div>
        </div>
      </div>

      <div className="py-12  md:px-20 px-6 md:mt-32 mt-12">
        <div className="text-center mb-12">
          <h1 className="font-semibold md:text-3xl text-xl">
            Browse by category
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-y-6 md:gap-x-8 md:gap-y-16">

          <div className='rounded-lg border border-zinc-300'>
            <div className="h-[184px] border-b border-zinc-300">
              <img className='o object-cover h-full w-full rounded-t-lg' src={process.env.PUBLIC_URL + "media/art.png"} alt="" />
            </div>
            <div className="text-center p-6 text-xl font-semibold text-zinc-700">
              Art
            </div>
          </div>

          <div className='rounded-lg border border-zinc-300'>
            <div className="h-[184px] border-b border-zinc-300">
              <img className='o object-cover h-full w-full rounded-t-lg' src={process.env.PUBLIC_URL + "media/collectibles.png"} alt="" />
            </div>
            <div className="text-center p-6 text-xl font-semibold text-zinc-700">
              Collectibles
            </div>
          </div>

          <div className='rounded-lg border border-zinc-300'>
            <div className="h-[184px] border-b border-zinc-300">
              <img className='o object-cover h-full w-full rounded-t-lg' src={process.env.PUBLIC_URL + "media/domain-names.png"} alt="" />
            </div>
            <div className="text-center p-6 text-xl font-semibold text-zinc-700">
              Domain Names
            </div>
          </div>

          <div className='rounded-lg border border-zinc-300'>
            <div className="h-[184px] border-b border-zinc-300">
              <img className='o object-cover h-full w-full rounded-t-lg' src={process.env.PUBLIC_URL + "media/music.png"} alt="" />
            </div>
            <div className="text-center p-6 text-xl font-semibold text-zinc-700">
              Music
            </div>
          </div>

          <div className='rounded-lg border border-zinc-300'>
            <div className="h-[184px] border-b border-zinc-300">
              <img className='o object-cover h-full w-full rounded-t-lg' src={process.env.PUBLIC_URL + "media/photography-category.png"} alt="" />
            </div>
            <div className="text-center p-6 text-xl font-semibold text-zinc-700">
              Photography
            </div>
          </div>

          <div className='rounded-lg border border-zinc-300'>
            <div className="h-[184px] border-b border-zinc-300">
              <img className='o object-cover h-full w-full rounded-t-lg' src={process.env.PUBLIC_URL + "media/sports.png"} alt="" />
            </div>
            <div className="text-center p-6 text-xl font-semibold text-zinc-700">
              Sports
            </div>
          </div>

          <div className='rounded-lg border border-zinc-300'>
            <div className="h-[184px] border-b border-zinc-300">
              <img className='o object-cover h-full w-full rounded-t-lg' src={process.env.PUBLIC_URL + "media/trading-cards.png"} alt="" />
            </div>
            <div className="text-center p-6 text-xl font-semibold text-zinc-700">
              Trading Cards
            </div>
          </div>

          <div className='rounded-lg border border-zinc-300'>
            <div className="h-[184px] border-b border-zinc-300">
              <img className='o object-cover h-full w-full rounded-t-lg' src={process.env.PUBLIC_URL + "media/utility.png"} alt="" />
            </div>
            <div className="text-center p-6 text-xl font-semibold text-zinc-700">
              Utiliy
            </div>
          </div>

          <div className='rounded-lg border border-zinc-300'>
            <div className="h-[184px] border-b border-zinc-300">
              <img className='o object-cover h-full w-full rounded-t-lg' src={process.env.PUBLIC_URL + "media/virtual-worlds.png"} alt="" />
            </div>
            <div className="text-center p-6 text-xl font-semibold text-zinc-700">
              Virtual Worlds
            </div>
          </div>
        </div>
      </div>

      <div className="py-12  md:px-20 px-6 md:mt-32 mt-12">
        <div className="text-center mb-12">
          <h1 className="font-semibold md:text-5xl text-5xl">
            Meet OpenSea
          </h1>
          <h6 className="text-zinc-500 font-semibold text-center md:font-2xl md:mt-6 mt-2">The NFT marketplace with everything for everyone</h6>
        </div>

        <div className='md:px-12'>
          <div className="plyr__video-embed" id="player">
            <iframe
              src="https://www.youtube.com/watch?list=TLGG0LpIW2LMI8cyNjA1MjAyMg&v=gfGuPd1CELo&feature=emb_imp_woyt"
              allowFullScreen
              allowTransparency
              allow="autoplay"
            >
            </iframe>
          </div>
        </div>
      </div>

      <div className="mt-12 py-8 bg-[#2081e2] px-8">
        <div className="grid grid-cols-2 md:gap-0 gap-6 md:grid-cols-8">
          <div>
            <svg className="w-[125px] mx-auto" viewBox="0 0 135 32">
              <path className="fill-white" d="M70.8,19.6c-3.4,0-6.1,2.6-6.1,6.1s2.8,6.1,6.1,6.1c3.4,0,6.1-2.7,6.1-6.1C76.9,22.2,74.2,19.6,70.8,19.6z M70.8,22c2.1,0,3.6,1.5,3.6,3.7c0,2.1-1.6,3.7-3.6,3.7c-2.1,0-3.6-1.5-3.6-3.7C67.1,23.6,68.7,22,70.8,22z M121.6,27.9v-5.6h2.9 v-2.4h-2.9v-3.3l-2.5,0.8v2.5H117v2.4h2.1v5.6c0,3,1.5,4.1,5.4,3.6v-2.2C122.6,29.4,121.6,29.4,121.6,27.9z M134.6,29.2h-5.7 l5.7-6.9V20h-8.9v2.3h5.7l-5.7,6.9v2.4h8.9V29.2L134.6,29.2z M84,19.7v2.7c-1.7-0.1-3.6,0.6-3.6,3.3v5.8h-2.5V19.9h2.5v1.9 C81.1,20.3,82.5,19.7,84,19.7z M90,19.6c-3.4,0-6.1,2.6-6.1,6.1s2.8,6.1,6.1,6.1c3.4,0,6.1-2.7,6.1-6.1 C96.2,22.2,93.5,19.6,90,19.6z M90,22c2.1,0,3.6,1.5,3.6,3.7c0,2.1-1.6,3.7-3.6,3.7c-2.1,0-3.6-1.5-3.6-3.7C86.4,23.6,88,22,90,22z M112.7,19.9L109,31.6h-2.4l-2.4-7.8l-2.4,7.8h-2.4l-3.7-11.6h2.6l2.2,8l2.4-8h2.4l2.4,8l2.2-8H112.7L112.7,19.9z M116,19.9h-2.5 v11.6h2.5V19.9L116,19.9z M34.5,1.7v4.8c-1-0.7-2.3-1.3-3.6-1.3c-3.6,0-6.5,3.1-6.1,6.8c0.3,2.8,2.6,5.1,5.5,5.5 c1.6,0.1,3.1-0.3,4.2-1.2v0.9H37V1L34.5,1.7z M34.4,11.4c0,2.2-2.1,4-4.4,3.5c-1.3-0.3-2.4-1.3-2.8-2.8c-0.4-2.3,1.3-4.4,3.6-4.4 C32.8,7.8,34.4,9.4,34.4,11.4L34.4,11.4z M9.7,5.7v0.8c-1-0.7-2.2-1.2-3.5-1.2c-3.6,0-6.5,3.1-6.1,6.8c0.3,2.8,2.6,5.1,5.5,5.5 c1.6,0.1,3.1-0.3,4.2-1.2v0.9h2.6V5.7H9.7L9.7,5.7z M9.7,11.4c0,2.2-2.1,4-4.4,3.5c-1.3-0.3-2.4-1.3-2.8-2.8 C2.1,9.8,3.9,7.8,6.1,7.8C8.1,7.8,9.7,9.4,9.7,11.4z M19.4,5.3c-1.6,0-2.8,0.6-3.6,1.8V5.6h-2.5v11.6h2.5V11c0-2.4,1.3-3.3,3-3.3 c1.6,0,2.6,0.9,2.6,2.7v6.9h2.5v-7.1C23.9,7.1,22,5.3,19.4,5.3z M66.1,13.8c-0.6,0.8-1.6,1.4-3,1.4c-1.9,0-3.3-0.9-3.7-2.8h9.3 c0.1-0.3,0.1-0.7,0.1-1c0-3.3-2.4-6.1-5.8-6.1c-3.7,0-6.1,2.7-6.1,6.1c0,3.5,2.5,6.1,6.3,6.1c2.2,0,4-1,5.1-2.5L66.1,13.8 L66.1,13.8z M62.9,7.6c1.5,0,3,0.8,3.3,2.8h-6.9C59.7,8.7,61,7.6,62.9,7.6z M94.8,15.3c1.4,0,2.4-0.6,3-1.4l2.1,1.2 c-1.1,1.6-2.8,2.5-5.1,2.5c-3.9,0-6.3-2.6-6.3-6.1c0-3.5,2.5-6.1,6.1-6.1c3.5,0,5.8,2.8,5.8,6.1c0,0.1,0,0.3-0.1,0.5 c0,0.2-0.1,0.3-0.1,0.5h-9.3C91.5,14.3,93,15.3,94.8,15.3L94.8,15.3z M97.9,10.5c-0.3-2-1.8-2.8-3.3-2.8c-1.9,0-3.1,1.1-3.5,2.8 H97.9z M116,17.3h-2.5V15h2.5V17.3z M101.7,17.3h2.5v-6.2c0-2.4,1.3-3.3,3-3.3c1.5,0,2.6,1,2.6,2.7v6.8h2.5v-7.1 c0-3-1.9-4.8-4.4-4.8c-1.6,0-2.8,0.6-3.6,1.8V5.7h-2.5V17.3L101.7,17.3z M72,8.9c0-0.8,0.8-1.2,1.7-1.2c0.9,0,1.7,0.4,2.1,1.2 L78,7.7c-0.8-1.5-2.4-2.4-4.3-2.4c-2.4,0-4.2,1.3-4.2,3.5c0,2.4,2.1,3,3.9,3.5h0.1c0.1,0,0.1,0.1,0.2,0.1c1.2,0.4,2.1,0.6,2.1,1.5 c0,0.9-0.8,1.3-2,1.3c-1.1,0-2-0.4-2.4-1.3L69,15c0.8,1.5,2.4,2.5,4.6,2.5c2.5,0,4.6-1.3,4.6-3.6c0-2.5-2.2-3.1-3.9-3.6 C73.1,10,72,9.7,72,8.9L72,8.9z M81.7,8.9c0-0.8,0.8-1.2,1.7-1.2c0.9,0,1.7,0.4,2.2,1.2l2.2-1.1c-0.8-1.5-2.4-2.4-4.3-2.4 c-2.4,0-4.2,1.3-4.2,3.5c0,2.4,2.1,3,3.9,3.5h0.2c1.2,0.4,2.2,0.7,2.2,1.5c0,0.9-0.9,1.3-2,1.3c-1.2,0-2-0.4-2.4-1.3l-2.2,1.1 c0.8,1.5,2.4,2.5,4.6,2.5c2.6,0,4.6-1.3,4.6-3.6c0-2.5-2.1-3.1-3.9-3.6H84c-0.1,0-0.2-0.1-0.3-0.1C82.6,10,81.7,9.7,81.7,8.9 L81.7,8.9z M44.2,8.2V5.5c-1.5,0-2.9,0.6-3.6,2.1V5.7h-2.5v11.6h2.5v-5.8C40.6,8.8,42.5,8,44.2,8.2L44.2,8.2z M55.7,15v6.4 c0.8-1.2,2-1.8,3.6-1.8c2.6,0,4.4,1.7,4.4,4.8v7.2h-2.5v-6.9c0-1.7-1-2.7-2.6-2.7c-1.7,0-3,1-3,3.3v6.2h-2.5V17.1 c-0.8,0.3-1.6,0.5-2.6,0.5c-3.9,0-6.3-2.6-6.3-6.1c0-3.5,2.5-6.1,6.1-6.1c3.5,0,5.8,2.8,5.8,6.1c0,0.1,0,0.3-0.1,0.5 c0,0.2-0.1,0.3-0.1,0.5h-9.3c0.4,1.8,1.9,2.8,3.7,2.8c1.1,0,1.9-0.4,2.6-0.9c0.2-0.1,0.3-0.3,0.4-0.5L55.7,15L55.7,15z M53.7,10.5 c-0.4-2-1.8-2.8-3.3-2.8c-1.9,0-3.1,1.1-3.5,2.8H53.7L53.7,10.5z">
              </path>
            </svg>
          </div>
          <div>
            <svg className="w-[125px] mx-auto" viewBox="0 0 112 25">
              <path className="fill-white" d="M7.2,24.9c-3.6,0-7.2-2.6-7.2-8.5c0-5.9,3.5-8.5,7.2-8.5c1.8,0,3.2,0.5,4.2,1.1l-1.1,2.4 c-0.7-0.5-1.7-0.8-2.7-0.8c-2.2,0-4.2,1.7-4.2,5.7c0,4,2.1,5.8,4.2,5.8c1,0,2-0.3,2.7-0.8l1.1,2.5C10.3,24.5,9,24.9,7.2,24.9z">
              </path>
              <path className="fill-white" d="M19.7,24.9c-4.6,0-7.2-3.7-7.2-8.5c0-4.8,2.5-8.5,7.2-8.5c4.6,0,7.2,3.6,7.2,8.5C26.9,21.3,24.3,24.9,19.7,24.9 z M19.7,10.6c-2.6,0-3.8,2.3-3.8,5.8c0,3.5,1.3,5.8,3.8,5.8c2.6,0,3.8-2.3,3.8-5.8C23.5,12.9,22.3,10.6,19.7,10.6z">
              </path>
              <path className="fill-white" d="M31.3,5.3c-1.1,0-2-0.8-2-1.9s0.9-1.9,2-1.9c1.1,0,2,0.8,2,1.9S32.4,5.3,31.3,5.3z M29.6,8.3H33v16.3h-3.3V8.3z ">
              </path>
              <path className="fill-white" d="M46.1,24.6V13.7c0-1.9-1.2-3.1-3.4-3.1c-1.2,0-2.3,0.2-3,0.5v13.5h-3.3V9.1c1.6-0.7,3.7-1.2,6.3-1.2 c4.6,0,6.8,2,6.8,5.4v11.2H46.1z">
              </path>
              <path className="fill-white" d="M58.2,24.9c-2.1,0-4.2-0.5-5.5-1.2V0.8H56v7.9C56.8,8.3,58.1,8,59.2,8c4.2,0,7.1,3,7.1,8 C66.2,22.2,63.1,24.9,58.2,24.9z M58.6,10.6c-0.9,0-2,0.2-2.6,0.5v10.7c0.5,0.2,1.4,0.4,2.4,0.4c2.6,0,4.6-1.8,4.6-6 C62.9,12.7,61.2,10.6,58.6,10.6z">
              </path>
              <path className="fill-white" d="M75.2,24.9c-4.7,0-7.1-1.9-7.1-5.1c0-4.5,4.8-5.4,9.8-5.6v-1c0-2.1-1.4-2.8-3.5-2.8c-1.5,0-3.4,0.5-4.5,1 l-0.8-2.3c1.3-0.6,3.5-1.2,5.7-1.2c3.9,0,6.3,1.5,6.3,5.5v10.3C79.9,24.4,77.5,24.9,75.2,24.9z M78,16.4c-3.3,0.2-6.7,0.5-6.7,3.4 c0,1.7,1.3,2.8,3.8,2.8c1.1,0,2.3-0.2,2.8-0.4V16.4z">
              </path>
              <path className="fill-white" d="M88.6,24.9c-1.9,0-3.9-0.5-5.1-1.2l1.1-2.5c0.8,0.5,2.6,1.1,3.9,1.1c1.8,0,3-0.9,3-2.2c0-1.5-1.2-2.1-2.9-2.7 c-2.2-0.8-4.6-1.8-4.6-4.9c0-2.7,2.1-4.6,5.7-4.6c2,0,3.6,0.5,4.8,1.2l-1,2.3c-0.7-0.5-2.2-1-3.4-1c-1.7,0-2.7,0.9-2.7,2.1 c0,1.5,1.2,2,2.8,2.6c2.3,0.8,4.8,1.8,4.8,5C94.9,23,92.6,24.9,88.6,24.9z">
              </path>
              <path className="fill-white" d="M111,16.4l-10.8,1.5c0.3,2.9,2.2,4.4,5,4.4c1.6,0,3.4-0.4,4.5-1l1,2.5c-1.3,0.7-3.5,1.2-5.7,1.2 c-5.1,0-8-3.3-8-8.5c0-5,2.8-8.5,7.4-8.5c4.2,0,6.8,2.8,6.8,7.2C111,15.5,111,15.9,111,16.4z M104.2,10.4c-2.5,0-4.2,1.9-4.3,5.3 l7.9-1.1C107.8,11.7,106.4,10.4,104.2,10.4z">
              </path>
            </svg>
          </div>
          <div>
            <svg className="YCombinatorLogoreact-sc-nnkjgo-0 ifWgdQ w-[125px] mx-auto" viewBox="0 0 140 30">
              <path className="fill-[#2081e2] stroke-white" d="M28.9,0.9H0v28.9h28.9V0.9z" fill="#FC6723">
              </path>
              <path className="fill-white YCombinatorLogo--y" d="M13.5,17.3L8.5,8h2.3l2.9,5.9c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.2,0.2,0.4l0.1,0.1v0.1 c0.1,0.2,0.1,0.3,0.2,0.5c0.1,0.1,0.1,0.3,0.2,0.4c0.1-0.3,0.3-0.5,0.4-0.9c0.1-0.3,0.3-0.6,0.5-0.9L18.3,8h2.1l-5,9.4v6h-1.9V17.3z " fill="#FFFEFE">
              </path>
              <path className="fill-white YCombinatorLogo--letters" d="M42.1,6.5c1.4,0,2.7,0.4,3.7,1.2l-1,1.2c-0.9-0.6-1.7-1-2.8-1c-1.6,0-2.9,0.9-3.6,2.5c-0.4,1-0.6,2.2-0.6,3.9 c0,1.3,0.2,2.3,0.5,3.1c0.8,1.8,2,2.7,4,2.7c1.1,0,2-0.3,2.9-1l1,1.3c-1.3,0.8-2.6,1.2-4,1.2c-1.7,0-3.2-0.7-4.3-2.1 c-1.2-1.3-1.6-3.2-1.6-5.4c0-2.2,0.6-4,1.7-5.4C38.9,7.3,40.4,6.5,42.1,6.5z" fill="black">
              </path>
              <path className="fill-white YCombinatorLogo--letters" d="M47.6,16.1c0-1.7,0.4-3.1,1.3-4c0.9-1,1.9-1.5,3.3-1.5c1.5,0,2.8,0.6,3.7,1.8c0.7,1,1,2.3,1,4 c0,1.9-0.6,3.5-1.6,4.4c-0.8,0.7-1.7,1.1-2.9,1.1c-1.4,0-2.5-0.5-3.4-1.5C48,19.2,47.6,17.8,47.6,16.1z M54.4,13.3 c-0.5-0.9-1.2-1.3-2.2-1.3c-1.1,0-1.7,0.4-2.2,1.2c-0.4,0.6-0.5,1.5-0.5,2.8c0,1.6,0.2,2.8,0.7,3.5c0.5,0.7,1.2,1.1,2.1,1.1 c1.2,0,1.9-0.6,2.3-1.6c0.2-0.6,0.3-1.3,0.3-2.3C54.9,15,54.8,13.9,54.4,13.3z" fill="black">
              </path>
              <path className="fill-white YCombinatorLogo--letters" d="M59.9,13.5c0-1.1-0.1-1.9-0.4-2.6l1.6-0.4c0.3,0.5,0.4,1.1,0.4,1.5v0.1c0.4-0.4,0.8-0.8,1.3-1.1 c0.7-0.4,1.3-0.6,1.8-0.6c0.9,0,1.6,0.4,2.1,1.1c0.1,0.2,0.3,0.5,0.4,0.7c1.2-1.2,2.2-1.7,3.4-1.7c0.8,0,1.4,0.3,1.9,0.8 c0.5,0.6,0.8,1.3,0.8,2v8h-1.7v-7.9c0-1.1-0.5-1.5-1.3-1.5c-0.5,0-1.1,0.2-1.5,0.6c-0.2,0.2-0.6,0.5-1.1,0.9l-0.2,0.2v7.8h-1.8v-7.5 c0-0.7-0.1-1.2-0.3-1.3C65,12.1,64.7,12,64.2,12c-0.8,0-1.6,0.5-2.7,1.4v7.9h-1.6V13.5L59.9,13.5z" fill="black">
              </path>
              <path className="fill-white YCombinatorLogo--letters" d="M76.2,6.1L78,5.7c0.2,0.8,0.3,1.6,0.3,2.7v2.4c0,0.6,0,1,0,1.2c1-1,2-1.4,3.1-1.4c1.3,0,2.3,0.5,3,1.4 c0.8,1,1.2,2.3,1.2,4c0,1.7-0.4,3.1-1.2,4.1c-0.8,1.1-1.8,1.5-3.1,1.5c-0.6,0-1.1-0.1-1.6-0.4c-0.6-0.3-1-0.6-1.3-1 c-0.1,0.5-0.2,0.9-0.3,1.2h-1.6c0.2-0.5,0.3-1.3,0.3-2.7V8.6C76.6,7.5,76.5,6.6,76.2,6.1z M79,12.7c-0.3,0.2-0.6,0.5-0.8,0.8V19 c0.7,0.9,1.5,1.3,2.6,1.3c0.9,0,1.5-0.3,1.9-1c0.5-0.8,0.8-1.8,0.8-3.4c0-1.3-0.2-2.3-0.7-2.9c-0.4-0.6-1.1-0.9-2-0.9 C80.3,12,79.6,12.2,79,12.7z" fill="black">
              </path>
              <path className="fill-white YCombinatorLogo--letters" d="M88,7.5c0-0.4,0.1-0.7,0.4-1c0.3-0.3,0.6-0.4,1-0.4s0.7,0.1,1,0.4c0.3,0.3,0.4,0.6,0.4,1c0,0.4-0.1,0.7-0.4,1 c-0.3,0.3-0.6,0.4-1,0.4s-0.7-0.1-1-0.4S88,7.9,88,7.5z M88.4,21.4V10.8l1.7-0.3v10.9H88.4z" fill="black">
              </path>
              <path className="fill-white YCombinatorLogo--letters" d="M93.9,13.5c0-0.8,0-1.3-0.1-1.4c0-0.3-0.2-0.6-0.4-1.1l1.6-0.5c0.3,0.6,0.4,1.1,0.4,1.6 c1.1-1.1,2.2-1.6,3.4-1.6c0.6,0,1.1,0.1,1.5,0.4c0.5,0.3,0.9,0.7,1.1,1.2c0.2,0.4,0.3,0.8,0.3,1.3v8.1h-1.6v-7.2 c0-0.9-0.1-1.4-0.4-1.7s-0.7-0.5-1.2-0.5c-0.4,0-1,0.2-1.5,0.5c-0.6,0.3-1.1,0.7-1.4,1.1v7.9h-1.6V13.5L93.9,13.5z" fill="black">
              </path>
              <path className="fill-white YCombinatorLogo--letters" d="M105.6,13.1l-0.9-1.2c1.4-1,2.9-1.4,4.4-1.4c1.5,0,2.5,0.6,3,1.6c0.2,0.4,0.2,1,0.2,1.8v0.6l-0.1,3.5 c0,0.1,0,0.3,0,0.5c0,0.6,0,1,0.1,1.3c0.1,0.4,0.4,0.7,0.8,0.9l-0.9,1.2c-0.8-0.3-1.3-0.8-1.4-1.5c-1,1-2,1.4-3.1,1.4 c-1.1,0-1.9-0.3-2.6-0.9c-0.6-0.5-0.9-1.3-0.9-2.2c0-1.3,0.5-2.1,1.4-2.8c1-0.7,2.4-1,4.1-1c0.3,0,0.5,0,0.8,0V14 c0-0.9-0.1-1.4-0.4-1.6c-0.4-0.4-0.8-0.6-1.4-0.6c-0.6,0-1.3,0.2-2,0.5C106.4,12.5,106,12.8,105.6,13.1z M110.7,18.8l0.1-2.8 c-0.5,0-0.8,0-0.9,0c-1.5,0-2.5,0.3-3.1,0.9c-0.4,0.4-0.6,1-0.6,1.7c0,1.3,0.6,1.9,1.8,1.9C109.2,20.4,110.1,19.8,110.7,18.8z" fill="black">
              </path>
              <path className="fill-white YCombinatorLogo--letters" d="M117.8,10.8h2.7l-0.5,1.3h-2.2V19c0,0.6,0.1,1,0.3,1.3c0.2,0.2,0.6,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.2l0.2,1.1 c-0.6,0.3-1.2,0.4-1.8,0.4c-1.6,0-2.4-0.8-2.4-2.4v-7.3h-1.4v-1.3h1.3v-0.2c0-0.2,0.1-1,0.2-2.2V8.1l1.7-0.4 C117.8,8.8,117.8,9.9,117.8,10.8z" fill="black">
              </path>
              <path className="fill-white YCombinatorLogo--letters" d="M122.2,16.1c0-1.7,0.4-3.1,1.3-4c0.8-1,1.9-1.5,3.3-1.5c1.5,0,2.8,0.6,3.7,1.8c0.7,1,1,2.3,1,4 c0,1.9-0.6,3.5-1.6,4.4c-0.8,0.7-1.7,1.1-2.9,1.1c-1.4,0-2.5-0.5-3.4-1.5C122.7,19.2,122.2,17.8,122.2,16.1z M129.1,13.3 c-0.5-0.9-1.2-1.3-2.2-1.3c-1.1,0-1.7,0.4-2.2,1.2c-0.4,0.6-0.5,1.5-0.5,2.8c0,1.6,0.2,2.8,0.7,3.5c0.5,0.7,1.2,1.1,2.1,1.1 c1.2,0,1.9-0.6,2.3-1.6c0.2-0.6,0.3-1.3,0.3-2.3C129.6,15,129.4,13.9,129.1,13.3z" fill="black">
              </path>
              <path className="fill-white YCombinatorLogo--letters" d="M134.6,13.3c0-1-0.1-1.7-0.4-2.3l1.6-0.5c0.3,0.6,0.4,1.1,0.4,1.6v0.2c0.9-1.2,1.8-1.7,3-1.7 c0.2,0,0.4,0,0.6,0.1l-0.7,1.8c-0.2-0.1-0.4-0.1-0.5-0.1c-0.4,0-0.9,0.1-1.3,0.4c-0.4,0.3-0.8,0.6-1,1c-0.1,0.3-0.2,0.7-0.2,1.2v6.7 h-1.6V13.3z" fill="black">
              </path>
            </svg>
          </div>
          <div>
            <svg className="TrustWalletLogoreact-sc-hph2gf-0 dcLuHc w-[125px] mx-auto" viewBox="0 0 136 36">
              <path className="fill-white" d="M45.7,14.4H42v-2.2h10v2.2h-3.7v9.3h-2.6V14.4z M54.5,16c0.3-0.4,0.7-0.7,1.2-1c0.5-0.2,1.1-0.3,1.8-0.3v2.4 c-0.3,0-0.5,0-0.6,0c-0.7,0-1.3,0.2-1.7,0.6s-0.6,1-0.6,1.8v4.2H52v-8.8h2.4L54.5,16L54.5,16z M67,14.9v8.8h-2.4v-1 c-0.3,0.4-0.7,0.7-1.2,0.9c-0.5,0.2-1,0.3-1.5,0.3c-1.2,0-2.1-0.3-2.7-1c-0.7-0.7-1-1.7-1-3v-5h2.6v4.6c0,1.4,0.6,2.1,1.8,2.1 c0.6,0,1.1-0.2,1.5-0.6c0.4-0.4,0.6-1,0.6-1.8v-4.3C64.7,14.9,67,14.9,67,14.9z M71.4,23.8c-0.7,0-1.4-0.1-2.1-0.3 c-0.7-0.2-1.3-0.4-1.7-0.7l0.9-1.8c0.4,0.3,0.9,0.5,1.4,0.6c0.6,0.2,1.1,0.2,1.6,0.2c1.1,0,1.6-0.3,1.6-0.8c0-0.3-0.1-0.4-0.4-0.5 s-0.7-0.2-1.4-0.3c-0.7-0.1-1.3-0.2-1.8-0.4c-0.5-0.1-0.9-0.4-1.2-0.8c-0.3-0.4-0.5-0.9-0.5-1.5s0.2-1,0.5-1.5 c0.3-0.4,0.8-0.8,1.4-1s1.4-0.4,2.2-0.4c0.6,0,1.2,0.1,1.8,0.2c0.6,0.1,1.1,0.3,1.5,0.6l-0.9,1.8c-0.8-0.4-1.6-0.7-2.5-0.7 c-0.5,0-1,0.1-1.2,0.2c-0.3,0.2-0.4,0.3-0.4,0.6c0,0.3,0.1,0.5,0.4,0.6s0.8,0.2,1.4,0.3c0.7,0.1,1.3,0.3,1.8,0.4s0.9,0.4,1.2,0.7 c0.3,0.4,0.5,0.9,0.5,1.5c0,0.5-0.2,1-0.5,1.5c-0.3,0.4-0.8,0.8-1.4,1C73,23.7,72.2,23.8,71.4,23.8z M81.8,23.2 c-0.3,0.2-0.6,0.3-0.9,0.4c-0.4,0.1-0.7,0.1-1.1,0.1c-1,0-1.9-0.3-2.4-0.8c-0.6-0.5-0.9-1.3-0.9-2.4V17h-1.4v-2h1.4v-2.1H79V15h2.2 v2H79v3.6c0,0.4,0.1,0.7,0.3,0.9c0.2,0.2,0.5,0.3,0.8,0.3c0.4,0,0.7-0.1,1-0.3L81.8,23.2z M103.4,12.2l-3.7,11.4h-2.8l-2.5-7.8 l-2.6,7.8H89l-3.8-11.4h2.7l2.6,8l2.7-8h2.5l2.6,8.1l2.7-8.1C101,12.2,103.4,12.2,103.4,12.2z M106.6,14.7c1.4,0,2.4,0.3,3.1,1 c0.7,0.6,1.1,1.6,1.1,2.9v5h-2.4v-1.1c-0.5,0.8-1.4,1.2-2.7,1.2c-0.7,0-1.3-0.1-1.8-0.3c-0.5-0.2-0.9-0.5-1.1-0.9 c-0.3-0.4-0.4-0.9-0.4-1.4c0-0.8,0.3-1.5,0.9-1.9c0.6-0.5,1.6-0.7,2.9-0.7h2c0-0.6-0.2-1-0.5-1.3s-0.8-0.5-1.5-0.5 c-0.5,0-0.9,0.1-1.4,0.2c-0.4,0.1-0.8,0.3-1.1,0.6l-0.9-1.8c0.5-0.3,1.1-0.6,1.7-0.8C105.2,14.8,105.9,14.7,106.6,14.7z M106.4,22.1 c0.4,0,0.8-0.1,1.2-0.3c0.3-0.2,0.6-0.5,0.7-0.9V20h-1.7c-1,0-1.6,0.3-1.6,1c0,0.3,0.1,0.6,0.4,0.8C105.6,22,105.9,22.1,106.4,22.1z M112.1,11.5h2.6v12.1h-2.6V11.5z M116.1,11.5h2.6v12.1h-2.6V11.5z M128.6,19.3c0,0,0,0.3,0,0.7h-6.7c0.1,0.5,0.4,1,0.8,1.3 s1,0.5,1.7,0.5c0.5,0,0.9-0.1,1.2-0.2c0.4-0.1,0.7-0.4,1-0.7l1.4,1.5c-0.8,0.9-2,1.4-3.6,1.4c-1,0-1.9-0.2-2.6-0.6 c-0.8-0.4-1.4-0.9-1.8-1.6s-0.6-1.5-0.6-2.3c0-0.9,0.2-1.6,0.6-2.3c0.4-0.7,1-1.2,1.7-1.6c0.7-0.4,1.5-0.6,2.4-0.6s1.6,0.2,2.3,0.6 c0.7,0.4,1.2,0.9,1.6,1.6C128.4,17.6,128.6,18.4,128.6,19.3z M124.1,16.7c-0.6,0-1.1,0.2-1.5,0.5s-0.6,0.8-0.7,1.3h4.3 c-0.1-0.6-0.3-1-0.7-1.3C125.1,16.8,124.6,16.7,124.1,16.7z M135,23.2c-0.3,0.2-0.6,0.3-0.9,0.4c-0.4,0.1-0.7,0.1-1.1,0.1 c-1,0-1.9-0.3-2.4-0.8c-0.6-0.5-0.9-1.3-0.9-2.4V17h-1.4v-2h1.4v-2.1h2.6V15h2.2v2h-2.2v3.6c0,0.4,0.1,0.7,0.3,0.9 c0.2,0.2,0.5,0.3,0.8,0.3c0.4,0,0.7-0.1,1-0.3L135,23.2z">
              </path>
              <path className="fill-[#2081e2] stroke-white" d="M23.4,1H12.3C6.1,1,1,6.1,1,12.3v11.1c0,6.3,5.1,11.3,11.3,11.3h11.1c6.3,0,11.3-5.1,11.3-11.3V12.3 C34.7,6.1,29.7,1,23.4,1z">
              </path>
              <path className="fill-white" d="M17.3,7.9c0.4-0.3,1-0.3,1.4,0c2.7,2.3,5.8,2.2,7,2.2c0.1,0,0.1,0,0.2,0c0.3,0,0.6,0.1,0.8,0.3s0.3,0.5,0.3,0.8 c-0.1,3.8-0.2,6.5-0.5,8.4c-0.3,2-0.8,3.3-1.5,4.4c-0.7,1-1.7,1.6-2.7,2.2c-0.2,0.1-0.4,0.2-0.5,0.3c-0.9,0.5-1.9,1-3,1.8 c-0.4,0.3-0.9,0.3-1.2,0c-1.2-0.8-2.1-1.4-3-1.8c-0.2-0.1-0.4-0.2-0.5-0.3c-1-0.6-2-1.1-2.7-2.2c-0.7-1-1.2-2.4-1.5-4.4 s-0.4-4.7-0.5-8.4c0-0.3,0.1-0.6,0.3-0.8s0.5-0.3,0.8-0.3c0,0,0.1,0,0.2,0C11.5,10.2,14.6,10.2,17.3,7.9z M18,10.1 c-2.5,1.8-5.2,2.1-6.7,2.2c0.1,3.2,0.2,5.4,0.5,7.1c0.3,1.8,0.7,2.8,1.1,3.4c0.4,0.6,1,1,2,1.6c0.2,0.1,0.3,0.2,0.5,0.3 c0.7,0.4,1.6,0.9,2.6,1.6c1-0.7,1.9-1.2,2.7-1.6c0.2-0.1,0.3-0.2,0.5-0.3c1-0.5,1.6-0.9,2-1.6c0.5-0.6,0.8-1.6,1.1-3.4 c0.2-1.6,0.4-3.9,0.5-7.1C23.2,12.2,20.5,11.9,18,10.1z">
              </path>
            </svg>
          </div>
          <div>
            <svg className="w-[125px] mx-auto" viewBox="0 0 87 25">
              <path className="fill-white" d="M0,10.2v9.4h3.8c4.6,0,5.2,0,6.5-0.4c2.1-0.5,3.8-1.6,4.9-3.1c0.5-0.7,0.9-1.5,1.2-2.3c0.8-2.2,0.7-5.3-0.2-7.5 C15.2,3.5,13,1.7,9.9,1.1C8.8,0.8,8.8,0.8,4.3,0.8L0,0.8V10.2z M8.8,4.2c1.5,0.3,2.6,1,3.4,2c1.3,1.8,1.6,5,0.5,7.1 c-0.8,1.5-2,2.4-3.9,2.9c-0.4,0.1-0.5,0.1-2.8,0.1l-2.4,0v-6.1V4.1l2.3,0C8.2,4.1,8.3,4.2,8.8,4.2z M23.3,6.7 c-0.8,0.1-1.5,0.3-2.2,0.6c-1.1,0.5-1.9,1.4-2.4,2.5c-0.2,0.4-0.3,0.8-0.3,0.8c0,0,0.6,0.2,1.4,0.4c0.8,0.2,1.4,0.4,1.5,0.4 c0.1,0,0.1-0.1,0.2-0.3c0.4-1.1,1.3-1.8,2.6-1.8c0.9,0,1.5,0.2,2,0.7c0.4,0.4,0.6,0.8,0.6,1.7c0,0.6,0,0.6,0,0.6 c0,0-0.4-0.1-0.8-0.2c-1.2-0.3-1.5-0.3-2.5-0.3c-1.2,0-2,0.1-2.8,0.5c-1.3,0.6-1.9,1.6-2.1,3c-0.1,1.3,0.2,2.5,1.1,3.3 c1,0.9,2.4,1.3,4,1.1c1.4-0.2,2.4-0.8,3.1-1.8l0.2-0.3l0,1l0,1h1.6h1.6l0-4.4l0-4.4L30,10.3c-0.5-2-1.8-3.1-4.1-3.6 C25.5,6.7,23.7,6.6,23.3,6.7z M25.2,14.3c0.2,0,0.7,0.2,1,0.3c0.7,0.2,0.7,0.2,0.6,0.7c-0.1,0.9-0.8,1.6-1.7,1.8 c-0.3,0.1-1.2,0.1-1.6,0.1c-0.6-0.1-1.1-0.4-1.3-0.9c-0.1-0.3-0.2-0.8-0.1-1.1c0.1-0.5,0.6-0.8,1.2-1C23.8,14.2,24.7,14.2,25.2,14.3 z M38.9,6.7c-1.2,0.2-2.3,0.9-3.1,1.7c-0.1,0.1-0.2,0.3-0.3,0.3c0,0,0-0.4,0-0.9V6.9h-1.7h-1.7v9v9h1.7h1.7l0-3.5l0-3.5l0.2,0.2 c0.8,1.1,2.3,1.7,4,1.6c2-0.1,3.7-1,4.8-2.5c1.5-2.3,1.5-5.9-0.1-8.2c-0.3-0.4-0.9-1-1.3-1.3c-0.6-0.4-1.4-0.8-2.3-1 C40.6,6.6,39.3,6.6,38.9,6.7z M39.8,9.7c0.9,0.2,1.7,0.9,2.1,1.7c0.3,0.6,0.5,1.5,0.4,2.3c-0.1,1.5-1,2.6-2.3,3 c-0.3,0.1-0.4,0.1-0.9,0.1c-0.7,0-1.1-0.1-1.7-0.4c-0.3-0.2-0.5-0.3-0.8-0.6c-0.3-0.3-0.4-0.4-0.6-0.8c-0.4-0.7-0.5-1.5-0.4-2.3 c0.2-1.7,1.1-2.9,2.7-3.2C38.5,9.6,39.4,9.6,39.8,9.7z M54,6.7c-0.7,0.1-1.5,0.4-2.1,0.9c-0.3,0.2-0.9,0.7-1.1,1l-0.1,0.2V7.8V6.9 H49h-1.7v9v9h1.7h1.7v-3.4V18l0.2,0.2c0.6,0.8,1.5,1.3,2.6,1.5c0.5,0.1,1.8,0.1,2.3,0c1.2-0.2,2.3-0.8,3.1-1.6 c1.3-1.3,1.9-3,1.8-5.2c-0.1-2-0.7-3.6-1.9-4.7c-1.1-1.1-2.5-1.6-4-1.6C54.6,6.6,54.2,6.7,54,6.7z M54.9,9.7 c1.3,0.3,2.1,1.4,2.4,2.8c0.1,0.4,0.1,1.4,0,1.8c-0.3,1.3-1.1,2.2-2.3,2.6c-0.4,0.1-1.3,0.2-1.7,0.1c-1.3-0.3-2.3-1.3-2.6-2.7 c-0.1-0.4-0.1-1.3,0-1.8c0.2-0.8,0.4-1.4,1-1.9c0.5-0.5,1-0.8,1.7-0.9C53.7,9.6,54.6,9.6,54.9,9.7z M67.8,6.7 c-1.5,0.2-2.7,0.8-3.6,1.8c-1,1-1.6,2.3-1.8,3.9c-0.1,0.6,0,1.8,0.1,2.4c0.4,2,1.5,3.6,3.3,4.5c1.9,0.9,4.5,1,6.3,0.1 c0.8-0.4,1.5-1,2-1.6c0.3-0.4,0.8-1.4,0.8-1.6c0-0.1-0.1-0.1-1.4-0.7c-1.7-0.7-1.5-0.6-1.5-0.5c0,0.1-0.2,0.6-0.4,0.9 c-0.3,0.5-0.8,0.9-1.3,1c-0.9,0.3-2,0.2-2.9-0.2c-0.3-0.2-0.5-0.3-0.8-0.6c-0.3-0.3-0.4-0.4-0.6-0.8c-0.2-0.4-0.3-0.6-0.3-1.1l0-0.3 l4.3,0l4.4,0l0.1-0.3c0-0.2,0.1-0.6,0.1-1.2c0-0.8,0-1-0.1-1.3c-0.5-2.3-2-3.7-4.3-4.2c-0.3-0.1-0.6-0.1-1.3-0.1 C68.4,6.7,67.9,6.7,67.8,6.7z M69.6,9.5c0.6,0.2,1.2,0.6,1.5,1.1c0.1,0.2,0.2,0.6,0.2,0.8v0.2h-2.7c-1.5,0-2.7,0-2.7,0 c0,0,0-0.1,0.1-0.2C66.4,9.9,67.9,9.1,69.6,9.5z M82.4,6.7c-0.9,0.2-1.6,0.7-2,1.4l-0.2,0.3V7.7V6.9h-1.7h-1.7v6.4v6.4h1.7h1.7 l0-4.4c0-4.3,0-4.4,0.1-4.6c0.1-0.4,0.3-0.7,0.6-0.9c0.3-0.2,0.6-0.3,0.9-0.3c0.8-0.1,1.5,0.4,1.7,1.1c0.1,0.2,0.1,0.3,0,0.7 c0,0.3,0,0.6-0.1,0.6l0,0.1h1.6h1.6l0-0.2c0.2-0.8,0.2-1.9,0-2.5c-0.4-1.4-1.4-2.3-2.8-2.6C83.6,6.6,82.8,6.6,82.4,6.7z">
              </path>
            </svg>
          </div>
          <div>
            <svg className="w-[125px] mx-auto" viewBox="0 0 157 30">
              <path className="fill-white" d="M26.2,15.4c0-2.3-0.7-4.5-1.9-6.4l4.6-4.6l-3.5-3.5l-4.6,4.6C16.9,3,11.9,3,8,5.5L3.5,0.9L0,4.4L4.6,9 c-2.5,3.9-2.5,8.9,0,12.8L0,26.4l3.5,3.5l4.6-4.6c3.9,2.5,8.9,2.5,12.8,0l4.6,4.6l3.5-3.5l-4.6-4.6C25.5,19.9,26.2,17.7,26.2,15.4z M7.6,15.4c0-2.8,1.7-5.3,4.3-6.4c2.6-1,5.6-0.4,7.5,1.6c1.9,2,2.5,5,1.3,7.5l-4.5-4.5l-3.5,3.5l4.5,4.5c-2.1,1-4.6,0.8-6.5-0.5 C8.8,19.9,7.6,17.7,7.6,15.4z">
              </path>
              <path className="fill-white" d="M51.1,15.5c0,2.8-1.4,5.4-4,6.6l1.4,1.8l-2.8,1.4l-1.9-2.5h-0.1c-4.6,0-7.3-3.4-7.3-7.3c0-3.9,2.7-7.3,7.3-7.3 C48.3,8.3,51.1,11.6,51.1,15.5z M43.7,19.9c2.6,0,4-2,4-4.4c0-2.4-1.4-4.4-4-4.4c-2.6,0-4,2-4,4.4C39.7,17.9,41.1,19.9,43.7,19.9z M56.2,22.6c-2.3,0-3.5-1.4-3.5-3.9v-5.9h3v5.2c0,1.3,0.4,2,1.6,2c1.3,0,1.8-0.8,1.8-2.1v-5.1h3v9.4h-3V21 C58.6,22,57.6,22.6,56.2,22.6z M68.4,22.6c-2.8,0-4.5-2.1-4.5-5c0-2.8,1.7-5,4.5-5c1.4,0,2.4,0.7,3,1.6V13h3v9.4h-3v-1.3 C70.9,22,69.7,22.6,68.4,22.6z M69.3,20.2c1.5,0,2.3-1.1,2.3-2.5c0-1.4-0.8-2.5-2.3-2.5c-1.4,0-2.3,1-2.3,2.5 C67,19.1,67.9,20.2,69.3,20.2z M76.9,12.9h3v1.4c0.5-1.1,1.6-1.6,3.1-1.6c2.3,0,3.5,1.3,3.5,3.9v5.9h-3v-4.9c0-1.6-0.4-2.3-1.7-2.3 c-1.2,0-1.8,0.8-1.8,2.2v4.9h-3L76.9,12.9L76.9,12.9z M93.7,20.1c0.4,0,0.8,0,1-0.1v2.4c-0.4,0.1-1.1,0.2-2,0.2 c-1.4,0-3.4-0.3-3.4-3.5v-3.8h-1.5V13h1.5v-2.8h3V13h2.1v2.4h-2.1v3.1C92.4,19.8,93,20.1,93.7,20.1z M100.3,22.7 c-2.8,0-4.5-1.4-4.5-3.1h3c0,0.7,0.6,1.1,1.6,1.1c0.7,0,1.1-0.3,1.1-0.9c0-0.4-0.2-0.7-0.7-0.8l-2.3-0.6c-1.6-0.4-2.4-1.4-2.4-2.7 c0-1.8,1.6-3,4-3c2.8,0,4.2,1.1,4.2,2.9h-3c0-0.7-0.5-1-1.3-1c-0.7,0-1.1,0.3-1.1,0.8c0,0.4,0.3,0.7,0.8,0.8l2.2,0.6 c1.5,0.4,2.4,1.3,2.4,2.6C104.4,21.4,102.9,22.7,100.3,22.7z M111.2,20.1c0.4,0,0.8,0,1-0.1v2.4c-0.4,0.1-1.1,0.2-2,0.2 c-1.4,0-3.4-0.3-3.4-3.5v-3.8h-1.5V13h1.5v-2.8h3V13h2.1v2.4h-2.1v3.1C109.9,19.8,110.5,20.1,111.2,20.1z M117.8,22.6 c-2.8,0-4.5-2.1-4.5-5c0-2.8,1.7-5,4.5-5c1.4,0,2.4,0.7,3,1.6V13h3v9.4h-3v-1.3C120.3,22,119.1,22.6,117.8,22.6z M118.7,20.2 c1.5,0,2.3-1.1,2.3-2.5c0-1.4-0.8-2.5-2.3-2.5c-1.4,0-2.3,1-2.3,2.5C116.4,19.1,117.3,20.2,118.7,20.2z M126.3,12.9h3v1.4 c0.4-0.9,1.4-1.6,2.7-1.6c1.7,0,2.6,0.8,3,1.7c0.5-1,1.6-1.7,3-1.7c2.7,0,3.4,1.9,3.4,3.9v5.9h-3v-5.3c0-1.3-0.5-1.9-1.4-1.9 c-0.9,0-1.6,0.5-1.6,2.3v4.9h-3V17c0-1.3-0.5-1.8-1.4-1.8c-1,0-1.6,0.5-1.6,2.3v4.9h-3V12.9L126.3,12.9z M143.7,12.9h3v1.4 c0.5-0.9,1.7-1.6,3.1-1.6c2.6,0,4.3,2,4.3,5s-1.8,5-4.4,5c-1.4,0-2.5-0.7-3-1.6v5.3h-3L143.7,12.9z M148.8,20.2c1.3,0,2.2-1,2.2-2.5 c0-1.5-0.9-2.5-2.2-2.5c-1.4,0-2.3,1-2.3,2.5C146.5,19.1,147.5,20.2,148.8,20.2z M154.9,14.9c-0.2,0-0.5-0.1-0.7-0.2 c-0.2-0.1-0.3-0.3-0.4-0.5c-0.1-0.2-0.2-0.4-0.2-0.7c0-0.2,0.1-0.4,0.2-0.7c0.1-0.2,0.3-0.3,0.4-0.5c0.2-0.1,0.4-0.2,0.7-0.2 c0.3,0,0.5,0.1,0.7,0.2c0.2,0.1,0.3,0.3,0.4,0.5c0.1,0.2,0.2,0.4,0.2,0.7c0,0.2-0.1,0.5-0.2,0.7c-0.1,0.2-0.3,0.4-0.4,0.5 C155.4,14.9,155.2,14.9,154.9,14.9z M154.9,14.7c0.2,0,0.4-0.1,0.5-0.2c0.2-0.1,0.3-0.2,0.4-0.4c0.1-0.2,0.1-0.3,0.1-0.5 c0-0.2-0.1-0.4-0.1-0.5c-0.2-0.3-0.5-0.5-0.9-0.5c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.1-0.3,0.2-0.4,0.4c-0.1,0.2-0.1,0.3-0.1,0.5 c0,0.2,0.1,0.4,0.1,0.5c0.1,0.2,0.2,0.3,0.4,0.4C154.5,14.6,154.7,14.7,154.9,14.7z M154.5,12.9h0.5c0.1,0,0.2,0.1,0.3,0.1 c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.1,0.1-0.2,0.2l0.3,0.5h-0.2l-0.3-0.4h-0.3v0.4h-0.2V12.9L154.5,12.9z M155,13.7c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2c0-0.1,0-0.2-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.1h-0.3v0.5H155z">
              </path>
            </svg>
          </div>
          <div>
            <svg className="w-[125px] mx-auto" viewBox="0 0 206 15">
              <path className="fill-white" d="M2.3,2.1v4.2H8v1.9H2.3v6.1H0v-14h9.5V2L2.3,2.1z M22.2,0.2c1.3,0,1.9,0.2,2.5,0.6C25.4,1.5,26,2.5,26,7.2 c0,4.7-0.6,5.7-1.3,6.4c-0.6,0.4-1,0.6-2.5,0.6h-4.2c-1.3,0-1.9-0.2-2.5-0.6c-0.8-0.8-1.3-1.7-1.3-6.4c0-4.7,0.6-5.7,1.3-6.4 c0.6-0.4,1-0.6,2.5-0.6H22.2z M17.1,12.2c0.2,0.2,0.4,0.2,1.1,0.2H22c0.8,0,1,0,1.1-0.2c0.2-0.2,0.6-0.8,0.6-4.9 c0-4-0.4-4.8-0.6-4.9c-0.2-0.2-0.4-0.2-1.1-0.2h-3.8c-0.8,0-1,0-1.1,0.2c-0.2,0.2-0.6,0.8-0.6,4.9C16.7,11.2,16.9,12,17.1,12.2z M43.5,8.4c0,3.6-0.4,4.2-1.1,4.9c-0.8,0.6-1.7,0.8-3.6,0.8h-2.1c-1.9,0-2.8-0.2-3.6-0.8c-0.8-0.8-1.1-1.5-1.1-4.9V0.2h2.3v8.7 c0,2.5,0.2,2.8,0.6,3.1c0.2,0.2,0.6,0.4,2.3,0.4h1.3c1.5,0,1.9,0,2.3-0.4c0.4-0.4,0.4-0.4,0.4-3.1V0.2h2.3L43.5,8.4L43.5,8.4z M61.7,14.3h-2.5c-0.6,0-0.8-0.2-1.1-0.6L52.4,3.2h-0.4v11h-2.3v-14h2.7c0.6,0,0.8,0.2,1.1,0.6l5.5,9.9h0.4V0h2.3L61.7,14.3 L61.7,14.3z M74.6,0.2c1.7,0,2.8,0.2,3.6,1c1,0.8,1.5,2.7,1.5,6.1c0,3.4-0.4,5.1-1.5,6.1c-0.8,0.8-1.7,1-3.6,1h-6.4v-14H74.6z M76.3,2.5c-0.4-0.4-1-0.4-1.7-0.4h-4v10.2h4c1,0,1.3,0,1.7-0.4c0.6-0.6,0.8-1.5,0.8-4.6C77.3,4,76.9,3.1,76.3,2.5z M95.5,14.3H85.4 v-14h10.1v1.9h-7.8v3.8h6.4v1.9h-6.4v4.3h7.8V14.3z M109.4,8.7c-0.2-0.2-0.8-0.2-1.5-0.2h-4.2v5.9h-2.3v-14h8c1,0,1.7,0.2,2.1,0.6 c0.6,0.6,1,1.3,1,3.4c0,2.5-0.8,3.2-2.5,3.4c1.5,0.2,2.1,0.6,2.3,2.7c0,1.9,0.2,3.2,0.2,4h-2.3c-0.2-1-0.2-2.3-0.2-3.8 C109.7,9.3,109.5,8.9,109.4,8.7z M108.6,6.6c0.6,0,0.8-0.2,1-0.2c0.2-0.2,0.4-0.6,0.4-2.1c0-1.5-0.2-1.9-0.4-2.1 c-0.2-0.2-0.4-0.2-1-0.2h-4.9v4.6L108.6,6.6z M128.3,13.7c-0.4,0.4-1.1,0.6-2.3,0.6h-4.9c-1.1,0-1.9-0.2-2.3-0.6 c-0.6-0.6-0.8-1.3-0.8-3.8h2.3c0,1.7,0.2,2.1,0.2,2.3c0.2,0.2,0.4,0.2,1,0.2h4.2c0.6,0,0.8,0,1-0.2c0.2-0.2,0.2-0.8,0.2-1.9 c0-1,0-1.3-0.2-1.5c-0.2-0.2-0.4-0.2-1-0.2l-4.6-0.4c-1.1-0.2-1.7-0.4-2.1-0.8c-0.6-0.6-0.8-1.1-0.8-3.1c0-1.9,0.2-2.7,1-3.4 c0.4-0.4,1.1-0.6,2.3-0.6h4.6c1.1,0,1.9,0.2,2.3,0.6c0.6,0.6,0.8,1.1,0.8,3.8h-2.3c0-1.7-0.2-2.1-0.2-2.1c-0.2-0.2-0.4-0.2-1-0.2 h-3.8c-0.6,0-0.8,0-1,0.2c-0.2,0.2-0.2,0.8-0.2,1.9c0,1,0,1.3,0.2,1.5c0.2,0.2,0.4,0.2,1,0.2l4.6,0.4c1,0,1.7,0.2,2.1,0.8 c0.6,0.6,0.8,1.1,0.8,3.2C129.3,12.2,129.1,12.9,128.3,13.7z M145.2,2.1v4.2h5.7v1.9h-5.7v6.1h-2.3v-14h9.5V2L145.2,2.1z M169.3,8.4 c0,3.6-0.4,4.2-1.1,4.9c-0.8,0.6-1.7,0.8-3.6,0.8h-2.1c-1.9,0-2.8-0.2-3.6-0.8c-0.8-0.8-1.1-1.5-1.1-4.9V0.2h2.3v8.7 c0,2.5,0.2,2.8,0.6,3.1c0.2,0.2,0.6,0.4,2.3,0.4h1.3c1.5,0,1.9,0,2.3-0.4c0.4-0.4,0.4-0.4,0.4-3.1V0.2h2.3L169.3,8.4L169.3,8.4z M187.6,14.3h-2.5c-0.6,0-0.8-0.2-1.1-0.6l-5.7-10.4h-0.4v11h-2.3v-14h2.7c0.6,0,0.8,0.2,1.1,0.6l5.5,9.9h0.4V0h2.3L187.6,14.3 L187.6,14.3z M200.5,0.2c1.7,0,2.8,0.2,3.6,1c1,0.8,1.5,2.7,1.5,6.1c0,3.4-0.4,5.1-1.5,6.1c-0.8,0.8-1.7,1-3.6,1H194v-14H200.5z M202.2,2.5c-0.4-0.4-1-0.4-1.7-0.4h-4v10.2h4c1,0,1.3,0,1.7-0.4c0.6-0.6,0.8-1.5,0.8-4.6C202.9,4,202.7,3.1,202.2,2.5z">
              </path>
            </svg>
          </div>
          <div>
            <svg className="w-[125px] mx-auto" viewBox="0 0 118 25">
              <path className="fill-white" d="M0,0.2h4.2c1.1,0,1.7,0.2,2.3,0.8C6.8,1.3,7,1.8,7,2.3c0,1-0.5,1.6-1.3,1.9c1,0.3,1.6,0.9,1.6,2.1 c0,1.5-1.1,2.4-3.1,2.4H0V0.2z M3.6,3.6c0.7,0,1.1-0.2,1.1-0.7c0-0.5-0.4-0.7-1.1-0.7H2.2v1.5L3.6,3.6L3.6,3.6z M3.9,6.9 C4.6,6.9,5,6.6,5,6.1c0-0.5-0.4-0.8-1.1-0.8H2.1v1.6L3.9,6.9L3.9,6.9z M12.6,0.2h2.3v6.5h3.9v2.1h-6.2V0.2z M23.3,4.5 c0-2.4,1.9-4.5,4.4-4.5c2.5,0,4.4,2,4.4,4.4c0,2.4-1.9,4.4-4.4,4.4C25.2,8.9,23.3,6.9,23.3,4.5z M29.9,4.5c0-1.2-0.8-2.4-2.1-2.4 c-1.2,0-2,1-2,2.3c0,1.2,0.8,2.3,2.1,2.3C29,6.8,29.9,5.7,29.9,4.5z M37.3,4.5C37.3,2,39.1,0,41.6,0c1.7,0,2.7,0.7,3.5,1.8l-1.7,1.3 c-0.5-0.6-1-1-1.8-1c-1.1,0-2,1-2,2.3c0,1.2,0.8,2.3,2,2.3c0.8,0,1.4-0.4,1.8-1l1.7,1.2c-0.8,1.1-1.8,1.9-3.6,1.9 C39.2,8.9,37.3,7.1,37.3,4.5z M50.5,0.2h2.3v3.5l2.8-3.5h2.7l-3.1,3.7l3.2,4.9h-2.7l-2-3.2l-0.8,0.9v2.2h-2.3V0.2z M62.3,4.5 C62.3,2,64.1,0,66.6,0c1.7,0,2.7,0.7,3.5,1.8l-1.7,1.3c-0.5-0.6-1-1-1.8-1c-1.1,0-2,1-2,2.3c0,1.2,0.8,2.3,2,2.3 c0.8,0,1.4-0.4,1.8-1l1.7,1.2c-0.8,1.1-1.8,1.9-3.6,1.9C64.2,8.9,62.3,7.1,62.3,4.5z M75.4,0.2h2.3v3.2h2.9V0.2h2.3v8.5h-2.3V5.5 h-2.9v3.2h-2.3V0.2z M91.4,0.2h2.2l3.5,8.6h-2.4l-0.6-1.5h-3.2l-0.6,1.5h-2.4L91.4,0.2z M93.4,5.4l-0.9-2.4l-0.9,2.4H93.4z M102.1,0.2h2.3v8.5h-2.3V0.2z M110.2,0.2h2.1l3.4,4.5V0.2h2.3v8.5h-2l-3.5-4.6v4.6h-2.3L110.2,0.2L110.2,0.2z M0.1,20.7 c0-2.4,1.7-4.4,4.2-4.4c1.5,0,2.3,0.6,3.2,1.3l-0.6,0.7c-0.8-0.7-1.5-1.2-2.6-1.2c-1.8,0-3.2,1.5-3.2,3.5s1.4,3.6,3.2,3.6 c1.1,0,1.9-0.5,2.6-1.2l0.6,0.6C6.6,24.4,5.6,25,4.2,25C1.8,25.1,0.1,23.1,0.1,20.7z M16.4,16.3h0.8l3.7,8.6h-1l-1-2.3h-4.5l-1,2.3 h-1L16.4,16.3z M18.7,21.8l-1.9-4.3l-1.9,4.3H18.7z M26.8,16.4h3c1.8,0,3,1,3,2.7c0,1.8-1.4,2.7-3.3,2.7h-2v3h-0.9L26.8,16.4 L26.8,16.4L26.8,16.4z M29.8,21.1c1.4,0,2.3-0.8,2.3-1.9c0-1.2-0.9-1.8-2.2-1.8h-2v3.8L29.8,21.1L29.8,21.1L29.8,21.1z M39,16.4h0.9 v8.5H39V16.4z M48.7,17.3H46v-0.9h6.5v0.9h-2.7v7.6h-0.9L48.7,17.3L48.7,17.3z M60.4,16.3h0.8l3.7,8.6h-1l-1-2.3h-4.5l-1,2.3h-1 L60.4,16.3z M62.7,21.8l-1.9-4.3l-1.9,4.3H62.7z M70.8,16.4h0.9v7.6h4.6v0.9h-5.6L70.8,16.4L70.8,16.4z">
              </path>
            </svg>
          </div>
        </div>
      </div>

      <div className="py-16 md:px-32 px-6 bg-[#1868b7] ">
        <div className="md:flex">
          <div className="md:w-6/12 text-white flex flex-col gap-4">
            <h3 className="font-semibold text-2xl">
              Stay in the loop
            </h3>
            <h6 className="text-lg">
              Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.
            </h6>
            <div className="flex gap-4 md:pr-12">
              <input type="text" placeholder='Your email address' className="text-lg p-3 rounded-xl flex-1" />
              <button className="text-xl font-semibold p-3 px-6 bg-[#2081e2] rounded-xl">
                Sign up
              </button>
            </div>
          </div>
          <div className="md:w-6/12 text-white md:mt-0 mt-12">
            <h3 className="font-semibold text-2xl">
              Join the Community
            </h3>

            <div className="flex mt-8 gap-6 md:px-16">
              <div className="h-[54px] w-[54px] rounded-xl bg-[#2081e2] flex justify-center items-center">
                <svg className="h-[20px] w-[30px]" fill="#FFFFFF" viewBox="0 0 18 16">
                  <path d="M.09 13.791c1.992.14 3.728-.344 5.327-1.571-.816-.098-1.527-.311-2.127-.786-.584-.466-1.032-1.047-1.272-1.841h1.48c.008-.033.016-.066.024-.107-.816-.237-1.512-.663-2.032-1.342-.52-.67-.775-1.448-.8-2.3.52.148 1.016.295 1.52.434.016-.033.04-.065.056-.098-.72-.606-1.24-1.334-1.431-2.275a3.92 3.92 0 01.391-2.7c2 2.389 4.511 3.715 7.598 3.936-.096-.778-.104-1.498.16-2.202.912-2.463 3.983-3.249 5.894-1.481.216.196.4.229.632.147.632-.229 1.255-.474 1.903-.72-.248.81-.784 1.408-1.415 1.989.615-.164 1.231-.336 1.839-.5.024.025.048.041.072.066-.464.491-.912 1.007-1.415 1.449-.272.237-.36.458-.376.818-.144 4.01-1.752 7.25-5.175 9.289-3.487 2.07-7.077 1.947-10.612-.025-.064-.04-.12-.09-.24-.18z">
                  </path>
                </svg>
              </div>
              <div className="h-[54px] w-[54px] rounded-xl bg-[#2081e2] flex justify-center items-center">
                <svg className="h-[20px] w-[30px]" fill="#FFFFFF" viewBox="0 0 24 24">
                  <path d="M15.75 2H8.25C4.79875 2 2 4.79875 2 8.25V15.75C2 19.2012 4.79875 22 8.25 22H15.75C19.2012 22 22 19.2012 22 15.75V8.25C22 4.79875 19.2012 2 15.75 2ZM20.125 15.75C20.125 18.1625 18.1625 20.125 15.75 20.125H8.25C5.8375 20.125 3.875 18.1625 3.875 15.75V8.25C3.875 5.8375 5.8375 3.875 8.25 3.875H15.75C18.1625 3.875 20.125 5.8375 20.125 8.25V15.75Z">
                  </path>
                  <path d="M12 7C9.23875 7 7 9.23875 7 12C7 14.7613 9.23875 17 12 17C14.7613 17 17 14.7613 17 12C17 9.23875 14.7613 7 12 7ZM12 15.125C10.2775 15.125 8.875 13.7225 8.875 12C8.875 10.2763 10.2775 8.875 12 8.875C13.7225 8.875 15.125 10.2763 15.125 12C15.125 13.7225 13.7225 15.125 12 15.125Z">
                  </path>
                  <path d="M17.375 7.29124C17.743 7.29124 18.0413 6.99295 18.0413 6.62499C18.0413 6.25703 17.743 5.95874 17.375 5.95874C17.0071 5.95874 16.7088 6.25703 16.7088 6.62499C16.7088 6.99295 17.0071 7.29124 17.375 7.29124Z">
                  </path>
                </svg>
              </div>
              <div className="h-[54px] w-[54px] rounded-xl bg-[#2081e2] flex justify-center items-center">
                <svg className="h-[20px] w-[30px]" fill="#FFFFFF" viewBox="0 0 24 24">
                  <path d="M8.11.5c-.28.002-2.574.067-4.996 1.873 0 0-2.584 4.665-2.584 10.408 0 0 1.507 2.593 5.473 2.719 0 0 .664-.792 1.202-1.477-2.278-.685-3.14-2.108-3.14-2.108s.18.126.502.307c.018 0 .035.019.07.036.055.035.108.054.162.09.448.252.896.45 1.31.611.736.307 1.615.576 2.639.774 1.346.252 2.925.342 4.646.019a12.954 12.954 0 002.603-.774 10.118 10.118 0 002.062-1.063s-.896 1.458-3.247 2.125c.538.666 1.185 1.439 1.185 1.439 3.965-.126 5.473-2.72 5.473-2.7 0-5.746-2.584-10.409-2.584-10.409C16.32.446 13.861.5 13.861.5l-.251.288c3.05.918 4.468 2.27 4.468 2.27a14.856 14.856 0 00-5.4-1.711 15.048 15.048 0 00-3.626.036c-.107 0-.197.019-.306.035-.628.072-2.153.288-4.073 1.135-.663.288-1.059.505-1.059.505S5.088 1.635 8.317.717L8.137.5h-.028zm-.457 6.645c1.022 0 1.849.882 1.83 1.981 0 1.1-.808 1.982-1.83 1.982-1.005 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981zm6.55 0c1.004 0 1.83.882 1.83 1.981 0 1.1-.809 1.982-1.83 1.982-1.006 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981z"></path>
                </svg>
              </div>
              <div className="h-[54px] w-[54px] rounded-xl bg-[#2081e2] flex justify-center items-center">
                <svg className="h-[20px] w-[30px]" fill="#FFFFFF" viewBox="0 0 24 24">
                  <path d="m21.325 9.308c-.758 0-1.425.319-1.916.816-1.805-1.268-4.239-2.084-6.936-2.171l1.401-6.406 4.461 1.016c0 1.108.89 2.013 1.982 2.013 1.113 0 2.008-.929 2.008-2.038s-.889-2.038-2.007-2.038c-.779 0-1.451.477-1.786 1.129l-4.927-1.108c-.248-.067-.491.113-.557.365l-1.538 7.062c-2.676.113-5.084.928-6.895 2.197-.491-.518-1.184-.837-1.942-.837-2.812 0-3.733 3.829-1.158 5.138-.091.405-.132.837-.132 1.268 0 4.301 4.775 7.786 10.638 7.786 5.888 0 10.663-3.485 10.663-7.786 0-.431-.045-.883-.156-1.289 2.523-1.314 1.594-5.115-1.203-5.117zm-15.724 5.41c0-1.129.89-2.038 2.008-2.038 1.092 0 1.983.903 1.983 2.038 0 1.109-.89 2.013-1.983 2.013-1.113.005-2.008-.904-2.008-2.013zm10.839 4.798c-1.841 1.868-7.036 1.868-8.878 0-.203-.18-.203-.498 0-.703.177-.18.491-.18.668 0 1.406 1.463 6.07 1.488 7.537 0 .177-.18.491-.18.668 0 .207.206.207.524.005.703zm-.041-2.781c-1.092 0-1.982-.903-1.982-2.011 0-1.129.89-2.038 1.982-2.038 1.113 0 2.008.903 2.008 2.038-.005 1.103-.895 2.011-2.008 2.011z"></path>
                </svg>
              </div>

              <div className="h-[54px] w-[54px] rounded-xl bg-[#2081e2] flex justify-center items-center">
                <svg className="h-[20px] w-[30px]" fill="#FFFFFF" viewBox="0 0 20 18">
                  <path d="M9.99433 3.33325C9.99433 3.33325 4.26441 3.33326 2.82628 3.70695C2.05625 3.9221 1.4222 4.55617 1.20704 5.33752C0.833352 6.77565 0.833344 9.75391 0.833344 9.75391C0.833344 9.75391 0.833352 12.7435 1.20704 14.159C1.4222 14.9403 2.04493 15.563 2.82628 15.7782C4.27574 16.1632 9.99433 16.1632 9.99433 16.1632C9.99433 16.1632 15.7356 16.1632 17.1737 15.7895C17.9551 15.5744 18.5778 14.963 18.7816 14.1703C19.1666 12.7435 19.1666 9.76524 19.1666 9.76524C19.1666 9.76524 19.178 6.77565 18.7816 5.33752C18.5778 4.55617 17.9551 3.93344 17.1737 3.72961C15.7356 3.33327 9.99433 3.33325 9.99433 3.33325ZM8.17116 7.00225L12.9386 9.75391L8.17116 12.4942V7.00225Z"></path>
                </svg>
              </div>

              <div className="h-[54px] w-[54px] rounded-xl bg-[#2081e2] flex justify-center items-center">
                <svg className="h-[20px] w-[30px]" fill="#FFFFFF" viewBox="0 0 2859 3333">
                  <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"></path>
                </svg>
              </div>


            </div>
          </div>
        </div>

        <div className="py-12 mt-12 border-t border-slate-50">
          <div className="flex md:flex-row flex-col gap-12 text-white">
            <div className="md:w-5/12">
              <img className="w-[44px] h-[44px]  mb-6" src={process.env.PUBLIC_URL + "media/opensea-white.svg"} alt="" />
              <a className="font-bold text-2xl" href="" rel="nofollow noopener" target="_blank">OpenSea</a>
              <div className="mt-6 md:text-xl md:pr-24">
                The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
              </div>
            </div>
            <div className='flex-1'>
              <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-8">
                    Marketplace
                  </h4>
                  <h5 className="mt-3">
                    All NFTs
                  </h5>
                  <h5 className="mt-3">
                    Solane NFTs
                  </h5>
                  <h5 className="mt-3">
                    Art
                  </h5>
                  <h5 className="mt-3">
                    Collectibles
                  </h5>
                  <h5 className="mt-3">
                    Domain Names
                  </h5>
                  <h5 className="mt-3">
                    Music
                  </h5>
                  <h5 className="mt-3">
                    Photography
                  </h5>
                  <h5 className="mt-3">
                    Sports
                  </h5>
                  <h5 className="mt-3">
                    Trading Cards
                  </h5>
                  <h5 className="mt-3">
                    Utility
                  </h5>
                  <h5 className="mt-3">
                    Virtual Worlds
                  </h5>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-8">
                    My Account
                  </h4>
                  <h5 className="mt-3">
                    Profile
                  </h5>
                  <h5 className="mt-3">
                    Favorites
                  </h5>
                  <h5 className="mt-3">
                    Watchlist
                  </h5>
                  <h5 className="mt-3">
                    My Collections
                  </h5>
                  <h5 className="mt-3">
                    Settings
                  </h5>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-8">
                    Resources
                  </h4>
                  <h5 className="mt-3">
                    Help Center
                  </h5>
                  <h5 className="mt-3">
                    Platform Status
                  </h5>
                  <h5 className="mt-3">
                    Partners
                  </h5>
                  <h5 className="mt-3">
                    Gas-Free <br />
                    Marketplace
                  </h5>
                  <h5 className="mt-3">
                    Taxes
                  </h5>
                  <h5 className="mt-3">
                    Blog
                  </h5>
                  <h5 className="mt-3">
                    Docs
                  </h5>
                  <h5 className="mt-3">
                    Newsletter
                  </h5>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-8">
                    Company
                  </h4>
                  <h5 className="mt-3">
                    About
                  </h5>
                  <h5 className="mt-3">
                    Careers
                  </h5>
                  <h5 className="mt-3">
                    Ventures
                  </h5>
                  <h5 className="mt-3">
                    Grants
                  </h5>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
