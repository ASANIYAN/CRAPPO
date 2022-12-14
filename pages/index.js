import Head from 'next/head';
import Image from 'next/image';
import styles from '/styles/Home.module.css';
import ArrowRight from "/public/ArrowRight.svg";
import ArrowRightCoin from "/public/ArrowRight_coin.svg";
import HeroImg from "/public/hero.svg";
import IconData from "/public/icon_data.svg";
import IconEarth from "/public/earth.svg";
import IconPerson from "/public/profile.svg";
import Why from "/public/Why.svg";
import Bitcoin from "/public/logo_bitcoin.svg";
import Ethereum from "/public/Ethereum.svg";
import Litecoin from "/public/Litecoin.svg";
import Chart from "/public/Chart.svg";
import Statistic from "/public/Statistic.svg";
import Table from "/public/Table.svg";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';



const CoinCard = ({ name, alias, content, image }) => {

  const [hover, setHover] = useState(false);

  
  const list = useRef(null);
  
  useEffect(() => {
    gsap.to(list.current, { 
      x: '0', 
      ease: 'power3', 
      duration: 0.5, 
      delay:1,
      scrollTrigger: {
        trigger: list.current,
      }
    });
  }, []);


  return (

      <div 
      ref={list}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={ hover ? "bg-[#2B076E] rounded-[16px] max-w-[340px] mt-12 md:mt-0 pb-10 pt-5 text-center cursor-pointer mx-auto" 
      : "bg-transparent max-w-[340px] mt-12 md:mt-0 pb-10 pt-5 text-center cursor-pointer mx-auto translate-x-[100vw]" }
      >
        
        <div className="pt-6 mx-auto w-fit">
          <Image src={image} width={65} height={65} alt="bitcoin" />
        </div>
        <div className="flex justify-center">
        <p
        className={hover ? "text-white font-bold text-[32px] pt-6" : "text-hero font-bold text-[32px] pt-6" } 
        > { name } </p>
        <span 
        className={hover ? "text-white opacity-70 text-lg pt-9 pl-2" : "text-[#BDBDBD] text-lg pt-9 pl-2"} 
        > 
          { alias } 
        </span> 

        </div>
        
        <p 
        className={hover ? "text-white pt-3 font-normal text-[1rem]  px-2" : "text-[#828282] pt-3 font-normal text-[1rem]  px-2"} 
        >
          { content }
        </p>
        
        { hover ?
          <button
          className='font-normal sm:font-medium flex justify-center align-middle mx-auto text-lg mt-6 lg:mt-8 
        bg-[#3671E9] rounded-[32px] sm:rounded-[32px] px-3 py-2 sm:px-6 sm:py-3 text-white'
          >
            <span className='pr-4 pt-0.5 sm:pr-5'>
              Start Mining
            </span>
            <Image src={ArrowRight} alt="Arrow-Right" width={32} height={32} />
          </button>
          :
          <div className='w-fit mx-auto mt-6 lg:mt-8'>
            <Image src={ArrowRightCoin} width={60} height={60} alt="Arrow-Right-coin"/>
          </div>
        }
      </div>

  )
};


export default function Home() {
  
  gsap.registerPlugin(ScrollTrigger);

  const CoinList = [
    { name: "Bitcoin", alias: "BTC", content: "Digital currency in which a record of transactions is maintained.", image: Bitcoin},
    { name: "Ethereum", alias: "ETH", content: "Blockchain technology to create and run decentralized digital applications.", image: Ethereum},
    { name: "Litecoin", alias: "LTC", content: "Cryptocurrency that enables instant payments to anyone in the world.", image: Litecoin}
  ];


  const heroLeft = useRef(null);
  const heroRight = useRef(null);
  const figuresRef = useRef(null);
  const whyLeft = useRef(null);
  const whyRight = useRef(null);
  const earn = useRef(null);
  const rate = useRef(null);
  const trade = useRef(null);
  const market = useRef(null);
  const invest = useRef(null);
  const bitcoinChart = useRef(null);
  const statistics = useRef(null);
  const grow = useRef(null);
  const mining = useRef(null);
  

  useEffect(() => {
    gsap.to(heroLeft.current, { 
      x: '0', 
      ease: 'circ', 
      duration:1, 
      delay:1,
      scrollTrigger: {
        trigger: heroLeft.current,
      }
    })

    gsap.to(heroRight.current, { 
      x: '0', 
      ease: 'circ', 
      duration:1, 
      delay:1,
      scrollTrigger: {
        trigger: heroRight.current,
      }
    })
  }, []);

  useEffect(() => {
    gsap.fromTo(figuresRef.current, {
      opacity: 0,
      scale: 0,
    }, {
      duration: 1,
      opacity: 1,
      scale: 1,
      scrollTrigger: figuresRef.current,
    },)
  })

  useEffect(() => {
    gsap.fromTo(rate.current, {
      opacity: 0,
      scale: 0,
    }, {
      duration: 1,
      opacity: 1,
      scale: 1,
      scrollTrigger: rate.current,
      start: 'top center+=100',
    },)
  })

  useEffect(() => {

  }, [])

  useEffect(() => {

    gsap.to(whyLeft.current, { 
      x: '0', 
      ease: 'power4', 
      duration: 1, 
      delay:1,
      scrollTrigger: {
        trigger: whyLeft.current,
        start: 'top center+=100',
      }
    });

    gsap.to(whyRight.current, { 
      x: '0', 
      ease: 'power4', 
      duration: 1, 
      delay:1,
      scrollTrigger: {
        trigger: whyRight.current,
        start: 'top center+=100',
      }
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(earn.current, {
      opacity: 0,
      scale: 0,
    }, {
      duration: 1,
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: earn.current,
      } 
    },)
  }, []);

  useEffect(() => {
    gsap.to(trade.current, { 
      x: '0', 
      ease: 'power3', 
      duration: 1, 
      delay:1,
      scrollTrigger: {
        trigger: trade.current,
      }
    });
  }, []);


  useEffect(() => {
    gsap.fromTo(market.current, {
      opacity: 0,
      scale: 0,
    }, {
      duration: 1,
      opacity: 1,
      scale: 1,
      scrollTrigger: market.current,
    },)
  })

  useEffect(() => {
    gsap.fromTo(invest.current, {
      opacity: 0,
      scale: 0,
    }, {
      duration: 1,
      opacity: 1,
      scale: 1,
      scrollTrigger: invest.current,
    })
  }, [])

  useEffect(() => {
    gsap.to(bitcoinChart.current, { 
      x: '0', 
      ease: 'power2', 
      duration:1, 
      delay:1,
      scrollTrigger: {
        trigger: bitcoinChart.current,
      }
    })
  }, [])

  useEffect(() => {
    gsap.to(statistics.current, { 
      x: '0', 
      ease: 'power4', 
      duration:1, 
      delay:1,
      scrollTrigger: {
        trigger: statistics.current,
      }
    })
  }, [])

  useEffect(() => {
    gsap.to(grow.current, { 
      x: '0', 
      ease: 'power4', 
      duration:1, 
      delay:1,
      scrollTrigger: {
        trigger: grow.current,
      }
    })
  }, [])

  useEffect(() => {
    gsap.fromTo(mining.current, {
      opacity: 0,
      scale: 0,
    }, {
      duration: 1,
      opacity: 1,
      scale: 1,
      scrollTrigger: mining.current,
    },)
  })

  return (
    <main className="overflow-x-hidden">
      <section className={`bg-hero`}>
        
        <section 
        className=' text-white pt-6 lg:pt-10 ml-3 sm:ml-32 lg:ml-16 xl:ml-24 lg:grid lg:grid-cols-2 lg:gap-4'
        >
          <section ref={heroLeft} className='-translate-x-[100vw]'>
            
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

          <section ref={heroRight} className='mt-6 lg:-mt-16 sm:mr-10  md:mr-16 lg:mr-10 xl:mr-20 translate-x-[100vw]'>
            <div className="">
              <Image src={HeroImg} width={700} height={700} alt="hero" />
            </div>
          </section>

        </section>

      </section>

      <section className='bg-hero pl-3 sm:pl-32 lg:pl-16 xl:pl-24'>

        <section ref={figuresRef} className='text-white grid grid-cols-1 pt-24 lg:grid-cols-3 lg:gap-20 w-fit mx-auto lg:w-full'>

          <section className="flex ml-12 lg:mx-0">
            <div>
              <Image src={IconData} width={70} height={70}  alt="icon-data"/>
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
            <div className='ml-6 lg:ml-0'>
              <Image src={IconPerson} width={70} height={70} alt="icon-person" />
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
            <div className='ml-4 lg:ml-0'>
              <Image src={IconEarth} width={70} height={70} alt="icon-earth" />
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
          
          <div ref={whyLeft} className='mt-6 sm:mr-10 md:mr-16 lg:mr-0 sm:-mt-28 lg:mt-0 order-last lg:order-first first translate-x-[100vw]'>
            <Image src={Why} width={700} height={700} alt="why" />
          </div>

          <section ref={whyRight} className="pt-20 lg:text-left lg:pt-44 lg:mr-2 xl:mr-16 -translate-x-[100vw]">
            
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

      <section className="bg-hero">
        
        <section ref={earn} className='pb-96 md:pb-72 lg:pb-60 pt-10'>
          <h2 className='text-center text-white font-bold text-4xl lg:text-[40px]'>
            Check how much you can earn
          </h2>
          
          <p className="text-center font-normal text-[#E0E0E0] pt-3 max-w-[500px] pb-20 mx-auto px-3 sm:px-2 md:px-0">
            Let us check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.
          </p>
        
        </section>

      </section>

      <section className="bg-white px-4 lg:px-0">
        <section
        ref={rate}
        className='max-w-[58.875rem] pb-16 mx-auto rounded-2xl bg-white 
        drop-shadow-[0_20px_200px_rgba(57,23,119,0.05)] shadow-2xl -translate-y-[45%]'
        > 
          <section className="bg-[#FBFCFE] pb-12 rounded-t-2xl">
            
            <form className='flex flex-col md:flex-row justify-between pt-10'>  
              
              <div className="md:w-1/2 px-10">
                <input type="text" placeholder='Enter your hash rate' 
                className='font-normal text-xl text-hero outline-none bg-[#FBFCFE] placeholder:font-normal placeholder:text-xl 
                placeholder:text-hero border-b border-b-[#E0E0E0] w-full h-fit pb-1.5 mt-10'
                />
              </div>
              
              <div className='w-full px-10 md:w-[30%]  md:pl-3 md:pr-10'>
                <select name="currency" className='w-full bg-[#FBFCFE] border-b border-b-[#E0E0E0] pb-1.5 mt-[49px]' id="currency">
                  <option value="TH">TH/s</option>
                  <option value="KH">KH/s</option>
                  <option value="MH">MH/s</option>
                  <option value="GH">GH/s</option>
                </select>
              </div>
              
              <div className="mx-auto">
                <button className="bg-btnBlue text-white py-4 px-7 font-medium text-lg rounded-[32px] mt-6 mr-14 ">
                  Calculate
                </button>
              </div>

            </form>
          </section>

          <section className="pl-10 mt-16">
            
            <p className="text-[1rem] text-[#3671E9] font-medium">
              ESTIMATED 24 HOUR REVENUE:
            </p>

            <p className="text-hero font-bold text-[2rem] pt-3 ">
              0.055 130 59 ETH 
              <span className='text-[#3671E9] pl-1.5'>
              &#40;$1275&#41;
              </span>
            </p>
            <small className="text-[#828282] text-[1rem] pr-4 sm:pr-0">
              Revenue will change based on mining difficulty and Ethereum price.
            </small>

          </section>

        </section>
      </section>

      <section className="-mt-36 mb-10 md:-mt-16 lg:-mt-10 bg-white">
        
        <h2 ref={trade} 
        className='text-[#0D0D2B] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] text-center mx-auto 
        max-w-[750px] -translate-x-[100vw]'>
          Trade securely and market the high growth cryptocurrencies.
        </h2>

        <section  
        className='mx-3 lg:ml-16 xl:ml-24 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        { CoinList.map((coin, index) => (
          <CoinCard key={index} name={coin.name} alias={coin.alias} content={coin.content} image={coin.image} />
          ))}
        </section>


      </section>

      <section className="bg-[#2B076E] mt-4 ">

        <h2 
        ref={market}
        className='text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] text-center mx-auto max-w-[750px] pt-10'
        >
          Market sentiments, portfolio, and run the infrastructure of your choice 
        </h2>

        <section className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 sm:ml-32 lg:ml-16 xl:ml-24 mt-16'>

          <section ref={invest} className="lg:mt-24">
            
            <h3 className='text-white font-bold text-2xl text-center sm:text-left sm:text-[2rem]'>
              Invest Smart
            </h3>
            <p className="text-[#E0E0E0] font-normal pt-4 sm:pr-20 lg:pr-0 lg:max-w-[400px] text-center sm:text-left" >Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.</p>
            <button
              className='font-medium sm:font-medium flex justify-center align-middle text-white text-lg mt-6 lg:mt-8 
              bg-[#3671E9] rounded-[32px] sm:rounded-[32px] px-4 py-2 sm:px-5 sm:py-3 mx-auto sm:mx-0'
              >
                Learn More
              </button>

          </section>

          <section>
              <div ref={bitcoinChart} className="translate-x-[100vw]">
                <Image src={Chart} width={500} height={500} alt="bitcoin-chart" />
              </div>
          </section>

        </section> 

        <section ref={statistics} className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 sm:ml-32 lg:ml-0 mt-10 translate-x-[100vw]'>

          <section className='order-last lg:order-first'>
            <div>
              <Image src={Statistic} width={600} height={600} alt="statistics-chart" />
            </div>
          </section>

          <section className="lg:mt-24">
            
            <h3 className='text-white font-bold text-2xl text-center sm:text-left sm:text-[2rem]'>
              Detailed Statistics
            </h3>
            <p className="text-[#E0E0E0] font-normal pt-4 sm:pr-20 lg:pr-0 lg:max-w-[400px] text-center sm:text-left" >
              View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.
              </p>
            <button
              className='font-medium sm:font-medium flex justify-center align-middle text-white text-lg mt-6 lg:mt-8 
              bg-[#3671E9] rounded-[32px] sm:rounded-[32px] px-4 py-2 sm:px-5 sm:py-3 mx-auto sm:mx-0'
              >
                Learn More
              </button>

          </section>

        </section>

        
        <section ref={grow} className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 sm:ml-32 lg:ml-16 xl:ml-24 mt-16 -translate-x-[100vw]'>

          <section className="lg:mt-24">
            
            <h3 className='text-white font-bold text-2xl text-center sm:text-left sm:text-[2rem]'>
              Grow your profit and track your investments
            </h3>
            <p className="text-[#E0E0E0] text-[1rem] font-normal pt-4 sm:pr-20 lg:pr-0 lg:max-w-[400px] text-center sm:text-left" 
            >
              Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.
            </p>
            <button
              className='font-medium sm:font-medium flex justify-center align-middle text-white text-lg mt-6 lg:mt-8 
              bg-[#3671E9] rounded-[32px] sm:rounded-[32px] px-4 py-2 sm:px-5 sm:py-3 mx-auto sm:mx-0'
              >
                Learn More
              </button>

          </section>

          <section>
              <div className="">
                <Image src={Table} width={500} height={500} alt="chart" />
              </div>
          </section>

        </section>  

      </section>

      <section className={`${styles.newsletter} py-10 px-6 lg:px-16 xl:pl-24 xl:pr-16`}>
        <div ref={mining} className={`${styles.newsletterBox} flex flex-col lg:flex-row justify-between  rounded-[16px] mx-auto text-white py-10 px-8`} >
          
          <div>
            <h3 className="font-bold text-2xl text-center lg:text-left sm:text-[2rem]" > Start mining now </h3>
            <p className="font-normal text-[1rem] text-center lg:text-left lg:max-w-[400px] mx-auto lg:mx-0 pt-2.5" 
            > 
              Join now with CRAPPO to get the latest news and start mining now
            </p>
          </div>

          <div className='lg:w-1/2'>
            <form className='flex flex-col lg:flex-row'>

              <div className='w-full'>
                <input type="text" placeholder='Enter your email' 
                className='border-b bg-transparent w-full text-white pb-1.5 outline-none placeholder:font-normal  
                placeholder:text-[1rem] placeholder:text-white font-normal text-[1rem] placeholder:text-left 
                sm:placeholder:text-center lg:placeholder:text-left mt-6 md:mt-8'
                style={{borderBottom: "1px solid rgba(255, 255, 255, 0.4)"}}
                />
              </div>

              <div className="w-fit mx-auto lg:ml-12">
                <button className="bg-white text-hero py-4 px-7 font-medium text-lg rounded-[32px] mt-6 lg:mr-14 ">
                  Subscribe
                </button>
              </div>

            </form>
          </div>


        </div>
      </section>

    </main>
  )
}
