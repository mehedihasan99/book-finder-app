import { useState } from 'react'
import { booksData } from '../../constant'
import BookSearch from './BookSearch'
import Book from './book'
import SortOfBooks from './sortOfBooks'

export default function BookShelves() {
  const [filteredBooks, setFilteredBooks] = useState(booksData)
  const [books, setBooks] = useState(filteredBooks)
  const handleSearchBook = (searchText) => {
    setBooks(
      filteredBooks.filter((book) =>
        book.book_name.toLowerCase().includes(searchText.toLowerCase())
      )
    )
  }
  const handleFavorite = (favId) => {
    const favIndex = books.findIndex((b) => b.id === favId)
    const newBooks = [...books]
    newBooks[favIndex].isFavorite = !newBooks[favIndex].isFavorite
    setBooks(newBooks)
  }
  const handleSortBooks = (sortOption) => {
    function sortBooks() {
      switch (sortOption) {
        case 'nameAtoZ':
          return books
            .slice()
            .sort((a, b) => a.book_name.localeCompare(b.book_name))
        case 'nameZtoA':
          return books
            .slice()
            .sort((a, b) => b.book_name.localeCompare(a.book_name))
        case 'yearOldest':
          return books.slice().sort((a, b) => a.publish_year - b.publish_year)
        case 'yearNewest':
          return books.slice().sort((a, b) => b.publish_year - a.publish_year)
        default:
          return books
      }
    }
    const allSortedBooks = sortBooks()
    setBooks([...allSortedBooks])
  }

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
            <BookSearch onSearch={handleSearchBook} />
          </div>
          {/* <!-- sort - filter --> */}
          <SortOfBooks onSort={handleSortBooks} />
        </div>
      </header>
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <Book key={book.id} {...book} onFavorite={handleFavorite} />
        ))}
      </div>
    </main>
  )
}
