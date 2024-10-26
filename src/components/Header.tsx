const Header = () => {
  return (
    <div className="flex flex-row h-100 p-3 bg-slate-400">
      <div className="flex justify-start">
        <a href="#">
          <img src="../public/vite.svg" alt="logo" />
        </a>
        <div className="flex flex-row justify-center gap-5">
          <div className="flex flex-row gap-5">
            <a href="#">Home</a>
            <a href="#">About us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
