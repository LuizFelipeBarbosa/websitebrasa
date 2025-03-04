import React from "react";
import MemberCard from "../components/MemberCard";
import { useLanguage } from "../LanguageContext";
import memberData from "./members.json";

function Members() {
	const { language, toggleLanguage } = useLanguage();

	const translations = {
		en: {
			board_leadership: "Board Members",
		},
		pt: {
			board_leadership: "Membros do Conselho",
		},
	};

	return (
		<div className="max-w-[1200px] flex flex-col mx-auto">
			<h1 className="p-4 pb-0 text-5xl mx-auto mt-10 mb-6">
				{translations[language].board_leadership}
			</h1>
			<div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
				{memberData.map((member, index) => (
					<MemberCard
						key={index}
						pfp={member.pfp}
						name={member.name}
						position={member.position}
						desc={member.bio[language]}
					></MemberCard>
				))}
			</div>
		</div>
	);
}

export default Members;
