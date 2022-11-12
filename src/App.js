import NavBar from "./components/NavBar";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function App() {
	return (
		<div className='flex flex-col justify-between h-screen '>
			<NavBar />

			<div className='container mx-auto '>
				<div className='flex flex-row items-center space-x-6 mt-10 px-8 py-8 '>
					<div className='flex flex-col mb-32 space-y-7 w-1/2'>
						<h1 className='text-6xl text-left text-clay-500'>
							Hi my name is Mikołaj!
						</h1>
						<span className='text-left text-base max-w-lg text-stone-500 my-5'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Vestibulum interdum erat eu turpis sollicitudin tempor. Aenean a
							erat et neque placerat lobortis.
						</span>
						<a
							href='www.google.pl'
							className='flex p-2 px-3 w-32 justify-center md:justify-start 
							rounded-full baseline text-almostWhite-500 bg-clay-500 hover:bg-clay-400 
							 text-center'>
							Check me out!
						</a>
					</div>
					<div>
						<img className='mt-4' src='https://picsum.photos/500/600' alt='' />
					</div>
				</div>
			</div>
			<section></section>
			<footer className='bg-elephant-500'>
				<div className='container flex flex-row justify-between  py-12 px-8 mx-auto mt md:space-y-0'>
					<div className="flex items-center">
					<div className='flex flex-col space-y-3 text-2xl  text-clay-500'>
						<a className='hover:text-clay-400' href='www.google.pl'>
							<FaLinkedin />
						</a>
						<a className='hover:text-clay-400' href='www.google.pl'>
							<FaGithub />
						</a>
						<a className='hover:text-clay-400' href='www.google.pl'>
							<FaEnvelope />
						</a>
					</div>
					<div className='flex flex-col space-y-3 px-2 text-almostWhite-500'>
						<h1 className='cursor-default'>Linkedin</h1>
						<h1 className='cursor-default'>GitHub</h1>
						<h1 className='cursor-default'>Email</h1>
					</div>
					<div className='flex flex-col space-y-2 px-6  text-almostWhite-500'>
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
					<div className="flex flex-col  text-almostWhite-500">
						<h1 className="text-xl">Keep in touch!</h1>
						

					</div>
				</div>
				<div className='bg-elephant-600 flex flex-col  justify-center text-center'>
					<p>Copyright &copy; 2022, All Rights Reserved</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
