import React, { useState } from "react";
import {
	FaAngular,
	FaBootstrap,
	FaCss3,
	FaHtml5,
	FaPython,
	FaReact,
	FaRegHeart,
} from "react-icons/fa";
import { SiDjango, SiJavascript, SiTailwindcss } from "react-icons/si";

export const Technologies = () => {
	const [technology, setTechnology] = useState('React')
	

	return (
		<div className='container shadow-md bg-almostWhite-300 rounded-sm py-16 my-10 mx-auto'>
			<div className='flex flex-row justify-around '>
				<div className='flex flex-row justify-start'>
					<div className='flex flex-col space-y-5 p-1'>
						<div className='flex flex-row justify-start'>
							<h1 className='text-6xl ml-6 text-clay-500'> Technologies</h1>
						</div>
						<div className='flex flex-row ml-6 justify-start'>
							<span className='text-stone-500 text-base pl-2'>
								List of technologies I know
							</span>
						</div>

						<div className='flex flex-row justify-center max-w-2xl  text-stone-300 py-6 flex-wrap text-9xl  '>
							<button
								autoFocus
								onFocus={() => setTechnology('React')}
								className='hover:text-clay-500 outline-none hover:scale-110 focus:scale-110 focus:text-clay-500    '>
								<FaReact className='p-4' />
							</button>
							<button onFocus={() => setTechnology('HTML5')} className='hover:text-clay-500 hover:scale-110 focus:scale-110  focus:text-clay-500   '>
								<FaHtml5 className='p-4' />
							</button>
							<button onFocus={() => setTechnology('CSS3')} className='hover:text-clay-500 hover:scale-110 focus:scale-110  focus:text-clay-500   '>
								<FaCss3 className='p-4' />
							</button>
							<button onFocus={() => setTechnology('Tailwind')} className='hover:text-clay-500 hover:scale-110 focus:scale-110  focus:text-clay-500   '>
								<SiTailwindcss className='p-4' />
							</button>
							<button onFocus={() => setTechnology('JavaScript')} className='hover:text-clay-500 hover:scale-110 focus:scale-110  focus:text-clay-500   '>
								<SiJavascript className='p-4' />
							</button>
							<button onFocus={() => setTechnology('Bootstrap')} className='hover:text-clay-500  hover:scale-110 focus:scale-110 focus:text-clay-500   '>
								<FaBootstrap className='p-4' />
							</button>
							<button onFocus={() => setTechnology('Python')} className='hover:text-clay-500  hover:scale-110 focus:scale-110 focus:text-clay-500   '>
								<FaPython className='p-4' />
							</button>
							<button onFocus={() => setTechnology('Django')} className='hover:text-clay-500  hover:scale-110 focus:scale-110 focus:text-clay-500   '>
								<SiDjango className='p-4' />
							</button>
							<button onFocus={() => setTechnology('Angular')} className='hover:text-clay-500 hover:scale-110 focus:scale-110  focus:text-clay-500   '>
								<FaAngular className='p-4' />
							</button>
						</div>
					</div>
				</div>
				<div className='flex flex-row justify-items-evenly'>
					<div className='flex flex-col '>
						<h1 className='text-clay-500 text-4xl'>{technology}</h1>
						<FaRegHeart className='fill-red-500' />
					</div>
				</div>
			</div>
		</div>
	);
};
