import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";

function App() {
	return (
		<div className='flex flex-col justify-between h-screen '>
			<NavBar />

			<Home />
			<section></section>
			<Footer />
		</div>
	);
}

export default App;
