
import { Routes, Route } from "react-router-dom";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { PageNotFound } from "./Pages/PageNotFound";
import { Portfolio } from "./Pages/Portfolio";

function App() {
	return (
		<Routes>
			<Route  path="/" element={<Home />} />
			<Route path="/about" element={<About />}/>
			<Route path="/portfolio" element={<Portfolio />}/>
			<Route path="/contact" element={<Contact />}/>
			<Route path="*" element={<PageNotFound />}/>
			
			
		
		</Routes>
	);
}

export default App;
