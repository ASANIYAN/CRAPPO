import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import Logo from "./assets/Logo.svg";

const Navbar = () => {

    const collapseBarRef = useRef(null);
    const NavRef = useRef(null);
    const NavMobileRef = useRef(null);
    const barRef = useRef(null);

    // useEffect(() => {
    //     gsap.to()
    // },)

    useEffect(() => {
        gsap.to(NavRef.current, {
            duration: 2,
            autoAlpha: 1,
            ease: 'none',
            delay: 1,
        }, );
        gsap.to(barRef.current, {
            duration: 2,
            autoAlpha: 1,
            ease: 'none',
            delay: 1,
        })
    }, []);

    function openCollapseBar() {
        const nav_mobile_tl = gsap.timeline({defaults: {duration:1}})  
        nav_mobile_tl
        .to(collapseBarRef.current, {
            duration: 1,
            ease: "power4",
            x: '0',
        })
        .to(NavMobileRef.current, {
            // duration: 2,
            autoAlpha: 1,
            ease: 'none',
            delay: 1,  
        })
    }

    function closeCollapseBar() {
        gsap.to(collapseBarRef.current, {
            duration: 2,
            ease: "power4",
            x: '-100vw',

        })
    }

    return (
        <nav className="w-full bg-hero text-white overflow-x-hidden">
            <section 
            ref={collapseBarRef} 
            className="lg:hidden absolute w-[100%] bg-[rgb(37,37,64)]  h-full z-10 translate-x-[-100vw] overflow-y-hidden"
            >
                <div className="w-full flex justify-end">
                    <i
                    ref={barRef} 
                    className="fa-solid fa-xmark mt-8 mr-8 text-2xl cursor-pointer opacity-0"
                    onClick={closeCollapseBar}
                    ></i>
                </div>

                <div ref={NavMobileRef} className="w-full mt-20 text-[1.5rem] opacity-0">
                    
                    <ul className="text-center font-normal">
                        <li className="pt-6 cursor-pointer"> Products </li>
                        <li className="pt-6 cursor-pointer"> Features </li>
                        <li className="pt-6 cursor-pointer"> About </li>
                        <li className="pt-6 cursor-pointer"> Contact </li>
                    </ul>

                    <div className="mt-8 text-center">
                        <button className="font-medium pr-4 ">Login</button>
                        <span className="text-[hsla(0,0%,100%,.2)] pr-4  py-3">|</span>
                        <button className="bg-btnBlue rounded-[20px] px-5 py-2 font-medium">
                            Register
                        </button>
                    </div>

                </div>

            </section>
            <section ref={NavRef} className="flex justify-between py-4 sm:py-6 lg:py-10 opacity-0">
                
                <Link href={'/'}>
                    <a className="flex ml-3 lg:ml-16 xl:ml-24">
                        <Image src={Logo} width={40} height={40} alt="logo" />
                        <p className="text-[18px] ml-4 pt-2"> CRAPPO </p>
                    </a>
                </Link>

                
                <i 
                className="fa-solid fa-bars text-2xl cursor-pointer mr-3 mt-2 mobile lg:none"
                onClick={openCollapseBar}
                ></i>

                <div className="hidden lg:flex text-[1rem] lg:mr-16 xl:mr-24">
                    <ul className="flex font-normal lg:mr-4">
                        <li  className="px-4 py-3 cursor-pointer"> Products </li>
                        <li className="px-4 py-3 cursor-pointer"> Features </li>
                        <li className="px-4 py-3 cursor-pointer"> About </li>
                        <li className="px-4 py-3 cursor-pointer"> Contact </li>
                    </ul>

                    <div>
                        <button className="font-medium pl-6 pr-4 py-3">Login</button>
                        <span className="text-[hsla(0,0%,100%,.2)] pr-4  py-3">|</span>
                        <button className="bg-btnBlue rounded-[32px] px-8 py-3 font-medium">
                            Register
                        </button>
                    </div>
                </div>

            </section>
        </nav>
    );
}
 
export default Navbar;