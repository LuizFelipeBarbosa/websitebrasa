import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Members from "./pages/Members";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Router>
				<Navbar></Navbar>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/members" element={<Members />} />
					<Route path="/partners" element={<Partners />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer></Footer>
			</Router>
		</>
	);
}

export default App;
