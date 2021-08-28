import React from 'react';
import CTAImage from './../images/ctabanner.jpeg'

export default function CTA() {
    return (
      <div className="relative bg-gray-800 mb-12 h-auto md:h-96">
        <div className="bg-indigo-600 absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={CTAImage}
            alt="Praying hands"
          />
          <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="">
            <p className="mt-10 md:ml-20 md:mr-20 text-2xl md:text-3xl text-gray-300">
            Discover creative ways to encourage others and to motivate them toward acts of compassion, doing beautiful works as expressions of love.
            </p>
            <p className="mt-10 text-center text-white text-2xl font-thin tracking-tight sm:text-3xl">HEBREWS 10:24</p>
          </div>
        </div>
      </div>
    )
  }