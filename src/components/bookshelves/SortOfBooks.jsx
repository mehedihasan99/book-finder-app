export default function SortOfBooks({ onSort }) {
  return (
    <div className="flex items-stretch space-x-3">
      <select
        onChange={(e) => onSort(e.target.value)}
        className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
        name="sortBy"
        id="sortBy"
      >
        <option value="">Sort</option>
        <option value="nameAtoZ">Name (A-Z)</option>
        <option value="nameZtoA">Name (Z-A)</option>
        <option value="yearOldest">Publication Year (Oldest)</option>
        <option value="yearNewest">Publication Year (Newest)</option>
      </select>
    </div>
  )
}
