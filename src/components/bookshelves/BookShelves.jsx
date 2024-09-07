import { useCallback, useMemo, useState } from 'react'
import { booksData } from '../../constant'
import NotFound from '../NotFound'
import Book from './Book'
import BookSearch from './BookSearch'
import SortOfBooks from './SortOfBooks'

export default function BookShelves() {
  const [searchText, setSearchText] = useState('')
  const [sortOption, setSortOption] = useState('') // Added state for sorting
  const [filteredBooks, setFilteredBooks] = useState(booksData)

  // Filter books based on search text
  const filteredBooksBySearch = useMemo(() => {
    return filteredBooks.filter((book) =>
      book.book_name.toLowerCase().includes(searchText.toLowerCase())
    )
  }, [searchText, filteredBooks])

  // Sort books based on the selected sort option
  const sortedBooks = useMemo(() => {
    const sorted = [...filteredBooksBySearch]
    switch (sortOption) {
      case 'nameAtoZ':
        return sorted.sort((a, b) => a.book_name.localeCompare(b.book_name))
      case 'nameZtoA':
        return sorted.sort((a, b) => b.book_name.localeCompare(a.book_name))
      case 'yearOldest':
        return sorted.sort((a, b) => a.publish_year - b.publish_year)
      case 'yearNewest':
        return sorted.sort((a, b) => b.publish_year - a.publish_year)
      default:
        return sorted
    }
  }, [sortOption, filteredBooksBySearch])

  const handleSearchBook = useCallback((searchText) => {
    setSearchText(searchText)
  }, [])

  const handleFavorite = useCallback((favId) => {
    setFilteredBooks((prevBooks) => {
      return prevBooks.map((book) =>
        book.id === favId ? { ...book, isFavorite: !book.isFavorite } : book
      )
    })
  }, [])

  const handleSortBooks = useCallback((sortOption) => {
    setSortOption(sortOption)
  }, [])

  return (
    <main className="my-10 lg:my-14 dark:bg-gray-900 dark:text-white pt-16">
      {' '}
      {/* Added dark mode classes */}
      <header className="mx-auto mb-8 max-w-7xl lg:mb-10">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          {/* Info, title, and search */}
          <div>
            <h6 className="mb-2 text-base lg:text-xl">Trending on 2024</h6>
            <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
              Trending Books of the Year
            </h2>
            {/* Search Box */}
            <BookSearch onSearch={handleSearchBook} />
          </div>
          {/* Sort and filter */}
          <SortOfBooks onSort={handleSortBooks} />
        </div>
      </header>
      {sortedBooks.length > 0 ? (
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedBooks.map((book) => (
            <Book key={book.id} {...book} onFavorite={handleFavorite} />
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </main>
  )
}
