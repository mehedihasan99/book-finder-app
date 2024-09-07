import { useState, useMemo } from 'react'

const useSortBooks = (initialBooks) => {
  const [sortOption, setSortOption] = useState('')
  const [books, setBooks] = useState(initialBooks)

  const sortedBooks = useMemo(() => {
    switch (sortOption) {
      case 'nameAtoZ':
        return [...books].sort((a, b) => a.book_name.localeCompare(b.book_name))
      case 'nameZtoA':
        return [...books].sort((a, b) => b.book_name.localeCompare(a.book_name))
      case 'yearOldest':
        return [...books].sort((a, b) => a.publish_year - b.publish_year)
      case 'yearNewest':
        return [...books].sort((a, b) => b.publish_year - a.publish_year)
      default:
        return books
    }
  }, [books, sortOption])

  const handleSort = (option) => {
    setSortOption(option)
  }

  return { sortedBooks, handleSort }
}

export default useSortBooks
