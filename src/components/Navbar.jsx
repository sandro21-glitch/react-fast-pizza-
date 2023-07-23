import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { userName } = useSelector((store) => store.user);
  return (
    <header className="bg-lightYellow p-5">
      <nav className="flex items-center justify-between">
        <Link to="/" className="font-normal">
          FAST REACT PIZZA CO.
        </Link>
        <SearchOrder />
        {userName && <div className="hidden sm:block">{userName}</div>}
      </nav>
    </header>
  );
};

export default Navbar;
