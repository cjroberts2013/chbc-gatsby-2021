import React from 'react';
import Contact from './../Components/Contact'
import { Link } from 'gatsby';

const navigation = {
    main: [
        { name: 'Home', to: '/' },
        { name: 'About', to: '/about' },
    ]
}
  
  export default function Footer () {
    return (
      <div>
        <div className="container m-auto" id="calendar">
            <h2 className="text-3xl font-extrabold text-center tracking-tight sm:text-4xl">Upcoming Events</h2>
            <iframe title="web-image" className="hidden-phone hidden sm:block border-0 mt-7 mb-24 w-full" src="https://calendar.google.com/calendar/embed?src=kq9p2ber1969pt3fpqhgivuk1o%40group.calendar.google.com&ctz=America%2FDetroit" width="100%" height="600" frameBorder="0" scrolling="no"></iframe>
            <iframe title="mobile-image" className="visible-phone sm:hidden mt-7 mb-7 w-full" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FDetroit&amp;src=a3E5cDJiZXIxOTY5cHQzZnBxaGdpdnVrMW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%237986CB&amp;color=%23009688&amp;mode=AGENDA&amp;showTabs=0&amp;showPrint=0" width="100%" height="600" frameBorder="0" scrolling="no"></iframe>
        </div>
        <Contact />
        <div className="map-holder embed-responsive-21by9 ">
            <iframe title="map-image" className="embed-responsive-item border-0 w-full" width="600" height="350" frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJhTdRqTx1QYYR40lK6867iXE&key=AIzaSyAma8cgRwXXbj5Ljq3bM9iUcHcmPeo0FRo" allowFullScreen={true}></iframe>
        </div>
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                {navigation.main.map((item) => (
                <div key={item.name} className="px-5 py-2">
                    <Link to={item.to} className="text-base text-gray-400 hover:text-gray-100">
                    {item.name}
                    </Link>
                </div>
                ))}
                <div className="px-5 py-2">
                    <a href="http://www.coloradoba.org/" rel="noreferrer" target="_blank" className="text-base text-gray-400 hover:text-gray-100">
                        Colorado Baptist Association
                    </a>
                </div>
            </nav>
            <p className="mt-8 text-center text-base text-gray-400">&copy; {new Date().getFullYear()} College Heights Baptist Church. All rights reserved.</p>
            </div>
        </footer>
      </div>
    )
  }
  