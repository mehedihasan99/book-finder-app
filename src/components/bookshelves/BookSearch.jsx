import { useState } from 'react'

export default function BookSearch({ onSearch }) {
  const [searchText, setSearchText] = useState('')

  // Trigger onSearch on input change for real-time search
  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchText(value)
    onSearch(value) // Call onSearch with the current input value
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] dark:border-gray-600 text-[#1C4336] dark:text-gray-300 md:min-w-[380px] lg:min-w-[440px] flex items-center">
          <input
            onChange={handleInputChange}
            value={searchText}
            type="search"
            id="search-dropdown"
            className="z-20 block w-full bg-white dark:bg-gray-800 px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] dark:placeholder:text-gray-400 focus:outline-none"
            placeholder="Search Book"
          />
        </div>
      </div>
    </form>
  )
}
