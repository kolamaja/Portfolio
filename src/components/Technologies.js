import React, { useState } from "react";
import {
	FaAngular,
	FaBootstrap,
	FaCss3,
	FaHeart,
	FaHtml5,
	FaPython,
	FaReact,
	FaRegHeart,
} from "react-icons/fa";
import { SiDjango, SiJavascript, SiTailwindcss } from "react-icons/si";

export const Technologies = () => {
	const [technology, setTechnology] = useState("r");
	const [text, setText] = useState("placehoder");
	const [heart, setHeart] = useState(0);
	const react =
		"I gained experience with react in college by creating an application for degree. I also went through several online courses. This page was created using react.";
	const html5 =
		"I started learning html back in high school. Since then I have already created many sites from less advanced to more. I developed my skills in college and by creating my own projects.";
	const css3 =
		"I started learning css back in high school. When I mastered the basics I switched to frameworks or libraries for css. In college I solidified the basics.";
	const tailwind =
		"I started using tailwind recently. I was charmed by the simplicity and the freedom. I completed the tailwind introductory course after which I started using it for my own projects such as this website.";
	const javascript =
		"Javascript was introduced to me in high school. It was my first step with programming. After the basics, I started learning more advanced frameworks such as React and Angular.";
	const bootstrap =
		"Bootstrap was my first css library I tried to learn. Thanks to it I mastered the ability to create quality websites quickly. Bootstrap was also introduced to me in college.";
	const python =
		"I learned Python to create a web application to get a degree in computer science. This was my first fullstack experience. I learned how to create REST APIs.";
	const django =
		"I used Django while working on a web application in college. The framework made it easy for me to create a REST interface.";
	const angular =
		"I learned Angular in college. I also went through a couple of courses and worked on projects as part of my studies. I used Angular in an internship as a fullstack developer.";
	const content = (tech, hearts, p) => {
		setTechnology(tech);
		setHeart(hearts);
		setText(p);
	};

	const hearts = () => {
		var arr = [];
		let halfHearts = 5;
		for (let index = 1; index <= heart; index++) {
			arr.push(<FaHeart key={index} />);
			halfHearts--;
		}
		while (halfHearts > 0) {
			arr.push(<FaRegHeart key={halfHearts - 10} />);
			halfHearts--;
		}
		return arr;
	};

	return (
		<div className='container   mx-auto'>
			<div className='flex flex-row justify-around mx-10 py-16 my-10 shadow-md rounded-md bg-almostWhite-300  '>
				<div className='flex flex-row justify-start'>
					<div className='flex flex-col space-y-5 p-1 drop-shadow-sm'>
						<div className='flex flex-row justify-start'>
							<h1 className='text-6xl ml-6 font-bold text-clay-500'> Technologies</h1>
						</div>
						<div className='flex flex-row ml-6 justify-start'>
							<span className='text-lightBlue-800 text-base pl-2'>
								List of technologies I know
							</span>
						</div>

						<div className='flex flex-row justify-center max-w-2xl  text-stone-300 py-6 flex-wrap text-9xl  '>
							<button
								autoFocus
								onFocus={() => content("React", 5, react)}
								className='hover:text-clay-500 outline-none hover:scale-110 focus:scale-110 focus:text-clay-500    '>
								<FaReact className='p-4' />
							</button>
							<button
								onFocus={() => content("HTML5", 5, html5)}
								className='hover:text-clay-500 hover:scale-110 focus:scale-110  focus:text-clay-500   '>
								<FaHtml5 className='p-4' />
							</button>
							<button
								onFocus={() => content("CSS3", 4, css3)}
								className='hover:text-clay-500 hover:scale-110 focus:scale-110  focus:text-clay-500   '>
								<FaCss3 className='p-4' />
							</button>
							<button
								onFocus={() => content("Tailwind", 5, tailwind)}
								className='hover:text-clay-500 hover:scale-110 focus:scale-110  focus:text-clay-500   '>
								<SiTailwindcss className='p-4' />
							</button>
							<button
								onFocus={() => content("JavaScript", 4, javascript)}
								className='hover:text-clay-500 hover:scale-110 focus:scale-110  focus:text-clay-500   '>
								<SiJavascript className='p-4' />
							</button>
							<button
								onFocus={() => content("Bootstrap", 4, bootstrap)}
								className='hover:text-clay-500  hover:scale-110 focus:scale-110 focus:text-clay-500   '>
								<FaBootstrap className='p-4' />
							</button>
							<button
								onFocus={() => content("Python", 4, python)}
								className='hover:text-clay-500  hover:scale-110 focus:scale-110 focus:text-clay-500   '>
								<FaPython className='p-4' />
							</button>
							<button
								onFocus={() => content("Django", 3, django)}
								className='hover:text-clay-500  hover:scale-110 focus:scale-110 focus:text-clay-500   '>
								<SiDjango className='p-4' />
							</button>
							<button
								onFocus={() => content("Angular", 2, angular)}
								className='hover:text-clay-500 hover:scale-110 focus:scale-110  focus:text-clay-500   '>
								<FaAngular className='p-4' />
							</button>
						</div>
					</div>
				</div>
				<div className='flex flex-row justify-items-evenly drop-shadow-sm'>
					<div className='flex flex-col max-w-md space-y-2 '>
						<h1 className='text-clay-500 text-4xl pt-5 font-bold'>{technology}</h1>

						<h2 className="text-xl pt-4">Experience: </h2>

						<p className="text-lg text-lightBlue-800">{text}</p>
						<h2 className="text-xl pt-4">Familiarity: </h2>
						<div className='flex flex-row text-3xl drop-shadow-sm text-clay-500 space-x-2'>
							{hearts()}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
