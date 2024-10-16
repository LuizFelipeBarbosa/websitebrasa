import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../LanguageContext";

function Contact() {
	const { language, toggleLanguage } = useLanguage();
	const translations = {
		en: {
			contact_us: "CONTACT US",
			contact_us_desc: "Feel free to reach out to us with any questions!",
			first_name: "First Name",
			last_name: "Last Name",
			message: "Message",
			send_button: "Send",
		},
		pt: {
			contact_us: "CONTATE-NOS",
			contact_us_desc:
				"Sinta-se à vontade para entrar em contato conosco com qualquer dúvida!",
			first_name: "Nome",
			last_name: "Sobrenome",
			message: "Mensagem",
			send_button: "Enviar",
		},
	};

	const form = useRef();

	const EMAILJS_SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID;
	const EMAILJS_TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID;
	const EMAILJS_API_PUBLIC_KEY = import.meta.env.EMAILJS_API_PUBLIC_KEY;

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
				publicKey: "YOUR_PUBLIC_KEY",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<div className="min-h-[calc(100vh-346px)] flex items-center justify-center max-w-[1200px] mx-auto">
			<div className="bg-white p-8 flex flex-col md:flex-row md:space-x-12">
				{/* Column 1 */}
				<div className="md:w-1/2 mb-8 md:mb-0">
					<h2 className="text-4xl font-bold text-blue-700 mb-8">
						{translations[language].contact_us}
					</h2>
					<p className="text-gray-700 mb-4">
						{translations[language].contact_us_desc}
					</p>
				</div>
				{/* Column 2 */}
				<div className="md:w-1/2">
					<form className="space-y-4" ref={form} onSubmit={sendEmail}>
						<div className="flex space-x-4">
							<input
								type="text"
								name="user_name"
								placeholder={translations[language].first_name}
								className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
							/>
							<input
								type="text"
								placeholder={translations[language].last_name}
								className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
							/>
						</div>
						<input
							type="email"
							name="user_email"
							placeholder="Email"
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
						/>
						<textarea
							name="message"
							placeholder={translations[language].message}
							className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
						/>
						<button
							type="submit"
							value="Send"
							className="w-full bg-lime-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
						>
							{translations[language].send_button}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;

