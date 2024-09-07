export default function SortOfBooks({ onSort }) {
  return (
    <div className="flex items-stretch space-x-3">
      <select
        onChange={(e) => onSort(e.target.value)}
        className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600 bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 "
        name="sortBy"
        id="sortBy"
      >
        <option
          value=""
          className="bg-white dark:bg-gray-700 dark:text-gray-300"
        >
          Sort
        </option>
        <option
          value="nameAtoZ"
          className="bg-white dark:bg-gray-700 dark:text-gray-300"
        >
          Name (A-Z)
        </option>
        <option
          value="nameZtoA"
          className="bg-white dark:bg-gray-700 dark:text-gray-300"
        >
          Name (Z-A)
        </option>
        <option
          value="yearOldest"
          className="bg-white dark:bg-gray-700 dark:text-gray-300"
        >
          Publication Year (Oldest)
        </option>
        <option
          value="yearNewest"
          className="bg-white dark:bg-gray-700 dark:text-gray-300"
        >
          Publication Year (Newest)
        </option>
      </select>
    </div>
  )
}
