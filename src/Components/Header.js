import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Link } from 'gatsby'
import {
  HomeIcon,
  GlobeIcon,
  MenuIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline'
import HeroImage from './../images/bible-01.jpg'
import Logo from './../images/chbc-logo-dark.png'

const navigation = [
  { name: 'Home', to: '/', icon: HomeIcon, },
  { name: 'About', to: '/about', icon: UserGroupIcon, },
]

export default function Header() {
  return (
    <div className=" bg-white">
      <header>
        <Popover className="relative bg-white">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6  md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src={Logo}
                  alt=""
                />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              

              {navigation.map((item) => (
                <Link key={item.name} to={item.to} className="text-base font-medium text-gray-500 hover:text-gray-900">
                  {item.name}
                </Link>
              ))}
              <a href="http://www.coloradoba.org/" rel="noreferrer" target="_blank" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Colorado Baptist Association
              </a>
            </Popover.Group>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={Logo}
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid grid-cols-1 gap-7">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-blue-100"
                          activeClassName="bg-gray-200"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-400 text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                        </Link>
                      ))}
                      <a href="http://www.coloradoba.org/" rel="noreferrer" target="_blank" className="-m-3 p-3 flex items-center rounded-lg hover:bg-blue-100">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-400 text-white">
                        <GlobeIcon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">Colorado Baptist Association</div>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>

      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={HeroImage}
                    alt="Open bible"
                  />
                  <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">College Heights Baptist Church</span>
                    <span className="block text-blue-400">Join Us Sunday</span>
                  </h1>
                  <div className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                    <p>Sunday School: 9:30 am - 10:30 am</p>
                    <p>Sunday Morning Worship: 10:45 am - 12:00 pm</p> 
                    <p>Wednesday Evening Meal: 6:00 pm - 6:30 pm</p>
                    <p>Wednesday Evening Bible Study: 6:30 pm -  7:00 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}