import { HiOutlineBell } from 'react-icons/hi'
import logo from '../assets/lws-logo-en.svg'
export default function Header() {
  return (
    <nav className="py-6 ">
      <div className="container mx-auto flex items-center justify-between gap-x-6 max-w-7xl">
        <img className="max-w-[100px] md:max-w-[165px]" src={logo} alt="Lws" />
        <HiOutlineBell className="text-2xl" />
      </div>
    </nav>
  )
}
