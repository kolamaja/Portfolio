import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/MN.png";
const NavBar = () => {
	return (
		<nav className='shadow-xl bg-clay-500 text-almostWhite-500'>
			<div className='relative container mx-auto p-2'>
				<div className='flex items-center justify-between'>
					<div className='pt-2'>
						<Link to={"/"}><img className='h-16 ' src={Logo} alt='Logo' /></Link>
					</div>
					<div className='flex space-x-9 text-xl'>
						<Link to={"/"} className='hover:text-almostWhite-600' >
							Home
						</Link>
						<Link to={"/about"} className='hover:text-almostWhite-600'>
							About me
						</Link>
						<Link to={"/portfolio"} className='hover:text-almostWhite-600'>
							My portfolio
						</Link>
						<Link to={"/contact"} className='hover:text-almostWhite-600' >
							Contact
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
