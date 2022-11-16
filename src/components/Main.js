import React from "react";

export const Main = () => {
	return (
		<div className='container mx-auto '>
			<div className='flex flex-row items-center space-x-6 mt-10 px-8 py-8 '>
				<div className='flex flex-col mb-32 space-y-7 w-1/2'>
					<h1 className='text-6xl text-left text-clay-500'>
						Hi my name is Mikołaj!
					</h1>
					<span className='text-left text-base max-w-lg text-stone-500 my-5'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
						interdum erat eu turpis sollicitudin tempor. Aenean a erat et neque
						placerat lobortis.
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
	);
};
