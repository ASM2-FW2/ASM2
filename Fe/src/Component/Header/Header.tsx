import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className=" text-white py-3 px-4">
  <div className="bg-warning container mx-auto flex flex-col sm:flex-row items-center justify-between">
    <div className="flex items-center mb-10">
        <img className='w-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3hl8ibmmeMlg4eVgVceQmL85oko3exixBA&usqp=CAU" alt="" />
    </div>
    <nav className="mt-4 sm:mt-0">
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">About</a></li>
        <li><a href="#" className="hover:text-gray-300">Services</a></li>
        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  </div>
  <div className="bg-light p-5 py-1 text-center">
    <img src="https://theme.hstatic.net/200000239353/1000649322/14/banner-default-col.jpg?v=383" alt="" />
  </div>
</header>
  )
}

export default Header