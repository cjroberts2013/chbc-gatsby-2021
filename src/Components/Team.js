import React from 'react';
import Hibbs from './../images/hibbs.jpg'
import Jhobbins from './../images/jhobbins.jpg'
import Ghobbins from './../images/ghobbins.jpg'
import Bhobbins from './../images/bhobbins.jpg'
import Horvath from './../images/horvath.jpg'
import Southall from './../images/southall.jpg'

const people = [
    {
      name: 'Kenneth Hibbs',
      role: 'Pastor',
      imageUrl: Hibbs,
    },
    {
        name: 'John Hobbins',
        role: 'Deacon',
        imageUrl: Jhobbins,
      },
      {
        name: 'Freddie Southall',
        role: 'Deacon',
        imageUrl: Southall,
      },
      {
        name: 'Al Horvath',
        role: 'Deacon',
        imageUrl: Horvath,
      },
      {
        name: 'Bob Hobbins',
        role: 'Deacon',
        imageUrl: Bhobbins,
      },
      {
        name: 'Georgia Hobbins',
        role: 'Deacon',
        imageUrl: Ghobbins,
      },
  ]
  
  export default function Team() {
    return (
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight text-center sm:text-4xl">Our Wonderful Staff</h2>
            </div>
            <ul
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-3">
                      <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="Church Staff" />
                    </div>
  
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }