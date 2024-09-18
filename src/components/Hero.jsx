import React from "react";
import brasaGroupImg from "../assets/brasa-grupo.jpg";
import { useLanguage } from "../LanguageContext";

function Hero() {
	const { language, toggleLanguage } = useLanguage();

	const translations = {
		en: {
			title: "BRAZILIAN STUDENT ASSOCIATION @ UC BERKELEY",
			button: "JOIN US!",
		},
		pt: {
			title: "ASSOCIAÇÃO DE ESTUDANTES BRASILEIROS UC BERKELEY",
			button: "JUNTE-SE A NÓS!",
		},
	};

	return (
		<div className="relative">
			<div
				className="bg-cover bg-center h-[calc(100vh-30px)]"
				style={{
					backgroundImage: `url(${brasaGroupImg})`,
					backgroundAttachment: "fixed",
				}}
			>
				<div className="absolute bottom-[-8] left-0 w-full h-[calc(100vh-30px)] bg-black opacity-50 pointer-events-none"></div>
				<div className="flex h-full items-center justify-center max-w-[1000px] mx-auto flex-col gap-16 z-10 relative">
					<h1 className="text-4xl md:text-6xl font-bold text-white text-center font-prompt tracking-wide">
						{translations[language].title}
					</h1>
					<div className="flex gap-16">
						<button className="bg-yellow-500 hover:bg-yellow-700 text-gray-100 text-2xl font-bold py-2 px-4 rounded">
							{translations[language].button}
						</button>
					</div>
				</div>
			</div>
			<div class="custom-shape-divider-bottom-1726621465">
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
		</div>
	);
}

export default Hero;
