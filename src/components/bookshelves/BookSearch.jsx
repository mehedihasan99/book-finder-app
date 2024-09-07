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
      <div className="flex">
        <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]">
          <input
            onChange={handleInputChange}
            value={searchText}
            type="search"
            id="search-dropdown"
            className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
            placeholder="Search Book"
          />
        </div>
      </div>
    </form>
  )
}
