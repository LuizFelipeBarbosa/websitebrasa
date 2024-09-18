import React from "react";
import MemberCard from "../components/MemberCard";
import { useLanguage } from "../LanguageContext";

import pfp from "../assets/pfp/dani.png";

function Members() {
	const { language, toggleLanguage } = useLanguage();

	const translations = {
		en: {
			board_leadership: "BOARD LEADERSHIP",
			board_members: "BOARD MEMBERS",
			desc: "I'm a computer science student at UFRJ. I'm passionate about technology and I'm always looking for new challenges.",
		},
		pt: {
			board_leadership: "LIDERANÇA DO CONSELHO",
			board_members: "MEMBROS DO CONSELHO",
			desc: "Sou estudante de ciência da computação na UFRJ. Sou apaixonado por tecnologia e estou sempre procurando novos desafios.",
		},
	};

	const brasa_heads = [
		{
			name: "Ana Catharina Q.",
			position: "CO-PRESIDENT",
		},
		{
			name: "Daniel Liao",
			position: "CO-PRESIDENT",
		},
		{
			name: "Bruna Leão",
			position: "VP OF OPERATIONS",
		},
		{
			name: "Joe Wang",
			position: "VP OF OPERATIONS",
		},
		{
			name: "Nicole Elmôr",
			position: "VP OF FINANCE",
		},
		{
			name: "Mariana Ierardi",
			position: "VP OF SOCIAL AFFAIRS",
		},
		{
			name: "Lucas Camargo",
			position: "VP OF TECH",
		},
		{
			name: "Ana Teresa Fabiani",
			position: "VP OF MARKETING",
		},
		{
			name: "Leonardo Soffiatti",
			position: "VP OF EXTERNAL RELATIONS",
		},
	];

	const brasa_board = [
		{
			name: "Amogh Balaji",
			position: "OPERATIONS",
		},
		{
			name: "Marina Sant'Anna",
			position: "FINANCE",
		},
		{
			name: "Christian Hulot",
			position: "FINANCE",
		},
		{
			name: "Duda Lopes",
			position: "SOCIAL AFFAIRS",
		},
		{
			name: "Thais Dubost",
			position: "SOCIAL AFFAIRS",
		},
		{
			name: "Arthur Lopes",
			position: "SOCIAL AFFAIRS",
		},
		{
			name: "Luan Cruz",
			position: "TECH",
		},
		{
			name: "Lara Chieppe",
			position: "TECH",
		},
		{
			name: "Roni Kriger",
			position: "TECH",
		},
		{
			name: "Tiffanie Guichard",
			position: "TECH",
		},
		{
			name: "Brisa Brown",
			position: "MARKETING",
		},
		{
			name: "Matheus Ribeiro",
			position: "EXTERNAL RELATIONS",
		},
	];

	return (
		<div className="max-w-[1200px] flex flex-col mx-auto">
			<h1 className="p-4 pb-0 text-4xl mx-auto">
				{translations[language].board_leadership}
			</h1>
			<div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
				{brasa_heads.map((member, index) => (
					<MemberCard
						key={index}
						pfp={pfp}
						name={member.name}
						position={member.position}
						desc={translations[language].desc}
					></MemberCard>
				))}
			</div>
			<h1 className="p-4 py-0 text-4xl mx-auto">
				{translations[language].board_members}
			</h1>
			<div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
				{brasa_board.map((member, index) => (
					<MemberCard
						key={index}
						pfp={pfp}
						name={member.name}
						position={member.position}
						desc={translations[language].desc}
					></MemberCard>
				))}
			</div>
		</div>
	);
}

export default Members;
