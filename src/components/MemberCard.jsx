import React from "react";

function MemberCard(props) {
	const { pfp, name, position, desc } = props;

	return (
		<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
			<img class="w-full" src={pfp} alt="Profile Picture" />
			<div class="px-6 py-4">
				<h2 class="font-bold text-xl text-green-500">{name}</h2>
				<p class="text-gray-700 text-sm mb-2">{position}</p>
				<p class="text-gray-700 text-base">{desc}</p>
			</div>
			<div class="px-6 pb-4 pt-2 flex space-x-4">
				<a href="#" class="text-blue-500 hover:text-blue-700">
					LinkedIn
				</a>
				<a href="#" class="text-yellow-500 hover:text-yellow-700">
					Email
				</a>
				<a href="#" class="text-green-500 hover:text-yellow-700">
					Instagram
				</a>
			</div>
		</div>
	);
}

export default MemberCard;
