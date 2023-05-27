import "./modal.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function Modal({ setIsOpen, item }) {
	const showHideClassName = setIsOpen
		? "modal display-block"
		: "modal display-none";
	return (
		<div className={showHideClassName}>
			<div class="portfolio-modal">
				<button className="btn" onClick={() => setIsOpen(false)}>
					<FontAwesomeIcon icon={faClose} size="2x" />
				</button>
				<div className="title">{item.title}</div>
				<div className="link">{item.link}</div>
				{item.img && <img className="image" src={item.img} alt="" />}
				<div className="description">{item.description}</div>
				<div className="keyFeatures">
					Features: <br></br>
					{item.keyFeatures}
				</div>
				<div className="languages">
					Languages used: <br></br>
					{item.languages.map((language) => (
						<div className="language">{language}</div>
					))}
				</div>
			</div>
		</div>
	);
}
