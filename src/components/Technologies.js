import React from "react";
import {
	FaAngular,
	FaBootstrap,
	FaCss3,
	FaHtml5,
	FaPython,
	FaReact,
} from "react-icons/fa";
import { SiDjango, SiJavascript, SiTailwindcss } from "react-icons/si";

export const Technologies = () => {
	return (
		<div className='container pt-16 mx-auto'>
			<div className='flex flex-row justify-center'>
				<div className='flex flex-col space-y-5 p-2'>
					<div className='flex flex-row justify-center'>
						<h1 className='text-6xl text-clay-500'> Technologies</h1>
					</div>
					<div className='flex flex-row  justify-center'>
						<span className='text-stone-500'>List of technologies I know</span>
					</div>
					
					<div className='flex flex-row justify-center max-w-4xl text-clay-500 py-6 flex-wrap text-9xl space-x-9'>
						<FaReact />
						<FaHtml5 />
						<FaCss3 />
						<SiTailwindcss />
						<SiJavascript />
						<FaBootstrap />
						<FaPython />
						<SiDjango />
						<FaAngular />
					</div>
				</div>
			</div>
		</div>
	);
};
