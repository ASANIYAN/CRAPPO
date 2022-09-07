import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import Logo from "./assets/Logo.svg";

const Navbar = () => {

    const collapseBarRef = useRef(null);

    function openCollapseBar() {
        gsap.to(collapseBarRef.current, {
            duration: 1,
            ease: "bounce",
            x: '-50%',
        })
    }

    function closeCollapseBar() {
        gsap.to(collapseBarRef.current, {
            duration: 1,
            ease: "power2",
            x: '50%',
        })
    }

    return (
        <nav className="w-full bg-hero text-white">
            <section 
            ref={collapseBarRef} 
            className="lg:hidden absolute w-[100%] bg-[rgb(37,37,64)] h-[100vh] left-[50%] translate-x-[50%] z-10 overflow-hidden"
            >
                <div className="w-full flex justify-end">
                    <i 
                    className="fa-solid fa-xmark mt-8 mr-8 text-2xl cursor-pointer"
                    onClick={closeCollapseBar}
                    ></i>
                </div>

                <div className="w-full mt-20 text-[1.5rem]">
                    
                    <ul className="text-center font-normal">
                        <li className="pt-6"> Products </li>
                        <li className="pt-6"> Features </li>
                        <li className="pt-6"> About </li>
                        <li className="pt-6"> Contact </li>
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
            <section className="flex justify-between py-4 sm:py-6 lg:py-10">
                
                <Link href={'/'}>
                    <a className="flex ml-3 lg:ml-16 xl:ml-24">
                        <Image src={Logo} width={40} height={40} />
                        <p className="text-[18px] ml-4 pt-2"> CRAPPO </p>
                    </a>
                </Link>

                
                <i 
                className="fa-solid fa-bars text-2xl cursor-pointer mr-3 mt-2 lg:hidden"
                onClick={openCollapseBar}
                ></i>

                <div className="hidden lg:flex text-[1rem] lg:mr-16 xl:mr-24">
                    <ul className="flex font-normal lg:mr-4">
                        <li className="px-4 py-3"> Products </li>
                        <li className="px-4 py-3"> Features </li>
                        <li className="px-4 py-3"> About </li>
                        <li className="px-4 py-3"> Contact </li>
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