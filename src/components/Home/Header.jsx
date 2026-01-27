function Header() {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-full mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold" ><a href="/">CourseHive</a></h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#" className ="hover:text-blue-600">
            Courses
          </a>
          <a href="#" class="hover:text-blue-600">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
        </nav>
        <div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white cursor-pointer border border-blue-600 hover:shadow-md hover:transition-shadow" onClick={()=>{window.location.href="/educatorsignup"}}>
          Educators
        </button>

        <button className="bg-blue-600 text-white ml-4 px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer hover:shadow-md hover:transition-shadow" onClick={()=>{window.location.href="/signin"}}>
          Login
        </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
