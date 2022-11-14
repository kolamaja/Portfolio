import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

export const Footer = () => {
	return (
		<footer className='bg-elephant-500'>
			<div className='container flex flex-row justify-between  py-12 px-8 mx-auto mt md:space-y-0'>
				<div className='flex flex-row '>
					<div className='flex flex-col space-y-3  '>
						<h1 className='text-xl text-almostWhite-500 pb-2'>Social</h1>
						<div className='flex flex-row'>
							<div className='flex flex-col space-y-3 text-2xl  text-clay-500'>
								<a className='hover:text-clay-400' href='www.google.pl'>
									<FaLinkedin />
								</a>
								<a className='hover:text-clay-400' href='www.google.pl'>
									<FaGithub />
								</a>
								<a className='hover:text-clay-400' href='www.google.pl'>
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
				<div className='flex flex-col space-y-3 text-almostWhite-500'>
					<h1 className='text-xl'>Contact me!</h1>
					<div className='flex flex-row'>
						<div className='flex flex-col space-y-6 text-2xl  text-clay-500'>
							<a className='hover:text-clay-400' href='www.google.pl'>
								<FaPhoneSquareAlt />
							</a>
							<a className='hover:text-clay-400' href='www.google.pl'>
								<FaEnvelope />
							</a>
							<a className='hover:text-clay-400' href='www.google.pl'>
								<ImLocation2 />
							</a>
						</div>
						<div className='flex flex-col space-y-6 px-2 text-almostWhite-500'>
							<h1 className='cursor-default'>48+ 730 279 733</h1>
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
