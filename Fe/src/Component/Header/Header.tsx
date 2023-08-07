const Header = () => {
  return (
    <header className="text-white py-3 px-4">
  <div className="bg-warning container mx-auto flex flex-col sm:flex-row items-center justify-between">
    <div className="flex items-center my-5">
      <img className="w-50 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3hl8ibmmeMlg4eVgVceQmL85oko3exixBA&usqp=CAU" alt="Logo" />
    </div>
    <nav className="mt-4 sm:mt-0 flex-grow">
      <ul className="flex space-x-4 justify-center fs-3">
        <li><a href="/" className="hover:text-gray-300">Home</a></li>
        <li><a href="/product" className="hover:text-gray-300">Product</a></li>
        <li><a href="#" className="hover:text-gray-300">Services</a></li>
        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
    <button className="btn btn-info self-start mt-2"><a href="/admin">Admin</a></button>
  </div>
  <div className="bg-light p-5 py-1 text-center">
    <img src="https://theme.hstatic.net/200000239353/1000649322/14/banner-default-col.jpg?v=383" alt="Banner" />
  </div>

</header>
  )
}

export default Header