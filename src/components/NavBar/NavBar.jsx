import { NavLink } from "react-router-dom";


const NavBar = () => {
    const links = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "border btn bg-none border-[#23BE0A] text-[#23BE0A] font-semibold" : "btn bg-transparent border-none shadow-none"}>Home</NavLink></li>
        <li><NavLink to="/listed-books" className={({ isActive }) => isActive ? "border btn bg-none border-[#23BE0A] text-[#23BE0A] font-semibold" : "btn bg-transparent border-none shadow-none"}>Listed Books</NavLink></li>
        <li><NavLink to="/page-read" className={({ isActive }) => isActive ? "border btn bg-none border-[#23BE0A] text-[#23BE0A] font-semibold" : "btn bg-transparent border-none shadow-none"}>Pages to Read</NavLink></li>
        <li><NavLink to="/buy-book" className={({ isActive }) => isActive ? "border btn bg-none border-[#23BE0A] text-[#23BE0A] font-semibold" : "btn bg-transparent border-none shadow-none"}>Store</NavLink></li>
        <li><NavLink to="/ase" className={({ isActive }) => isActive ? "border btn bg-none border-[#23BE0A] text-[#23BE0A] font-semibold" : "btn bg-transparent border-none shadow-none"}>Ase</NavLink></li>
    </>


    return (
        <div>
            <div className="navbar py-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className=" font-bold text-xl md:text-2xl md:-ml-2">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center justify-center gap-3 px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3 *:text-white font-semibold text-lg">
                    <button className="btn md:flex hidden bg-[#23BE0A]">Sign In</button>
                    <button className="btn bg-[#59C6D2]">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;