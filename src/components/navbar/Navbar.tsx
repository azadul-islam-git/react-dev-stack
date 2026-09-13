import NavLogo from "../../assets/logo-text.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto px-4 py-2">
        {/* START */}
        <div className="navbar-start flex-1 min-w-0">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <RxHamburgerMenu className="text-2xl" strokeWidth={1} />
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="text-[#d91b7e] font-medium">Home</a>
              </li>
              <li>
                <a>Technologies</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>

          <a href="/" className="hidden lg:flex items-center">
            <img src={NavLogo} alt="Logo" className="w-37.5 h-auto" />
          </a>
        </div>

        {/* CENTER */}
        <div className="navbar-center flex-none min-w-0">
          <a href="/" className="flex lg:hidden items-center shrink-0 -ml-12">
            <img src={NavLogo} alt="Logo" className="w-25 h-auto" />
          </a>

          <ul className="hidden lg:flex menu menu-horizontal px-1 gap-1">
            <li>
              <a className="text-[#d91b7e] font-semibold text-sm">Home</a>
            </li>
            <li>
              <a>Technologies</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        {/* END */}
        <div className="navbar-end flex-1 min-w-0 gap-2">
          <a
            href="/"
            className="inline-flex btn btn-sm btn-ghost text-[#333333] font-semibold px-2 whitespace-nowrap"
          >
            Sign In
          </a>
          <a
            href="/"
            className="btn btn-sm rounded-full bg-[#d91b7e] text-white border border-[#d91b7e] hover:bg-[#d91b7e] px-4 whitespace-nowrap font-semibold"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
