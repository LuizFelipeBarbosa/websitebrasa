import React, { useState } from "react";
import eventsData from "./eventsData.json";
import "./EventsStyles.css";
import { useLanguage } from "../LanguageContext";

function Events() {
	const [selectedEvent, setSelectedEvent] = useState(null);

	const handleEventClick = (event) => {
		setSelectedEvent(event);
	};

	const closeModal = () => {
		setSelectedEvent(null);
	};

	const { language, toggleLanguage } = useLanguage();
	const translations = {
		en: {
			title: "Upcoming Events",
			date: "Date:",
			pastTitle: "Past Events",
		},
		pt: {
			title: "Próximos Eventos",
			date: "Data:",
			pastTitle: "Eventos Anteriores",
		},
	};

	return (
		<div className="events-container">
			<h1 className="events-title">{translations[language].title}</h1>
			<h1 className="events-title">{translations[language].pastTitle}</h1>
			<ul className="events-list">
				{eventsData.map((event) => (
					<li key={event.id} className="event-item">
						<button
							className="event-button"
							onClick={() => handleEventClick(event)}
						>
							<img
								src={event.image}
								alt={event.title}
								className="event-image"
							/>
							<div className="event-details">
								<h2>{event.title}</h2>
								<p>
									<strong>
										{translations[language].date}
									</strong>{" "}
									{event.date}
								</p>
								<p>{event.description}</p>
							</div>
						</button>
					</li>
				))}
			</ul>

			{selectedEvent && (
				<div className="modal" onClick={closeModal}>
					<div
						className="modal-content"
						onClick={(e) => e.stopPropagation()}
					>
						<span className="close" onClick={closeModal}>
							&times;
						</span>
						<img
							src={selectedEvent.image}
							alt={selectedEvent.title}
							className="modal-image"
						/>
						<h2>{selectedEvent.title}</h2>
						<p>
							<strong>{translations[language].title}</strong>{" "}
							{selectedEvent.date}
						</p>
						<p>{selectedEvent.description}</p>
						<p>{selectedEvent.details}</p>{" "}
						{/* Additional details */}
					</div>
				</div>
			)}
		</div>
	);
}

export default Events;
