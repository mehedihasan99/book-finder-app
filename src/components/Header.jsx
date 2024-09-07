import moon from '../assets/icon/moon.svg'
import ring from '../assets/icon/ring.svg'
import shoppingCart from '../assets/icon/shopping-cart.svg'
import sun from '../assets/icon/sun.svg'
import logo from '../assets/images/books/logo.png'
import useTheme from '../hooks/useTheme'

export default function Header() {
  const { darkMode, setDarkMode } = useTheme()

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-2 shadow ${
        darkMode ? 'bg-gray-900 border-b border-gray-600' : 'bg-gray-50'
      } transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between gap-x-6 px-4 max-w-7xl">
        <img
          className="max-w-[120px] w-16 h-16 md:max-w-[180px] transition-transform duration-300 hover:scale-105"
          src={logo}
          alt="logo"
        />
        <ul className="flex items-center space-x-5">
          <li>
            <a
              className={`bg-primary/20 ${
                darkMode ? 'dark:bg-primary/[7%]' : 'bg-primary/[20%]'
              } rounded-lg backdrop-blur-[2px] p-1 inline-block`}
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              onClick={() => setDarkMode(!darkMode)}
              className={`bg-primary/20 ${
                darkMode ? 'dark:bg-primary/[7%]' : 'bg-primary/[20%]'
              } rounded-lg backdrop-blur-[2px] p-1 inline-block`}
              href="#"
            >
              <img src={darkMode ? sun : moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li className="relative">
            <a
              className={`bg-primary/20 ${
                darkMode ? 'dark:bg-primary/[7%]' : 'bg-primary/[20%]'
              } rounded-lg backdrop-blur-[2px] p-1 inline-block`}
              href="#"
            >
              <img src={shoppingCart} width="24" height="24" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
