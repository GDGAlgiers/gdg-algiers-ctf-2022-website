/* eslint-disable prettier/prettier */
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'gatsby'
import CTFLogo from '../../images/logo.png'
import Navigations from '../../data/navbar'

const NavBar = ({ className }) => (
    <Disclosure as="nav" className={`${className ?? ''}`}>
        {({ open }) => (
            <>
                <div className="flex-1 max-w-full px-4 font-Gilroy pt-[36px] sm:px-8 lg:px-[66px] 2xl:px-[100px] 2xl:pt-[54px]">
                    <div className="relative  flex flex-row justify-center sm:justify-between h-14  sm:h-20">
                        <div className="w-48 lg:block hidden">
                            <Link to="/">
                                <img
                                    className="h-[48px] w-[107px] 2xl:h-[75px] 2xl:w-[167px]"
                                    src={CTFLogo}
                                    alt="GDG CTF"
                                />
                            </Link>
                        </div>
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XIcon
                                        className="block h-6 w-6 text-white-lighter"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <MenuIcon
                                        className="block h-6 w-6 text-white-lighter"
                                        aria-hidden="true"
                                    />
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="sm:hidden block">
                            <h1 className="text-white-lighter font-bold pt-3 text-xl">
                                GDG Algiers CTF22
                            </h1>
                        </div>
                        <div className="hidden sm:flex flex-row sm:mx-auto space-x-5 md:space-x-8 pt-2 lg:mx-2">
                            {Navigations.map((item, index) => (
                                <a
                                    id={`${index}`}
                                    href={item.href}
                                    className={`text-white-lighter text-base md:text-lg lg:text-[18px] font-bold hover:text-black-default ${
                                        item.isHidden && 'hidden'
                                    }`}
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <Disclosure.Panel className="sm:hidden">
                    <div className=" flex flex-col items-center  px-2 pb-3 space-y-1">
                        {Navigations.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className={` block hover:text-black-default px-3 pb-2 rounded-md text-base font-medium text-center text-white-lighter `}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>
)
export default NavBar
