import React from 'react'

export default function InputComponent() {
  return (
    <div>
       <div className="w-full lg:w-1/3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              نام مرکز درمانی *
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="کوثر"
              />
            </div>
          </div>
          <button className="bg-bgBtn rounded-lg w-1/3 py-1 px-3 text-white text-sm flex items-center justify-center">
              جستجو
            </button>
    </div>
  )
}
