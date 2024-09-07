import moon from '../assets/icon/moon.svg'
import ring from '../assets/icon/ring.svg'
import sun from '../assets/icon/sun.svg'
import logo from '../assets/images/books/logo.png'

import { useSelector } from 'react-redux'
import shoppingCart from '../assets/icon/shopping-cart.svg'
import useTheme from '../hooks/useTheme'
export default function Header() {
  const { darkMode, setDarkMode } = useTheme()
  const cartItems = useSelector((store) => store.cart.items)
  return (
    <nav className=" bg-gray-50 fixed top-0 left-0 right-0 z-50 py-2 shadow dark:bg-gray-900 dark:border-b border-gray-600  dark:text-white">
      <div className="container mx-auto flex items-center justify-between gap-x-6 px-4 max-w-7xl ">
        <img
          className="max-w-[120px] w-16 h-16 md:max-w-[180px] transition-transform duration-300 hover:scale-105"
          src={logo}
          alt="logo"
        />
        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              onClick={() => setDarkMode(!darkMode)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={darkMode ? sun : moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li className="relative">
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block relative"
              href="#"
            >
              <img src={shoppingCart} width="24" height="24" alt="" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full p-2 w-5 h-5 flex justify-center items-center">
                  {cartItems.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
