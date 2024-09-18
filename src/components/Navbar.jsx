import React, { useState } from "react";
import brasaLogo from "../assets/brasa-logo.png";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const { language, toggleLanguage } = useLanguage();

	const translations = {
		en: {
			home: "Home",
			members: "Members",
			partners: "Partners",
			contact: "Contact",
			language: "PT",
		},
		pt: {
			home: "Início",
			members: "Membros",
			partners: "Parceiros",
			contact: "Contato",
			language: "EN",
		},
	};

	return (
		<div className="p-2">
			<div className="flex h-20 max-w-[1200px] mx-auto">
				<Link to="/" className="flex">
					<img className="h-20" src={brasaLogo} alt="brasa-logo" />
					<div className="flex h-20 p-5 flex-grow">
						<h1 className="md:text-3xl text-2xl font-bold my-auto">
							BRASA BERKELEY
						</h1>
					</div>
				</Link>
				{/* Navigation links for medium and larger screens */}
				<div className="hidden md:flex flex-1 p-5 gap-4 justify-end">
					<Link
						to="/"
						className="text-2xl my-auto uppercase hover:text-gray-600"
					>
						{translations[language].home}
					</Link>
					<Link
						to="/members"
						className="text-2xl my-auto uppercase hover:text-gray-600"
					>
						{translations[language].members}
					</Link>
					<Link
						to="/partners"
						className="text-2xl my-auto uppercase hover:text-gray-600"
					>
						{translations[language].partners}
					</Link>
					<Link
						to="/contact"
						className="text-2xl my-auto uppercase hover:text-gray-600"
					>
						{translations[language].contact}
					</Link>
					<button
						className="text-2xl font-extrabold my-auto uppercase hover:text-gray-600"
						onClick={toggleLanguage}
					>
						{translations[language].language}
					</button>
				</div>
				{/* Hamburger menu button for smaller screens */}
				<button
					className={`hamburger block md:hidden focus:outline-none z-50 ${
						menuOpen ? "fixed top-[34px] right-[8px]" : ""
					}`}
					onClick={toggleMenu}
				>
					<span
						className={`block w-8 h-1 bg-black my-1 transform transition duration-500 ${
							menuOpen ? "rotate-45 translate-y-2" : ""
						}`}
					></span>
					<span
						className={`block w-8 h-1 bg-black my-1 transition duration-500 ${
							menuOpen ? "opacity-0" : ""
						}`}
					></span>
					<span
						className={`block w-8 h-1 bg-black my-1 transform transition duration-500 ${
							menuOpen ? "-rotate-45 -translate-y-2" : ""
						}`}
					></span>
				</button>
			</div>
			{/* Mobile menu */}
			<div
				className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md p-5 pt-20 flex flex-col gap-4 z-40 transform transition-transform duration-500 ease-in-out ${
					menuOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				{/* Menu content */}
				<Link
					to="/"
					className="text-2xl uppercase hover:text-gray-600"
					onClick={() => setMenuOpen(false)}
				>
					{translations[language].home}
				</Link>
				<Link
					to="/members"
					className="text-2xl uppercase hover:text-gray-600"
					onClick={() => setMenuOpen(false)}
				>
					{translations[language].members}
				</Link>
				<Link
					to="/partners"
					className="text-2xl uppercase hover:text-gray-600"
					onClick={() => setMenuOpen(false)}
				>
					{translations[language].partners}
				</Link>
				<Link
					to="/contact"
					className="text-2xl uppercase hover:text-gray-600"
					onClick={() => setMenuOpen(false)}
				>
					{translations[language].contact}
				</Link>
				<button
					className="text-2xl font-extrabold uppercase w-0 hover:text-gray-600"
					onClick={() => {
						toggleLanguage();
					}}
				>
					{translations[language].language}
				</button>
			</div>
			{/* Optional background overlay */}
			{menuOpen && (
				<div
					className="fixed inset-0 bg-black opacity-50 z-30"
					onClick={() => setMenuOpen(false)}
				></div>
			)}
		</div>
	);
}

export default Navbar;
