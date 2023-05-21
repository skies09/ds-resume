import { useState } from "react";
import { SkillsData } from "../../skillsData";
import "./skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
	const [current, setCurrent] = useState(0);
	const length = SkillsData.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(SkillsData) || SkillsData.length <= 0) {
		return null;
	}

	return (
		<div className="skills" id="skills">
			<div className="header">
				<h1>Skills</h1>
			</div>
			<div className="slider">
				<FontAwesomeIcon
					className="left-arrow"
					icon={faArrowLeft}
					size="2x"
					onClick={prevSlide}
				/>
				<FontAwesomeIcon
					className="right-arrow"
					icon={faArrowRight}
					size="2x"
					onClick={nextSlide}
				/>

				{SkillsData.map((slide, index) => {
					return (
						<div
							className={
								index === current ? "slide active" : "slide"
							}
							key={index}
						>
							{index === current && (
								<div className="sliderBox">
									<div className="sliderBox-title">
										{slide.title}
									</div>
									<div className="sliderBox-skills">
										<ul>
											{slide.skills.map((skill) => {
												return <li> • {skill}</li>;
											})}
										</ul>
									</div>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
