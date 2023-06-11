import "./modal.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

// <div className="languages">
// Languages used: <br></br>
// {item.languages.map((language) => (
// 	<div className="language">{language}</div>
// ))}
// </div>

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
				<div className="portfolio-content">
					<div className="title">{item.title}</div>

					{item.img && (
						<img className="image" src={item.img} alt="" />
					)}
					{item.link.startsWith("www") && (
						<div className="itemLink">
							<a className="link" href={item.link}>
								{item.link}
							</a>
						</div>
					)}
					{!item.link.startsWith("www") && (
						<div className="itemLink">{item.link}</div>
					)}
					<div className="description">{item.description}</div>
					<div className="keyFeatures">Features</div>
					{item.keyFeatures.map((feature) => (
						<div className="feature">{feature}</div>
					))}
				</div>
			</div>
		</div>
	);
}
