import React from "react";
import brasaLogo from "../assets/brasa-logo.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

function Footer() {
	const { language, toggleLanguage } = useLanguage();
	const translations = {
		en: {
			general: "General",
			home: "Home",
			members: "Members",
			partners: "Partners",
			contact: "Contact",
			language: "PT",
		},
		pt: {
			general: "Geral",
			home: "Início",
			members: "Membros",
			partners: "Parceiros",
			contact: "Contato",
			language: "EN",
		},
	};

	return (
		<div className="relative p-2 bg-blue-950 pt-[50px]">
			<div class="custom-shape-divider-top-1726621557">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
						class="shape-fill"
					></path>
				</svg>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-10 md:mx-auto max-w-[1200px]">
				<Link to="/" className="flex flex-col col-span-2 md:col-span-1">
					<img
						className="mx-auto my-auto h-32 w-32"
						src={brasaLogo}
						alt="brasa-logo"
					/>
					<div className="flex p-5 pt-0">
						<h1 className="text-3xl font-bold mx-auto text-white text-center">
							BRASA BERKELEY
						</h1>
					</div>
				</Link>
				<div className="p-5 mx-auto">
					<div className="flex gap-2 flex-col">
						<h1 className="my-auto text-yellow-500 uppercase">
							{translations[language].general}
						</h1>
						<Link
							to="/"
							className="my-auto uppercase text-gray-300 hover:text-gray-600"
						>
							{translations[language].home}
						</Link>
						<Link
							to="/members"
							className="my-auto uppercase text-gray-300 hover:text-gray-600"
						>
							{translations[language].members}
						</Link>
						<Link
							to="/partners"
							className="my-auto uppercase text-gray-300 hover:text-gray-600"
						>
							{translations[language].partners}
						</Link>
						<Link
							to="/contact"
							className="my-auto uppercase text-gray-300 hover:text-gray-600"
						>
							{translations[language].contact}
						</Link>
					</div>
				</div>
				<div className="flex p-5 gap-2 flex-col mx-auto">
					<h1 className="text-yellow-500 uppercase">
						{translations[language].contact}
					</h1>
					<button className="fill-gray-300 hover:fill-gray-500">
						<svg
							className="h-8 w-8"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
						</svg>
					</button>
					<button className="fill-gray-300 hover:fill-gray-500">
						<svg
							className="h-8 w-8"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
						</svg>
					</button>
					<button className="fill-gray-300 hover:fill-gray-500">
						<svg
							className="h-8 w-8"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Footer;
