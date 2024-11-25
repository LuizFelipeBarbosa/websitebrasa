import React, { useState, useEffect } from "react";
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

	const [offsetY, setOffsetY] = useState(0);

	useEffect(() => {
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					setOffsetY(window.pageYOffset);
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="relative overflow-hidden">
			<div className="relative h-[calc(100vh-30px)]">
				<div
					className="absolute top-0 left-0 w-full h-[calc(100vh-30px)]"
					style={{
						backgroundImage: `url(${brasaGroupImg})`,
						backgroundSize: "cover",
						backgroundPosition: "center -250px", // Move image 50px upward
						transform: `translateY(${offsetY * 0.5}px)`,
						willChange: "transform",
					}}
				></div>
				<div className="absolute bottom-0 left-0 w-full h-[calc(100vh-30px)] bg-black opacity-50 pointer-events-none"></div>
				<div className="flex h-full items-center justify-center max-w-[1000px] mx-auto flex-col gap-16 z-10 relative">
					<h1 className="text-4xl md:text-6xl font-bold text-white text-center font-prompt tracking-wide">
						{translations[language].title}
					</h1>
					<div className="flex gap-16">
						<a href="https://forms.gle/CGyCXrU9YHJGYqfU7">
							<button className="bg-amber-400 hover:bg-amber-600 text-gray-100 text-2xl font-bold py-2 px-4 rounded">
								{translations[language].button}
							</button>
						</a>
					</div>
				</div>
			</div>
			<div className="custom-shape-divider-bottom-1726621465">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
						className="shape-fill"
					></path>
				</svg>
			</div>
		</div>
	);
}

export default Hero;
