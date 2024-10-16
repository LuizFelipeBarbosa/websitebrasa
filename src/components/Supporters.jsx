import React from "react";
import asucLogo from "../assets/asuc-logo.png";
import spanishPortugueseLogo from "../assets/spanish-portuguese.png";
import brasaGlobalLogo from "../assets/brasa-global.png";
import { Link } from "react-router-dom";

import { useLanguage } from "../LanguageContext";

function Supporters() {
	const { language, toggleLanguage } = useLanguage();

	const translations = {
		en: {
			interest_question: "Interested in becoming a Partner?",
			button: "CONTACT US",
		},
		pt: {
			interest_question: "Interessado em se tornar um Parceiro?",
			button: "CONTATE-NOS",
		},
	};

	return (
		<div>
			<div className="p-16 bg-blue-50 relative">
				<div class="custom-shape-divider-top-1726618814">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path
							d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
							class="shape-fill"
						></path>
					</svg>
				</div>
				<div className="grid grid-cols-2 gap-4 max-w-[1200px] mx-auto">
					<img
						className="mx-auto my-auto col-span-2 max-h-[100px]"
						src={spanishPortugueseLogo}
						alt="spanish&portuguese-logo"
					/>
					<img
						className="mx-auto my-auto max-h-[100px]"
						src={brasaGlobalLogo}
						alt="brasa-logo"
					/>
					<img
						className="mx-auto my-auto max-h-[100px]"
						src={asucLogo}
						alt="asuc-logo"
					/>
				</div>
				<div class="custom-shape-divider-bottom-1726619951">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path
							d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
							class="shape-fill"
						></path>
					</svg>
				</div>
			</div>
			<div className="max-w-[1200px] mx-auto  p-8 flex flex-col">
				<h1 className="text-4xl font-semibold text-center border-solid ">
					{translations[language].interest_question}
				</h1>
				<p className="text-lg text-center text-black my-4">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Velit libero labore, delectus excepturi quidem quas adipisci
					temporibus quod cumque, aliquid aperiam quo illum odit
					pariatur reiciendis asperiores explicabo natus accusantium.
				</p>
				<Link
					to="/contact"
					className="bg-yellow-500 mx-auto hover:bg-yellow-700 text-gray-100 text-2xl font-bold py-2 px-4 rounded"
				>
					{translations[language].button}
				</Link>
			</div>
		</div>
	);
}

export default Supporters;
