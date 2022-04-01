import React from 'react'

type Props = {}

const FilterBy = (props: Props) => {
    return (
        <div><div className="col-span-6 sm:col-span-3">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">FILTER BY</label>
            <select id="address" name="address" autoComplete="address" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option />
                <option>CATEGORY</option>
                <option>BRAND</option>
                <option>PRICE RANGE</option>

            </select>
        </div>
        </div>
    )
}

export default FilterBy