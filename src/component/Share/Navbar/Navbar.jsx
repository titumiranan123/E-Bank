import { useContext, useState } from "react";
import { FaAngleDown, FaAngleRight, FaSearch } from "react-icons/fa";
import { HiMenu, HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Provider/Provider";
import Swal from "sweetalert2";

const Navbar = () => {
    const [navopen, setnavopen] = useState(false);
    const [investopen, setInvestopen] = useState(false)
    const [personalopen, setPersonalopen] = useState(false)
    const [bussinessopen, setbussinessopen] = useState(false)
    const [comercialopen, setcomercialopen] = useState(false)
    const [search, setSearch] = useState(false)

    const toggleMobileNav = () => {
        setnavopen(!navopen);
    };
    const { logOut } = useContext(Authcontext)
    const singOut = () => {
        logOut()
            .then(res => {
                console.log(res)
                Swal.fire({
                    icon: 'success',
                    title: "LogOut Sucess"
                })
            })
            .then(err => {
                console.log(err)
            })
    }
    const investItem = <>
        <div className="flex flex-col  w-full space-y-2 justify-center bg-[#0F0826] p-10 items-center text-[#3B85D6]">
            <Link className="text-[#3B85D6]">Investing & Financial Planning </Link>
            <span className="border-b-[1px] border-white w-full"></span>
            <Link>Investing & Wealth Management </Link>
            <span className="border-b-[1px] border-white w-full"></span>
            <Link>Trust & Estate Planning</Link>
            <span className="border-b-[1px] border-white w-full"></span>
            <Link>Estate Settlement</Link>
        </div>

    </>

    const navItem = <>
        <div className="flex-col w-full items-center justify-center">
            <div onClick={() => setPersonalopen(!personalopen)} className="flex font-bold items-center justify-center">
                <Link className="uppercase">Personal</Link>
                {!personalopen ? <div ><FaAngleRight /> </div> : <FaAngleDown />}
            </div>
            {personalopen && <>
                {investItem}
            </>}
        </div>
        <span className="border-b-[2px] border-white w-full"></span>
        <div className="flex-col w-full items-center justify-center">
            <div onClick={() => setbussinessopen(!bussinessopen)} className="flex items-center  font-bold justify-center">
                <Link className="uppercase">Business</Link>
                {!bussinessopen ? <FaAngleRight /> : <FaAngleDown />}
            </div>
            {bussinessopen && <>
                {investItem}
            </>}
        </div>
        <span className="border-b-[2px] border-white w-full"></span>
        <div className="flex-col w-full items-center justify-center">
            <div onClick={() => setcomercialopen(!comercialopen)} className=" font-bold flex items-center justify-center">
                <Link className="uppercase">Comercial </Link>
                {!comercialopen ? <FaAngleRight /> : <FaAngleDown />}
            </div>
            {comercialopen && <>
                {investItem}
            </>}
        </div>
        <span className="border-b-[2px] border-white w-full"></span>
        <div className="flex-col w-full items-center justify-center">
            <div onClick={() => setInvestopen(!investopen)} className="flex items-center justify-center  font-bold">
                <Link className="uppercase">Investing</Link>
                {!investopen ? <FaAngleRight /> : <FaAngleDown />}
            </div>
            {investopen && <>
                {investItem}
            </>}
        </div>
        <span className="border-b-[2px] border-white w-full"></span>
        <Link className="uppercase font-bold"> Future Track </Link>
    </>
    const lgscreenNav = <>
        <div className="flex justify-between gap-4 items-center ">
            <div className="flex-col w-full items-center justify-center">
                <div onClick={() => setPersonalopen(!personalopen)} className="flex font-bold items-center justify-center">
                    <Link className="uppercase">Personal</Link>
                    {!personalopen ? <div ><FaAngleRight /> </div> : <FaAngleDown />}
                </div>
                {<div className={`absolute top-[100%] w-full left-2 mt-10 text-xl transform duration-500 ${personalopen ? "translate-x-0" : "-translate-x-full -left-[130px]  "}`}>
                    {investItem}
                </div>}
            </div>

            <div className="flex-col w-full items-center justify-center">
                <div onClick={() => setbussinessopen(!bussinessopen)} className="flex items-center  font-bold justify-center">
                    <Link className="uppercase">Business</Link>
                    {!bussinessopen ? <FaAngleRight /> : <FaAngleDown />}
                </div>
                {<div className={`absolute top-[100%] w-full left-2 mt-10 text-xl transform duration-500 ${bussinessopen ? "translate-x-0" : "-translate-x-full -left-[130px]  "}`}>
                    {investItem}
                </div>}
            </div>

            <div className="flex-col w-full items-center justify-center">
                <div onClick={() => setcomercialopen(!comercialopen)} className=" font-bold flex items-center justify-center">
                    <Link className="uppercase">Comercial </Link>
                    {!comercialopen ? <FaAngleRight /> : <FaAngleDown />}
                </div>
                {<div className={`absolute top-[100%] w-full left-2 mt-10 text-xl transform duration-500 ${comercialopen ? "translate-x-0" : "-translate-x-full -left-[130px]  "}`}>
                    {investItem}
                </div>}
            </div>

            <div className="flex-col w-full items-center justify-center">
                <div onClick={() => setInvestopen(!investopen)} className="flex items-center justify-center  font-bold">
                    <Link className="uppercase">Investing</Link>
                    {!investopen ? <FaAngleRight /> : <FaAngleDown />}
                </div>
                {<div className={`absolute top-[100%] w-full left-2 mt-10 text-xl transform duration-500 ${investopen ? "translate-x-0" : "-translate-x-full -left-[130px]  "}`}>
                    {investItem}
                </div>}
            </div>

            <div>
                <Link className="uppercase font-bold whitespace-nowrap"> Future Track </Link>
            </div>
        </div>
    </>
    const searchToggole = () => {
        setSearch(!search)
    }

    const { user } = useContext(Authcontext)
    console.log(user)

    return (
        <nav className="text-white py-6  lg:px-0 px-4 items-center relative z-10
        ">
            <div className="text-white pt-4 lg:flex justify-between  px-4 items-center relative hidden
        " >
                <div>
                    <h2 className="font-bold text-xl">E-Bank</h2>
                </div>
                {/* navitem for desktop */}
                <div className="">
                    {lgscreenNav}
                </div>
                <div className="flex gap-3 ">
                    <div className={`flex border rounded-lg bg-white gap-3 justify-center text-black  items-center px-2 `}>
                        <input className={`border-none  focus:outline-none ${search ? 'w-[100px] opacity-100 transition-all duration-500 ease-in-out ' : 'w-0 opacity-0 transition-all duration-500 ease-in-out text-black'} `} placeholder="search" type="text" />
                        <FaSearch className="z-40 text-black" onClick={searchToggole} />
                    </div>
                    {
                        user ? <Link onClick={singOut}>Logout</Link> : <Link to='/login'>Login</Link>
                    }
                </div>
            </div>


            {/* Mobile Nav and tablet */}
            <div className="lg:hidden relative grid grid-cols-3">
                {/* Hamburger Icon */}
                <div className="flex justify-between items-center lg:hidden">
                    <button
                        onClick={toggleMobileNav}
                        className="text-white focus:outline-none font-bold text-3xl"
                    >
                        {
                            !navopen ? <HiMenu /> : <HiMenuAlt2 />
                        }
                    </button>
                </div>
                <div className="mx-auto">
                    <h2 className="font-bold text-2xl">E-Bank</h2>
                </div>
                <div className="flex gap-3  mx-auto">
                    <div className={`flex border rounded-lg bg-white gap-3 justify-center text-black  items-center px-2 `}>
                        <input className={`border-none  focus:outline-none ${search ? 'w-[100px] opacity-100 transition-all duration-500 ease-in-out ' : 'w-0 opacity-0 transition-all duration-500 ease-in-out text-black'} `} placeholder="search" type="text" />
                        <FaSearch className="z-40 text-black" onClick={searchToggole} />
                    </div>
                    {
                        user ? <Link onClick={singOut}>Logout</Link> : <Link to='/login'>Login</Link>
                    }
                </div>
            </div>

            <div className={`lg:hidden bg-[#0F0826] flex flex-col justify-center space-y-2 items-center w-full absolute top-[100%] p-10  duration-1000 transform ${navopen ? "translate-x-0" : "-translate-x-full ms-[-19px] "}`}>
                {navItem}
            </div>

        </nav>
    );
};



export default Navbar;
