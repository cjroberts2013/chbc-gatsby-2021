import React from 'react';

export default function Contact() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto pt-8 pb-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="divide-y-2 divide-gray-200">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl text-center font-extrabold text-gray-900 sm:text-3xl">Get in touch</h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Address</h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Address</dt>
                      <dd>1515 Briar Lane</dd>
                    </div>
                    <div className="mt-1">
                      <dd>Wharton, TX 77488</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Phone Number</h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>(979) 532-4442</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Email</h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd><a href="mailto: chbcworship@yahoo.com">chbcworship@yahoo.com</a></dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }