import React from 'react'
import BookSearch from './BookSearch'
import Book from './book'
import SortOfBooks from './sortOfBooks'

export default function BookShelves() {
  return (
    <main className="my-10 lg:my-14">
      <header className="mx-auto mb-8 max-w-7xl lg:mb-10">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          {/* <!-- info , title , search --> */}
          <div>
            <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
            <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
              Trending Books of the Year
            </h2>
            {/* <!-- Search Box --> */}
            <BookSearch />
          </div>
          {/* <!-- sort - filter --> */}
          <SortOfBooks />
        </div>
      </header>
      {/* <!-- Book Grid --> */}
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Book />
      </div>
    </main>
  )
}
