import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className='bg-elephant-500'>
			<div className='container flex flex-row justify-between  py-12 px-8 mx-auto mt md:space-y-0'>
				<div className='flex flex-row '>
					<div className='flex flex-col space-y-3  '>
						<h1 className='text-xl text-almostWhite-500 pb-2'>Social</h1>
						<div className='flex flex-row'>
							<div className='flex flex-col space-y-3 text-2xl  text-clay-500'>
								<a href='https://www.linkedin.com/in/mikołaj-niedźwiecki-426a80211/' className='hover:text-clay-400'>
									<FaLinkedin />
								</a>
								<a href='https://github.com/kolamaja/Portfolio' className='hover:text-clay-400' >
									<FaGithub />
								</a>
								<a href='https://www.facebook.com/profile.php?id=100003771045734' className='hover:text-clay-400' >
									<FaFacebookSquare />
								</a>
								
							</div>
							<div className='flex flex-col space-y-3 px-2 text-almostWhite-500'>
								<h1 className='cursor-default'>Linkedin</h1>
								<h1 className='cursor-default'>GitHub</h1>
								<h1 className='cursor-default'>Facebook</h1>
							</div>
						</div>
					</div>
					<div className='flex flex-col space-y-3 '>
						<h1 className='text-xl px-8  text-almostWhite-500'>Navigation</h1>
						<div className='flex flex-col space-y-2 px-8 text-almostWhite-500'>
							<Link to={'/'} className='hover:text-almostWhite-600'>
								Home
							</Link>
							<Link to={'/about'} className='hover:text-almostWhite-600'>
								About me
							</Link>
							<Link to={'/portfolio'} className='hover:text-almostWhite-600'>
								My portfolio
							</Link>
							<Link to={'/contact'} className='hover:text-almostWhite-600'>
								Contact
							</Link>
						</div>
					</div>
				</div>
				<div className='flex flex-col space-y-3 text-almostWhite-500'>
					<h1 className='text-xl'>Contact me!</h1>
					<div className='flex flex-row'>
						<div className='flex flex-col space-y-6 text-2xl  text-clay-500'>
							<Link to={'/contact'} className='hover:text-clay-400' >
								<FaPhoneSquareAlt />
							</Link>
							<Link to={'contact'} className='hover:text-clay-400' >
								<FaEnvelope />
							</Link>
							<Link to={'/contact'} className='hover:text-clay-400' >
								<ImLocation2 />
							</Link>
						</div>
						<div className='flex flex-col space-y-6 px-2 text-almostWhite-500'>
							<h1 className='cursor-default'>+48 730 279 733</h1>
							<h1 className='cursor-default'>
								mikolaj.niedzwiecki99@gmail.com
							</h1>
							<h1 className='cursor-default'>Wrocław</h1>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-elephant-600 flex flex-col  justify-center text-center'>
				<p>Copyright &copy; 2022, All Rights Reserved</p>
			</div>
		</footer>
	);
};
