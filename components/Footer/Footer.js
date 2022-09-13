import { useRef } from "react";
import { gsap } from "gsap";
import Logo from "./assets/Logo.svg";
import Bitcoin from "./assets/Bitcoin.svg";
import MasterCard from "./assets/Mastercard.svg";
import Visa from "./assets/Visa.svg";
import Facebook from "./assets/facebook.svg";
import Instagram from "./assets/instagram.svg";
import LinkedIn from "./assets/linkedin.svg";
import Youtube from "./assets/youtube.svg";
import Twitter from "./assets/twitter.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-hero py-10">
            <section className="grid grid-cols-1 lg:grid-cols-4 gap-1 lg:pr-4">

                <Link href={'/'}>
                    <a className="flex mx-auto lg:mx-0 xl:pl-24 xl:pr-16  text-white">
                        <div className="h-fit">
                            <Image src={Logo} width={40} height={40} />
                        </div>
                        <p className="text-[18px] ml-4 pt-2"> CRAPPO </p>
                    </a>
                </Link>

                <section className="text-center mt-6 md:mt-10 lg:mt-0">
                    <h4 className="text-xl font-medium text-white" > Quick Link </h4>
                    <ul className="font-normal text-base pt-3 text-[#F2F2F2]">
                        <li className=""> Home </li>
                        <li className="pt-3"> Products </li>
                        <li className="pt-3"> About </li>
                        <li className="pt-3"> Features </li>
                        <li className="pt-3"> Contact </li>
                    </ul>
                </section>

                <section className="text-center mt-6 md:mt-10 lg:mt-0">
                    <h4 className="text-xl font-medium text-white" > Resources </h4>
                    <ul className="font-normal text-base pt-3 text-[#F2F2F2]">
                        <li className=""> Download Whitepaper </li>
                        <li className="pt-3"> Smart Token </li>
                        <li className="pt-3"> Blockchain Explorer </li>
                        <li className="pt-3"> Crypto API </li>
                        <li className="pt-3"> Interest </li>
                    </ul>
                </section>

                <section className="mt-6 md:mt-10 text-center lg:text-left lg:mt-0">
                    <h4 className="text-white font-medium text-xl sm:text-2xl lg:text-2xl xl:text-3xl" > We accept following payment systems </h4>
                    <div className="mt-4 flex justify-center lg:justify-start">
                        <div className="w-fit">
                            <Image src={Visa} width={60} height={40} />
                        </div>
                        <div className="w-fit ml-3">
                            <Image src={MasterCard} width={60} height={40} />
                        </div>
                        <div className="w-fit ml-3">
                            <Image src={Bitcoin} width={60} height={40} />
                        </div>
                    </div>
                </section>

            </section>

            <section className="mt-8 flex flex-col justify-center lg:flex-row lg:px-16 xl:pl-24 xl:pr-16 sm:justify-between text-white">
                <p className="text-center"> &copy;2021 CRAPPO. All rights reserved </p>
                <div className="mt-5 mx-auto lg:mx-0 lg:mt-0 flex">
                    <div className="">
                        <Image src={Facebook} width={20} height={20} alt="facebook-icon" />
                    </div>
                    <div className="ml-6">
                        <Image src={Instagram} width={20} height={20} alt="instagram-icon" />
                    </div>
                    <div className="ml-6">
                        <Image src={Youtube} width={20} height={20} alt="youtube-icon" />
                    </div>
                    <div className="ml-6">
                        <Image src={Twitter} width={20} height={20} alt="twitter-icon" />
                    </div>
                    <div className="ml-6">
                        <Image src={LinkedIn} width={20} height={20} alt="linkedin-icon" />
                    </div>
                </div>
            </section>

        </footer>
    );
}
 
export default Footer;