const Header = () => {
  return (
    <header className="flex items-center h-[114px] px-5 bg-gray-100">
      <div className="text-2xl font-bold">MonLogo</div>
      <div className="flex-grow"></div>
      <nav className="flex gap-16">
        <a href="#link1" className="text-gray-800 text-lg hover:text-blue-300">
          Home
        </a>
        <a href="#link2" className="text-gray-800 text-lg hover:text-blue-300">
          About
        </a>
      </nav>
      <div className="flex-grow"></div>
    </header>
  );
};

export default Header;
