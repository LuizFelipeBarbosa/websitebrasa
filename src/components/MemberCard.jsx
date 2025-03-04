import React, { useState } from "react";

function MemberCard(props) {
	const { pfp, name, position, desc } = props;
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col">
			<img
				class="w-full max-h-[280px] object-cover"
				src={pfp}
				alt="Profile Picture"
			/>
			<div class="px-6 py-4 flex-grow">
				<h2 class="font-bold text-xl text-lime-600">{name}</h2>
				<p class="text-gray-700 text-sm mb-2">{position}</p>
				<p
					class={`text-gray-700 text-base ${
						isExpanded ? "" : "line-clamp-3"
					}`}
				>
					{desc}
				</p>
			</div>
			<div class="px-6 pb-4 pt-2 flex space-x-4">
				<a href="#" class="text-blue-700 hover:text-blue-950">
					LinkedIn
				</a>
				<a href="#" class="text-amber-400 hover:text-amber-600">
					Email
				</a>
				<a href="#" class="text-lime-600 hover:text-lime-800">
					Coffee Chat
				</a>
			</div>
		</div>
	);
}

export default MemberCard;
