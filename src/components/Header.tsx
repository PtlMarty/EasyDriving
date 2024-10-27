import { Link } from "react-router-dom";

const Header = () => {
  //TODO: Add logo change color

  return (
    <header className="flex items-center h-[114px] px-5 bg-gray-100 sticky top-0 z-50">
      <div className="text-xl font-bold">
        <Link to="/" className="text-gray-800 text-lg hover:text-blue-300">
          <img src="vite.svg" alt="" />
        </Link>{" "}
      </div>
    </header>
  );
};

export default Header;
