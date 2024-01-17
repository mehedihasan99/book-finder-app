import { FaStar } from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi2'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'

export default function Book({
  id,
  book_name,
  author_name,
  price,
  picture,
  publish_year,
  isFavorite,
  onFavorite,
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
        <img className="max-w-[144px]" src={picture} alt="book name" />
      </div>
      <div className="space-y-3">
        <h4 className="text-lg font-bold lg:text-xl">{book_name}</h4>
        <p className="text-xs lg:text-sm">
          By : <span>{author_name}</span>
        </p>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold lg:text-xl">${price}</h4>
          <div className="flex items-center space-x-1">
            <FaStar style={{ color: 'orange' }} />
            <FaStar style={{ color: 'orange' }} />
            <FaStar style={{ color: 'orange' }} />
            <FaStar style={{ color: 'orange' }} />
            <span className="text-xs lg:text-sm">(4 Star)</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs lg:text-sm">
          <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
            <HiOutlineShoppingCart className="text-xl" />
            Add to Cart
          </button>

          <button
            onClick={() => onFavorite(id)}
            className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md ${
              isFavorite
                ? ' bg-[#DC2954]/[14%] py-1.5 text-[#DC2954] transition-all hover:bg-[#DC2954]/[24%] '
                : 'bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%]'
            } lg:py-1.5`}
          >
            {isFavorite ? (
              <IoIosHeart className="text-xl text-red-500" />
            ) : (
              <IoIosHeartEmpty className="text-xl" />
            )}
            Favorite
          </button>
        </div>
      </div>
    </div>
  )
}
