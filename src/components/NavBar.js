import React from "react";
import Logo from "../img/MN.png";
const NavBar = () => {
	return (
		<nav className='shadow-xl bg-clay-500 text-almostWhite-500'>
			<div className='relative container mx-auto p-2'>
				<div className='flex items-center justify-between'>
					<div className='pt-2'>
						<img className='h-16 hover:fill-white' src={Logo} alt='' />
					</div>
					<div className='flex space-x-9 text-xl'>
						<a className='hover:text-almostWhite-600' href='www.google.pl'>
							Home
						</a>
						<a className='hover:text-almostWhite-600' href='www.google.pl'>
							About me
						</a>
						<a className='hover:text-almostWhite-600' href='www.google.pl'>
							My portfolio
						</a>
						<a className='hover:text-almostWhite-600' href='www.google.pl'>
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
