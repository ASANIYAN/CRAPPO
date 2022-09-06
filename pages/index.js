import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ArrowRight from "../public/ArrowRight.svg";
import HeroImg from "../public/hero.svg";
import IconData from "../public/icon-data.svg";
import IconEarth from "../public/icon-earth.svg";
import IconPerson from "../public/icon-person.svg";
import Why from "../public/Why.svg";

export default function Home() {
  return (
    <main className="">
      <section className="bg-hero">
        
        <section 
        className=' text-white pt-6 lg:pt-10 ml-3 sm:ml-32 lg:ml-16 xl:ml-24 lg:grid lg:grid-cols-2 lg:gap-4'
        >
          <section className=''>
            
            <section 
            className={`${styles.save} w-[19.75rem] sm:w-[22.6rem] rounded-[32px]`}
            style={{background: "rgba(255, 255, 255, 0.1)"}}
            >
              <p className='py-1 md:py-2 text-[12px] sm:text-[1rem]'>
                <span className="bg-white text-[#0D0D2B] font-medium px-4 py-1 md:py-2 mr-4 rounded-[32px]">75% SAVE</span>
                For the Black Friday weekend 
              </p>
            </section>
            
            <section className='max-w-[500px]'>
              <h1 className='pt-8 font-medium lg:font-bold text-4xl lg:text-5xl'>
                Fastest &amp; secure platform to invest in crypto
              </h1>
              <p className="font-light text-[1rem] w-fit mt-7"> 
                Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.
              </p>
              <button
              className='font-normal sm:font-medium flex justify-center align-middle text-lg mt-6 lg:mt-8 
              bg-[#3671E9] rounded-[32px] sm:rounded-[32px] px-4 py-2 sm:px-5 sm:py-3'
              >
                <span className='pr-4 pt-1.5 sm:pr-5'>
                  Try for FREE
                </span>
                <Image src={ArrowRight} alt="Arrow-Right" width={40} height={40} />
              </button>
            </section>

          </section>

          <section className='mt-6 lg:-mt-16 sm:mr-10  md:mr-16 lg:mr-10 xl:mr-20'>
            <div className="">
              <Image src={HeroImg} width={700} height={700} />
            </div>
          </section>

        </section>

      </section>

      <section className='bg-hero pl-3 sm:pl-32 lg:pl-16 xl:pl-24'>

        <section className='text-white grid grid-cols-1 pt-24 lg:grid-cols-3 lg:gap-20 w-fit mx-auto lg:w-full'>

          <section className="flex mx-auto lg:mx-0">
            <div>
              <Image src={IconData} width={70} height={70} />
            </div>
            
            <div className="ml-5 pt-1 sm:pt-3 lg:pt-3">
              <p className='font-semibold text-3xl md:font-bold lg:text-[40px]'>
                $30B
              </p>
              <p className="font-light text-[#E0E0E0] text-[14px]  lg:text-[1rem] mt-2 lg:mt-4">
                Digital Currency Exchanged
              </p>
            </div>
          </section>

          <section className="flex mt-4 md:mt-8 lg:mt-0 mx-auto lg:mx-0">
            <div className='-ml-6 lg:ml-0'>
              <Image src={IconPerson} width={70} height={70} />
            </div>
            
            <div className="ml-5 pt-1 sm:pt-3 lg:pt-3">
              <p className='font-semibold text-3xl md:font-bold lg:text-[40px]'>
                10M+
              </p>
              <p className="font-light text-[#E0E0E0] text-[14px]  lg:text-[1rem] mt-2 lg:mt-4">
                Trusted Wallets Investor
              </p>
            </div>
          </section>

          <section className="flex mt-4 md:mt-8 lg:mt-0 mx-auto lg:mx-0">
            <div className='-ml-10 lg:ml-0'>
              <Image src={IconEarth} width={70} height={70} />
            </div>
            
            <div className="ml-5 pt-1 sm:pt-3 lg:pt-3">
              <p className='font-semibold text-3xl md:font-bold lg:text-[40px]'>
                195
              </p>
              <p className="font-light text-[#E0E0E0] text-[14px]  lg:text-[1rem] mt-2 lg:mt-4">
                Countries Supported
              </p>
            </div>
          </section>

        </section>

      </section>

      <section className='bg-hero text-white'>
        
        <section className='grid grid-cols-1 lg:grid-cols-2 lg:gap-16 pt-6 lg:pt-10 ml-3 sm:ml-32 lg:ml-16 xl:ml-24'>
          
          <div className='mt-6 sm:mr-10 md:mr-16 lg:mr-0 sm:-mt-28 lg:mt-0 order-last lg:order-first'>
            <Image src={Why} width={700} height={700} />
          </div>

          <section className="pt-20 lg:text-left lg:pt-44 lg:mr-2 xl:mr-16">
            
            <h2 className="font-bold text-4xl lg:text-[40px]">
              Why you should choose CRAPPO
            </h2>
            
            <p className='font-normal sm:pr-32 text-lg text-[#E0E0E0] mt-6 lg:pr-10 xl:pr-36'>
              Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.
            </p>

            <button className="bg-btnBlue py-4 px-6 font-medium text-[18px] rounded-[32px] mt-6">
              Learn More
            </button>

          </section>

        </section>
      </section>

    </main>
  )
}
