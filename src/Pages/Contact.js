import React from "react";
import { useRef } from "react";
import { FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import emailjs from "@emailjs/browser";

export const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_338hpvn",
				"template_qznapqm",
				form.current,
				"U6c2-WF6qEMqypYke"
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log("Message send");
				},
				(error) => {
					console.log(error.text);
					console.log("Failed");
				}
			);
	};
	return (
		<div className='flex flex-col justify-between h-screen '>
			<NavBar />
			<div className='container mt-10 mb-10 mx-auto'>
				<form ref={form} onSubmit={sendEmail}>
					<div className='flex flex-row justify-center'>
						<div className='flex flex-col'>
							<h1 className='text-3xl font-bold text-elephant-700 my-4'>
								Contact me!
							</h1>
							<div className='flex flex-row max-w-lg'>
								<div className=' flex flex-col mr-24 border-b-2  border-clay-500'>
									<h1 className='my-2 text-base'>FIRST NAME</h1>
									<input
										placeholder='Michael'
										className='appearance-none shadow bg-almostWhite-400 border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
										type='text'
										name='user_first_name'
									/>
								</div>
								<div className='flex flex-col border-b-2 border-clay-500'>
									<h1 className='my-2 text-base'>LAST NAME</h1>
									<input
										placeholder='Scott'
										className='appearance-none shadow bg-almostWhite-400 border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
										type='text'
										name='user_last_name'
									/>
								</div>
							</div>
							<div className='flex flex-col mt-2 border-b-2 max-w-lg border-clay-500'>
								<h1 className='my-2 text-base'>EMAIL</h1>
								<input
									placeholder='michael.scott@gmail.com'
									className='appearance-none shadow bg-almostWhite-400 border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
									type='email'
									name='user_email'
								/>
							</div>
							<div className='flex flex-col max-w-lg mt-4'>
								<h1 className='my-2 text-base'>MESSAGE</h1>
								<textarea
									placeholder='I want to hire you!'
									name='message'
									className=' border-b-2 h-32 bg-almostWhite-400 w-full border-t-none focus:outline-none leading-tight mr-3 py-1 px-2 border-clay-500 shadow resize-none'
								/>
							</div>
							<input
								className='bg-clay-500 rounded-full mt-4 p-1 w-1/6 text-almostWhite-500 hover:bg-clay-400 hover:scale-105 cursor-pointer'
								type='submit'
								value='Send'
							/>
						</div>
					</div>
				</form>
				<div className='flex justify-center mt-10 mb-4 text-clay-500 text-3xl  flex-row'>
					<div className='flex mr-6 items-center'>
						<FaPhoneSquareAlt className='' />
						<h1 className=' pl-2 text-xl text-black'>+48 730 279 733</h1>
					</div>
					<div className='flex items-center'>
						<FaEnvelope />
						<h1 className='pl-3 text-xl text-black'>
							mikolaj.niedzwiecki99@gmail.com
						</h1>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
